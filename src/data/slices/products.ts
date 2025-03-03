import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterObjectState } from "../../components/SideBar";

export interface CrudProductState {
  prduniqueid?: string;
  prdname: string;
  prddesc: string;
  prdsummary: string;
  prdimg: string;
  orgprice: number;
  discountedprice: number;
  category: string;
  availableQuantity: number;
  rating?: number;
  review?: string;
}

export interface ProductDetailsState {
  prduniqueid?: string;
  prdname: string;
  prddesc: string;
  prdsummary: string;
  prdimg: string;
  orgprice: number;
  discountedprice: number;
  category: string;
  availableQuantity: number;
  rating: number[];
  reviews: string[];
}

export interface ProductsState {
  isLoading: boolean;
  isReadSuccess: boolean;
  isWriteSuccess: boolean;
  allProducts: ProductDetailsState[];
  filteredProducts: ProductDetailsState[];
  filteredProductsError: string | null;
  error: string | null;
}

const initialState: ProductsState = {
  isLoading: false,
  error: null,
  isReadSuccess: false,
  isWriteSuccess: false,
  allProducts: [],
  filteredProducts: [],
  filteredProductsError: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.isLoading = true;
      state.isReadSuccess = false;
      state.isWriteSuccess = false;
      state.error = null;
    },
    fetchProductsSuccess: (
      state,
      action: PayloadAction<ProductDetailsState[]>
    ) => {
      state.isLoading = false;
      state.isReadSuccess = true;
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
      state.error = null;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isReadSuccess = false;
      state.error = action.payload;
    },
    addProduct: (state, action: PayloadAction<CrudProductState>) => {
      state.isLoading = true;
      state.isWriteSuccess = false;
      state.error = null;
    },
    addProductSuccess: (state) => {
      state.isLoading = false;
      state.isWriteSuccess = true;
    },
    addProductFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateProduct: (state, action: PayloadAction<CrudProductState>) => {
      state.isLoading = true;
      state.isWriteSuccess = false;
      state.error = null;
    },
    updateProductSuccess: (state) => {
      state.isLoading = false;
      state.isWriteSuccess = true;
    },
    updateProductFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.isWriteSuccess = false;
      state.error = null;
    },
    deleteProductSuccess: (state) => {
      state.isLoading = false;
      state.isWriteSuccess = true;
    },
    deleteProductFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isWriteSuccess = false;
      state.error = action.payload;
    },

    getFilteredProducts: (state, action: PayloadAction<FilterObjectState>) => {
      state.isReadSuccess = false;
      state.error = null;
    },
    getFilteredProductsSuccess: (
      state,
      action: PayloadAction<ProductDetailsState[]>
    ) => {
      state.isReadSuccess = true;
      state.filteredProducts = action.payload;
    },
    getFilteredProductsFailure: (state, action) => {
      state.filteredProductsError = action.payload;
    },
    resetFilteredProducts: (state) => {
      state.filteredProducts = state.allProducts;
    },
  },
});

export const {
  fetchProducts,
  fetchProductsFailure,
  fetchProductsSuccess,
  addProduct,
  addProductSuccess,
  addProductFailure,
  updateProduct,
  updateProductSuccess,
  updateProductFailure,
  deleteProduct,
  deleteProductSuccess,
  deleteProductFailure,
  getFilteredProducts,
  getFilteredProductsSuccess,
  getFilteredProductsFailure,
  resetFilteredProducts,
} = productsSlice.actions;

export default productsSlice.reducer;
