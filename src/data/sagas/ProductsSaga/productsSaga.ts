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

const productsState = (state: { products: ProductsState }) =>
  state.products.allProducts;

function* fetchFireBaseProducts(action: ReturnType<typeof fetchProducts>) {
  try {
    const productsList: ProductDetailsState[] = yield call(getProducts);
    yield put(fetchProductsSuccess(productsList));
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Products fetch failed";
    yield put(fetchProductsFailure(errorMessage));
  }
}

function* addFireBaseProduct(action: ReturnType<typeof addProduct>) {
  try {
    yield call(createProduct, action.payload);
    yield put(addProductSuccess());
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Products addition failed";
    yield put(fetchProductsFailure(errorMessage));
  }
}

function* updateFireBaseProduct(action: ReturnType<typeof updateProduct>) {
  try {
    yield call(modifyProduct, action.payload);
    yield put(updateProductSuccess());
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Products updation failed";
    yield put(updateProductFailure(errorMessage));
  }
}

function* deleteFireBaseProduct(action: ReturnType<typeof deleteProduct>) {
  try {
    yield call(dropProduct, action.payload);
    yield put(deleteProductSuccess());
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Products delete failed";
    yield put(deleteProductFailure(errorMessage));
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
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Products filtering failed";
    yield put(getFilteredProductsFailure(errorMessage));
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
