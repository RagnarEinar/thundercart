import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string;
  email: string;
  role: string;
  address?: string;
}
export interface LoginState {
  isLogging: boolean;
  userDetails: UserState | null;
  error: string | null;
}

const initialState: LoginState = {
  userDetails: null,
  isLogging: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    signInRequest: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.isLogging = true;
      state.userDetails = null;
      state.error = null;
    },
    signInSuccess: (state, action: PayloadAction<UserState>) => {
      state.isLogging = false;
      state.userDetails = action.payload;
    },
    signInFailure: (state, action: PayloadAction<string>) => {
      state.isLogging = false;
      state.error = action.payload;
    },
    signOut: (state) => {
      state.isLogging = false;
      state.userDetails = null;
      state.error = null;
    },
    resetLogin: (state) => {
      state.isLogging = false;
      state.userDetails = null;
      state.error = null;
    },
    updateAddress: (state, action: PayloadAction<string>) => {
      state.error = null;
    },
    updateAddressSuccess: (state, action: PayloadAction<string>) => {
      if (state.userDetails) {
        state.userDetails.address = action.payload;
      }
    },
    updateAddressFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const {
  signInRequest,
  signInSuccess,
  signInFailure,
  signOut,
  resetLogin,
  updateAddress,
  updateAddressSuccess,
  updateAddressFailure,
} = loginSlice.actions;

export default loginSlice.reducer;
