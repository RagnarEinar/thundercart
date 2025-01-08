import { takeEvery, put, call, select } from "redux-saga/effects";
import {
  addProduct,
  addProductSuccess,
  deleteProduct,
  deleteProductFailure,
  deleteProductSuccess,
  fetchProducts,
  fetchProductsFailure,
  fetchProductsSuccess,
  ProductDetailsState,
  updateProduct,
  updateProductFailure,
  updateProductSuccess,
  getFilteredProducts,
  getFilteredProductsSuccess,
  getFilteredProductsFailure,
  ProductsState,
} from "../../slices/products";
import {
  createProduct,
  dropProduct,
  getFilterProd,
  getProducts,
  modifyProduct,
} from "./productsCrud";

const productsState = (state: { products: ProductsState }) => state.products.allProducts;

function* fetchFireBaseProducts(action: ReturnType<typeof fetchProducts>) {
  try {
    const productsList: ProductDetailsState[] = yield call(getProducts);
    yield put(fetchProductsSuccess(productsList));
  } catch (e) {
    yield put(fetchProductsFailure(e as string));
  }
}

function* addFireBaseProduct(action: ReturnType<typeof addProduct>) {
  try {
    yield call(createProduct, action.payload);
    yield put(addProductSuccess());
  } catch (e) {
    yield put(fetchProductsFailure(e as string));
  }
}

function* updateFireBaseProduct(action: ReturnType<typeof updateProduct>) {
  try {
    yield call(modifyProduct, action.payload);
    yield put(updateProductSuccess());
  } catch (e) {
    yield put(updateProductFailure(e as string));
  }
}

function* deleteFireBaseProduct(action: ReturnType<typeof deleteProduct>) {
  try {
    yield call(dropProduct, action.payload);
    yield put(deleteProductSuccess());
  } catch (e) {
    yield put(deleteProductFailure(e as string));
  }
}

function* getFilteredProductsList(
  action: ReturnType<typeof getFilteredProducts>
) {
  const products: ProductDetailsState[] = yield select(productsState);
  const filters = action.payload;
  try {
    const result: ProductDetailsState[] = yield call(
      getFilterProd,
      products,
      filters
    );
    yield put(getFilteredProductsSuccess(result));
  } catch (e) {
    yield put(getFilteredProductsFailure(e as string));
  }
}

function* productsSaga() {
  yield takeEvery("products/fetchProducts", fetchFireBaseProducts);
  yield takeEvery("products/addProduct", addFireBaseProduct);
  yield takeEvery("products/updateProduct", updateFireBaseProduct);
  yield takeEvery("products/deleteProduct", deleteFireBaseProduct);
  yield takeEvery("products/getFilteredProducts", getFilteredProductsList);
}

export default productsSaga;
