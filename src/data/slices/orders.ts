import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetailsState } from "./products";

export interface CartItemState {
  item: ProductDetailsState;
  quantity: number;
  orderStatus: string;
}

export interface OrdersState {
  isLoading: boolean;
  isWriteSuccess: boolean;
  cartitem: CartItemState[] | null;
  ordereditem: CartItemState[] | null;
  error: string | null;
}

const initialState: OrdersState = {
  cartitem: null,
  ordereditem: null,
  isLoading: false,
  isWriteSuccess: false,
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addItemsToCart: (state, action: PayloadAction<CartItemState[]>) => {
      state.isLoading = true;
    },
    addItemsToCartSuccess: (state, action: PayloadAction<CartItemState[]>) => {
      state.isLoading = false;
      state.cartitem = action.payload;
      state.isWriteSuccess = true;
    },
    addItemsToCartFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    addOrderedItems: (state, action: PayloadAction<OrdersState>) => {
      state.isLoading = true;
    },
    addOrderedItemsSuccess: (state, action: PayloadAction<CartItemState[]>) => {
      state.isLoading = false;
      state.ordereditem = action.payload;
      state.isWriteSuccess = true;
    },
    addOrderedItemsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addItemsToCart,
  addItemsToCartSuccess,
  addItemsToCartFailure,
  addOrderedItems,
  addOrderedItemsSuccess,
  addOrderedItemsFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
