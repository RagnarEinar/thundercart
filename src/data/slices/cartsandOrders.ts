import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetailsState } from "./products";

export interface CartItemState {
  item: ProductDetailsState;
  userSelectedQuantity: number;
  rating?: number | null;
  review?: string;
}

export interface OrdersItemState {
  orderId: string;
  orderItems: CartItemState[];
  status: string; // Order status (e.g., 'ordered', 'shipped', 'delivered')
  orderedDate: string;
}

export interface CartsandOrdersState {
  cartItems: CartItemState[]; // Items in the cart before checkout
  myOrders: OrdersItemState[]; // Placed orders with their statuses
  isLoading: boolean;
  error: string | null;
  isWriteSuccess: boolean;
  isOrderPlaced: boolean;
}
export interface AddProductReviewPayload {
  prduid: string;
  orderId: string;
  review: string;
}

export interface AddProductRatingPayload {
  prduid: string;
  orderId: string;
  rating: number;
}

const initialState: CartsandOrdersState = {
  cartItems: [],
  isLoading: false,
  error: null,
  isWriteSuccess: false,
  myOrders: [],
  isOrderPlaced: false,
};

const cartsandOrdersSlice = createSlice({
  name: "cartsandOrders",
  initialState,
  reducers: {
    fetchCartsandOrders: (state) => {
      state.isLoading = true;
      state.isWriteSuccess = false;
      state.isOrderPlaced = false;
      state.error = null;
    },
    fetchCartsandOrdersSuccess: (
      state,
      action: PayloadAction<{
        cartItems: CartItemState[];
        myOrders: OrdersItemState[];
      }>
    ) => {
      state.isLoading = false;
      state.cartItems = action.payload.cartItems;
      state.myOrders = action.payload.myOrders;
    },
    fetchCartsandOrdersFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Add item to cart
    addItemToCart: (state, action: PayloadAction<CartItemState>) => {
      state.isLoading = true;
      state.isWriteSuccess = false;
      state.error = null;
    },
    addItemToCartSuccess: (state, action: PayloadAction<CartItemState>) => {
      state.isLoading = false;
      state.cartItems.push(action.payload);
      state.isWriteSuccess = true;
    },
    addItemToCartFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Delete item from cart
    deleteItemFromCart: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
    },
    deleteItemFromCartSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.cartItems = state.cartItems.filter(
        (item) => item.item.prduniqueid !== action.payload
      );
      state.isWriteSuccess = true;
    },
    deleteItemFromCartFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Update item quantity
    updateItemQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      state.isLoading = true;
      state.error = null;
    },
    updateCartItemQuantitySuccess: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.item.prduniqueid === action.payload.productId
      );
      if (itemIndex !== -1) {
        state.cartItems[itemIndex].userSelectedQuantity +=
          action.payload.quantity;
      }
      state.isWriteSuccess = true;
      state.isLoading = false;
    },
    updateCartItemQuantityFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Place order
    placeOrder: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isOrderPlaced = false;
    },
    placeOrderSuccess: (state, action: PayloadAction<OrdersItemState[]>) => {
      state.isOrderPlaced = true;
      state.myOrders = action.payload;
      state.cartItems = [];
      state.isLoading = false;
    },
    placeOrderFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //Rating
    addProductRating: (
      state,
      action: PayloadAction<AddProductRatingPayload>
    ) => {
      state.isLoading = true;
      state.isWriteSuccess = false;
      state.error = null;
    },
    addProductRatingSuccess: (
      state,
      action: PayloadAction<AddProductRatingPayload>
    ) => {
      state.isLoading = false;
      state.isWriteSuccess = true;
      state.isWriteSuccess = true;
      state.myOrders.forEach((order) => {
        if (order.orderId === action.payload.orderId) {
          order.orderItems.forEach((item) => {
            if (item.item.prduniqueid === action.payload.prduid) {
              item.rating = action.payload.rating;
            }
          });
        }
      });
    },
    addProductRatingFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //review

    addProductReview: (
      state,
      action: PayloadAction<AddProductReviewPayload>
    ) => {
      state.isLoading = true;
      state.isWriteSuccess = false;
      state.error = null;
    },
    addProductReviewSuccess: (
      state,
      action: PayloadAction<AddProductReviewPayload>
    ) => {
      state.isLoading = false;
      state.isWriteSuccess = true;
      state.myOrders.forEach((order) => {
        if (order.orderId === action.payload.orderId) {
          order.orderItems.forEach((item) => {
            if (item.item.prduniqueid === action.payload.prduid) {
              item.review = action.payload.review;
            }
          });
        }
      });
    },
    addProductReviewFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Reset error state
    resetCartErrorState: (state) => {
      state.error = null;
    },
  },
});

export const {
  fetchCartsandOrders,
  fetchCartsandOrdersSuccess,
  fetchCartsandOrdersFailure,
  addItemToCart,
  addItemToCartSuccess,
  addItemToCartFailure,
  deleteItemFromCart,
  deleteItemFromCartSuccess,
  deleteItemFromCartFailure,
  updateItemQuantity,
  updateCartItemQuantitySuccess,
  updateCartItemQuantityFailure,
  placeOrder,
  placeOrderSuccess,
  placeOrderFailure,
  resetCartErrorState,
  addProductRating,
  addProductRatingSuccess,
  addProductRatingFailure,
  addProductReview,
  addProductReviewSuccess,
  addProductReviewFailure,
} = cartsandOrdersSlice.actions;

export default cartsandOrdersSlice.reducer;
