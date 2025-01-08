import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface RegisteredUserState {
  name: string;
  email: string;
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
      action: PayloadAction<{ email: string; password: string; name: string }>
    ) => {
      state.isRegistering = true;
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
      state = initialState;
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
