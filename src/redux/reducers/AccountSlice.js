import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "../../service/userService";

const initialState = {
  dataAccount: {},
  dataInfoUser: {},
};

export let getDataTicketHistoryService = createAsyncThunk(
  "AccountSlice/fetchDataTicketHistory",
  async (taiKhoan) => {
    let result = await userService.postDataUser(taiKhoan);
    return result.data.content;
  }
);

export let getDataAccountUser = createAsyncThunk(
  "AccountSlice/fetchDataAccount",
  async (taiKhoan) => {
    let result = await userService.searchDataUser(taiKhoan);
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
    getDataInfoUser: (state, { payload }) => {
      state.dataInfoUser = payload;
    },
  },
  extraReducers: {
    [getDataTicketHistoryService.fulfilled]: (state, { payload }) => {
      state.dataAccount = payload;
    },
    [getDataAccountUser.fulfilled]: (state, { payload }) => {
      state.dataInfoUser = payload;
    },
  },
});

export const { getDataTicketHistory } = AccountSlice.actions;
export default AccountSlice.reducer;
