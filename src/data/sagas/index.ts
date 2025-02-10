import { all } from "redux-saga/effects";
import loginSaga from "./LoginSaga/loginSaga";
import registerSaga from "./RegisterSaga/registerSaga";
import productsSaga from "./ProductsSaga/productsSaga";
import cartsandOrdersSaga from "./CartsandOrdersSaga/cartsandOdersSaga";

export default function* rootSaga() {
  yield all([loginSaga(), registerSaga(), productsSaga(), cartsandOrdersSaga()]);
}
