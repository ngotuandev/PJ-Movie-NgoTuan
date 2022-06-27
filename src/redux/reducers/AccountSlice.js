import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../service/userService";

const initialState = {
  dataAccount: {},
};

const AccountSlice = createSlice({
  name: "AccountSlice",
  initialState,
  reducers: {
    getDataTicketHistory: (state, { payload }) => {
      state.dataAccount = payload;
    },
  },
});

export const { getDataTicketHistory } = AccountSlice.actions;
export default AccountSlice.reducer;
