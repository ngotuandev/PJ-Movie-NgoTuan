import { getId } from "../../utils/serviceUtil";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataDetailPage: [],
  dataDetailShowstime: [],
};

const DetailSlice = createSlice({
  name: "DetailSlice",
  initialState,
  reducers: {
    getDataDetailPage: (state, { payload }) => {
      let dataNew = [...state.dataDetailPage];
      let index = dataNew.findIndex((item) => item.maPhim === payload.maPhim);
      if (index !== -1) {
        return { ...state };
      }

      let urlNew = getId(payload.trailer);
      payload.trailer = `//www.youtube-nocookie.com/embed/${urlNew}?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0`;

      dataNew[0] = payload;

      state.dataDetailPage = dataNew;
    },
    getDataDetailShowstime: (state, { payload }) => {
      let dataNew = [...state.dataDetailShowstime];
      let index = dataNew.findIndex((item) => item.maPhim === payload.maPhim);
      if (index !== -1) {
        return { ...state };
      }
      dataNew[0] = payload;
      state.dataDetailShowstime = dataNew;
    },
  },
});

export const { getDataDetailPage, getDataDetailShowstime } =
  DetailSlice.actions;
export default DetailSlice.reducer;
