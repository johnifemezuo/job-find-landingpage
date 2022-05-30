import { configureStore } from "@reduxjs/toolkit";
import userState from "../../components/Pages/authslices/counterSlice";

export const store = configureStore({
  reducer: {
    user: userState,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
