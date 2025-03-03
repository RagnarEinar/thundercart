import {
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../../../config/firebase";
import { CartItemState, OrdersItemState } from "../../slices/cartsandOrders";
import { getAuth } from "firebase/auth";
import { toast } from "react-toastify";

// Get the current authenticated user's ID
const getUserId = (): string => {
  const user = getAuth().currentUser;
  if (user) {
    return user.uid;
  }
  throw new Error("User not authenticated");
};

// Fetch cart items from the user's Firestore document
export const fetchCartsandOrdersUserDb = async (): Promise<{
  cartItems: CartItemState[];
  myOrders: OrdersItemState[];
}> => {
  const userId = getUserId(); // Ensure this function retrieves the correct user ID
  const userRef = doc(db, "Users", userId);

  // Fetch the user's data from Firestore
  const userSnapshot = await getDoc(userRef);
  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();
    const cartItems: CartItemState[] = userData?.cart || [];
    const myOrders: OrdersItemState[] = userData?.orders || [];
    return { cartItems, myOrders };
  } else {
    throw new Error("User data not found");
  }
};

// Add a cart item to the user's Firestore document
export const addCartItemToUserDb = async (
  cartItem: CartItemState
): Promise<void> => {
  const userId = getUserId();
  const userRef = doc(db, "Users", userId);

  // Check if the item already exists in the cart to prevent duplicates
  const userSnapshot = await getDoc(userRef);
  if (userSnapshot.exists()) {
    const userData = userSnapshot.data();
    const cart = userData?.cart || [];
    const itemExists = cart.some(
      (item: CartItemState) =>
        item.item.prduniqueid === cartItem.item.prduniqueid
    );
    if (itemExists) {
      throw new Error("Item already exists in cart");
    }
  }

  await updateDoc(userRef, {
    cart: arrayUnion(cartItem),
  });
};

// Remove a cart item from the user's Firestore document
export const removeCartItemFromUserDb = async (
  productId: string
): Promise<void> => {
  const userId = getUserId();
  const userRef = doc(db, "Users", userId);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    throw new Error("User document not found");
  }

  const userData = userSnapshot.data();
  const cart = userData?.cart || [];
  const itemToRemove = cart.find(
    (item: CartItemState) => item.item.prduniqueid === productId
  );

  if (!itemToRemove) {
    throw new Error("Item not found in cart");
  }

  await updateDoc(userRef, {
    cart: arrayRemove(itemToRemove),
  });
};

// Update the quantity of a cart item in the user's Firestore document
export const updateCartItemQuantityInDb = async (
  productId: string,
  quantity: number
): Promise<CartItemState> => {
  const userId = getUserId();
  const userRef = doc(db, "Users", userId);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    throw new Error("User document not found");
  }

  const userData = userSnapshot.data();
  const cart = userData?.cart || [];
  const itemToUpdate = cart.find(
    (item: CartItemState) => item.item.prduniqueid === productId
  );

  if (!itemToUpdate) {
    throw new Error("Item not found in cart");
  }
  if (itemToUpdate.userSelectedQuantity >= 5 && quantity > 0) {
    throw new Error("Quantity Max Limit 5 reached");
  }

  if (itemToUpdate.userSelectedQuantity <= 1 && quantity < 0) {
    throw new Error("Quantity Min Limit 1 reached");
  }

  // Update the user-selected quantity in the cart item
  itemToUpdate.userSelectedQuantity += quantity;

  if (itemToUpdate.userSelectedQuantity < 1) {
    itemToUpdate.userSelectedQuantity = 1; // Ensure quantity is never less than 1
  }

  // Remove the old item from the cart
  const updatedCart = cart.filter(
    (item: CartItemState) => item.item.prduniqueid !== productId
  );

  // Add the updated item to the cart
  updatedCart.push(itemToUpdate);

  // Update the cart in the database
  await updateDoc(userRef, {
    cart: updatedCart, // Set the entire updated cart
  });

  return itemToUpdate;
};

// Move items from the cart to the orders array in the user's Firestore document
export const placeOrderInDb = async (): Promise<OrdersItemState[]> => {
  const userId = getUserId();
  const userRef = doc(db, "Users", userId);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    throw new Error("Order failed");
  }

  const userData = userSnapshot.data();
  const cart = userData?.cart || [];

  if (cart.length === 0) {
    throw new Error("Order failed");
  }

  // Create a new order with cart items and status
  const newOrder: OrdersItemState = {
    orderId: Date.now().toString(),
    orderItems: cart,
    status: "Ordered",
    orderedDate: new Date().toISOString(),
  };

  // Append the new order to existing orders
  const currentOrders = userData?.orders || [];
  const updatedOrders = [...currentOrders, newOrder];

  // Clear the cart and update the orders in Firestore
  await updateDoc(userRef, {
    orders: updatedOrders, // Update with new orders
    cart: [], // Clear the cart
  });

  return updatedOrders;
};

export const addRatingInDb = async (
  prduid: string,
  orderId: string,
  rating: number
): Promise<void> => {
  try {
    const userId = getUserId();
    const userRef = doc(db, "Users", userId);
    const productRef = doc(db, "Products", prduid);

    // Fetch the user's orders
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) throw new Error("User not found");

    const userData = userSnap.data();
    const updatedOrders = userData.orders.map((order: any) => {
      if (order.orderId === orderId) {
        return {
          ...order,
          orderItems: order.orderItems.map((item: any) =>
            item.item.prduniqueid === prduid
              ? { ...item, rating } // ✅ Set rating at the orderItems level
              : item
          ),
        };
      }
      return order;
    });

    // ✅ Update the rating inside user's specific order
    await updateDoc(userRef, { orders: updatedOrders });

    // ✅ Push the rating into the existing rating array in the product document
    await updateDoc(productRef, {
      rating: arrayUnion(rating),
    });

    console.log("✅ Rating updated successfully in Users and Products DB");
    toast.success("Rating added succesfully ✅ ");
  } catch (e) {
    toast.error("Failed to submit rating");
    console.error("❌ Error while updating rating", e);
    throw new Error("Error while updating rating");
  }
};

export const addReviewInDb = async (
  prduid: string,
  orderId: string,
  review: string
): Promise<void> => {
  try {
    const userId = getUserId();
    const userRef = doc(db, "Users", userId);
    const productRef = doc(db, "Products", prduid);

    // Fetch the user's orders
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) throw new Error("User not found");

    const userData = userSnap.data();
    const updatedOrders = userData.orders.map((order: any) => {
      if (order.orderId === orderId) {
        return {
          ...order,
          orderItems: order.orderItems.map((item: any) =>
            item.item.prduniqueid === prduid
              ? { ...item, review } // ✅ Set review at the orderItems level
              : item
          ),
        };
      }
      return order;
    });

    // ✅ Update the review inside user's specific order
    await updateDoc(userRef, { orders: updatedOrders });

    // ✅ Push the review into the existing reviews array in the product document
    await updateDoc(productRef, {
      reviews: arrayUnion(review),
    });

    console.log("✅ Review updated successfully in Users and Products DB");
    toast.success("Review added succesfully ✅ ");
  } catch (e) {
    toast.error("Failed to submit review");
    console.error("❌ Error while updating review", e);
    throw new Error("Error while updating review");
  }
};
