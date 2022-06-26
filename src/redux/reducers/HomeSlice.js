import { createSlice } from "@reduxjs/toolkit";
import { localStoreService } from "../../service/localStoreService";
import { getId } from "../../utils/serviceUtil";

const initialState = {
  userLogin: localStoreService.getUserLocal(),
  carouselBanner: [],
  dataMovieList: [],
  dataTabsCinema: [],
  dataMovieSchedul: [],
  dataSearchSave: [],
};

const HomeSlice = createSlice({
  name: "HomeSlice",
  initialState,
  reducers: {
    setUserLogin: (state, { payload }) => {
      state.userLogin = payload;
    },
    addVidBanner: (state, { payload }) => {
      if (state.carouselBanner.length > 0) {
        return { ...state };
      }
      const carouselNew = [...state.carouselBanner, ...payload];
      carouselNew[0] = {
        ...carouselNew[0],
        trailer:
          "https://www.youtube-nocookie.com/embed/uqJ9u7GSaYM?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0",
      };
      carouselNew[1] = {
        ...carouselNew[1],
        trailer:
          "https://www.youtube-nocookie.com/embed/kBY2k3G6LsM?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0",
      };
      carouselNew[2] = {
        ...carouselNew[2],
        trailer:
          "https://www.youtube-nocookie.com/embed/_rUC3-pNLyc?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0",
      };

      state.carouselBanner = carouselNew;
    },
    getDataMovieList: (state, { payload }) => {
      const dataNew = [...state.dataMovieList, ...payload];

      if (state.dataMovieList.length > 0) {
        return { ...state };
      }
      let urlNew = "";
      for (let i = 0; i < dataNew.length; i++) {
        urlNew = getId(dataNew[i].trailer);
        dataNew[
          i
        ].trailer = `//www.youtube-nocookie.com/embed/${urlNew}?autoplay=1&cc_load_policy=1&controls=1&disablekb=0&enablejsapi=0&fs=1&iv_load_policy=1&loop=0&rel=0&showinfo=1&start=0&wmode=transparent&theme=dark&mute=0`;
      }
      state.dataMovieList = dataNew;
      state.dataSearchSave = dataNew;
    },

    getDataCinemaList: (state, { payload }) => {
      if (state.dataTabsCinema.length > 0) {
        return { ...state };
      }
      let dataNew = [...state.dataTabsCinema, ...payload];
      state.dataTabsCinema = dataNew;
    },
    getDataMovieSchedul: (state, { payload }) => {
      state.dataMovieSchedul[0] = payload.heThongRapChieu;
    },
    searchDataMovieList: (state, { payload }) => {
      let dataSave = [...state.dataSearchSave];
      let dataNew = [...state.dataMovieList];
      if (payload) {
        dataNew = payload;
      } else {
        if (dataSave.length > 0) {
          dataNew = dataSave;
        }
      }
      state.dataMovieList = dataNew;
    },
  },
});

export const {
  setUserLogin,
  addVidBanner,
  getDataMovieList,
  getDataCinemaList,
  getDataMovieSchedul,
  searchDataMovieList,
} = HomeSlice.actions;

export default HomeSlice.reducer;
