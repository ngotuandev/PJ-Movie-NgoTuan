import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataPurchase: [
    {
      thongTinPhim: {
        maLichChieu: "",
        tenCumRap: "",
        tenRap: "",
        diaChi: "",
        tenPhim: "",
        hinhAnh: "",
        ngayChieu: "",
        gioChieu: "",
      },
    },
  ],
  dataChairsMovie: [],
  idCheck: 0,
};

const PurchaseSlice = createSlice({
  name: "PurchaseSlice",
  initialState,
  reducers: {
    getDataPurchase: (state, { payload }) => {
      if (state.idCheck !== payload.thongTinPhim.maLichChieu) {
        state.dataChairsMovie = [];
      }

      let dataNew = [...state.dataPurchase];
      let index = dataNew.findIndex(
        (item) =>
          item.thongTinPhim.maLichChieu === payload.thongTinPhim.maLichChieu
      );
      if (index !== -1) {
        return { ...state };
      }
      dataNew[0] = payload;
      state.dataPurchase = dataNew;
    },
    getDataChairsMovie: (state, { payload, id }) => {
      let dataNew = [...state.dataChairsMovie];
      let index = dataNew.findIndex((item) => item.maGhe === payload.maGhe);

      index !== -1 ? dataNew.splice(index, 1) : dataNew.push(payload);

      state.dataChairsMovie = dataNew;
      state.idCheck = id;
    },
    removeDataChairsMovie: (state) => {
      state.dataChairsMovie = [];
    },
  },
});

export const { getDataPurchase, getDataChairsMovie } = PurchaseSlice.actions;

export default PurchaseSlice.reducer;
