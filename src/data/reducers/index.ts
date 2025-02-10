import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../slices/login";
import registerReducer from "../slices/register";
import productsReducer from "../slices/products";
import cartsandOrdersReducer from "../slices/cartsandOrders";

const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  products: productsReducer,
  cartandOders: cartsandOrdersReducer,
});

export default rootReducer;
