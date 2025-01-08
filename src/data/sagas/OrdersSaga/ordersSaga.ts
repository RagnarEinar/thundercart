// import { takeEvery, put, call, select } from "redux-saga/effects";


// function* fetchFireBaseCartItems(action: ReturnType<typeof fetchProducts>) {
//   try {
//     const productsList: ProductDetailsState[] = yield call(getProducts);
//     yield put(fetchProductsSuccess(productsList));
//   } catch (e) {
//     yield put(fetchProductsFailure(e as string));
//   }
// }

// function* fetchFireBaseOrderedItems(action: ReturnType<typeof addProduct>) {
//   try {
//     yield call(createProduct, action.payload);
//     yield put(addProductSuccess());
//   } catch (e) {
//     yield put(fetchProductsFailure(e as string));
//   }
// }


function* ordersSaga() {
  // yield takeEvery("orders/addItemsToCart", fetchFireBaseCartItems);
  // yield takeEvery("orders/addOrderedItems", fetchFireBaseOrderedItems);
}

export default ordersSaga;
