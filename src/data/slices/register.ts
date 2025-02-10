import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegisteredUserState {
  name: string;
  email: string;
  address: string;
}
export interface RegisterState {
  isRegistering: boolean;
  registeredUser: RegisteredUserState | null;
  error: string | null;
}

const initialState: RegisterState = {
  registeredUser: null,
  isRegistering: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerRequest: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        name: string;
        address: string;
      }>
    ) => {
      state.isRegistering = true;
      state.registeredUser = null;
      state.error = null;
    },
    registerSuccess: (state, action: PayloadAction<RegisteredUserState>) => {
      state.isRegistering = false;
      state.registeredUser = action.payload;
    },
    registerFailure: (state, action: PayloadAction<string>) => {
      state.isRegistering = false;
      state.error = action.payload;
    },
    resetRegister: (state) => {
      state.isRegistering = false;
      state.registeredUser = null;
      state.error = null;
    },
  },
});

export const {
  registerRequest,
  registerSuccess,
  registerFailure,
  resetRegister,
} = registerSlice.actions;

export default registerSlice.reducer;
