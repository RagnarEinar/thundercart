import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slices/login";
import registerReducer from "../slices/register";
import productsRegister from "../slices/products";
import ordersRegister from "../slices/orders";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  products: productsRegister,
  orders: ordersRegister,
});

export default rootReducer;
