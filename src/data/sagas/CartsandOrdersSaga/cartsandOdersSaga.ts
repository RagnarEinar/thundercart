import { takeEvery, put, call } from "redux-saga/effects";
import {
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
  CartItemState,
  OrdersItemState,
  placeOrderSuccess,
  placeOrderFailure,
  placeOrder,
} from "../../slices/cartsandOrders";
import {
  addCartItemToUserDb,
  fetchCartsandOrdersUserDb,
  placeOrderInDb,
  removeCartItemFromUserDb,
  updateCartItemQuantityInDb,
} from "./cartsandOrdersCrud";

function* fetchFirebaseCartsandOrders(
  action: ReturnType<typeof fetchCartsandOrders>
) {
  try {
    const {
      cartItems,
      myOrders,
    }: { cartItems: CartItemState[]; myOrders: OrdersItemState[] } = yield call(
      fetchCartsandOrdersUserDb
    );
    yield put(fetchCartsandOrdersSuccess({ cartItems, myOrders }));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Cart Fetch failed";
    yield put(fetchCartsandOrdersFailure(errorMessage));
  }
}

function* addFirebaseCartItem(action: ReturnType<typeof addItemToCart>) {
  try {
    yield call(addCartItemToUserDb, action.payload);
    yield put(addItemToCartSuccess(action.payload));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Item failed to add to cart";
    yield put(addItemToCartFailure(errorMessage));
  }
}

function* deleteFirebaseCartItem(
  action: ReturnType<typeof deleteItemFromCart>
) {
  try {
    yield call(removeCartItemFromUserDb, action.payload);
    yield put(deleteItemFromCartSuccess(action.payload));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Item failed to delete";
    yield put(deleteItemFromCartFailure(errorMessage));
  }
}

// New saga to update the quantity in Firestore
function* updateFirebaseCartItemQuantity(
  action: ReturnType<typeof updateItemQuantity>
) {
  const { productId, quantity } = action.payload;
  try {
    const updatedItem: CartItemState = yield call(
      updateCartItemQuantityInDb,
      productId,
      quantity
    );
    yield put(updateCartItemQuantitySuccess({ productId, quantity }));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Failed to update quantity";
    yield put(updateCartItemQuantityFailure(errorMessage));
  }
}

function* placeFirebaseOrder(action: ReturnType<typeof placeOrder>) {
  try {
    const myOrders: OrdersItemState[] = yield call(placeOrderInDb);
    yield put(placeOrderSuccess(myOrders));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Order failed";
    yield put(placeOrderFailure(errorMessage));
  }
}

function* cartsandOrdersSaga() {
  yield takeEvery(
    "cartsandOrders/fetchCartsandOrders",
    fetchFirebaseCartsandOrders
  );
  yield takeEvery("cartsandOrders/addItemToCart", addFirebaseCartItem);
  yield takeEvery("cartsandOrders/deleteItemFromCart", deleteFirebaseCartItem);
  yield takeEvery(
    "cartsandOrders/updateItemQuantity",
    updateFirebaseCartItemQuantity
  );
  yield takeEvery("cartsandOrders/placeOrder", placeFirebaseOrder);
}

export default cartsandOrdersSaga;
