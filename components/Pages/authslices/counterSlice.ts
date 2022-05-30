import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userAuth {
  login: string;
  isLogin: boolean;
}

const initialState: userAuth = {
  login: "",
  isLogin: false,
};

export const userSlice = createSlice({
  name: "login User",
  initialState,
  reducers: {
    loginUser: (state) => {
      state.isLogin = true;
    },
    logoutUser: (state) => {
      state.isLogin = false;
    },
    logUserName: (state, action: PayloadAction<any>) => {
      state.login = action.payload;
    },
  },
});

export const { loginUser, logoutUser, logUserName } = userSlice.actions;

export default userSlice.reducer;
