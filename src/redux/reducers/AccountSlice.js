import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../service/userService";

const initialState = {
  dataAccount: {},
};

export let getDataTicketHistoryService = createAsyncThunk(
  "AccountSlice/fetchDataTicketHistory",
  async (taiKhoan) => {
    let result = await userService.postDataUser(taiKhoan);
    return result.data.content;
  }
);

const AccountSlice = createSlice({
  name: "AccountSlice",
  initialState,
  reducers: {
    getDataTicketHistory: (state, { payload }) => {
      state.dataAccount = payload;
    },
  },
  extraReducers: {
    [getDataTicketHistoryService.fulfilled]: (state, { payload }) => {
      state.dataAccount = payload;
    },
  },
});

export const { getDataTicketHistory } = AccountSlice.actions;
export default AccountSlice.reducer;
