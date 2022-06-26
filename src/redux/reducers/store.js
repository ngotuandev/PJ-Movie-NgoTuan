import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./AccountSlice";
import DetailSlice from "./DetailSlice";
import HomeSlice from "./HomeSlice";
import PurchaseSlice from "./PurchaseSlice";
import SpinnerSlice from "./SpinnerSlice";

export const storeToolkit = configureStore({
  reducer: {
    SpinnerSlice,
    PurchaseSlice,
    HomeSlice,
    AccountSlice,
    DetailSlice,
  },
});
