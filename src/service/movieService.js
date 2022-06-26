import axios from "axios";
import { BASE_URL, httpService, TOKEN_CYBERSOFT } from "./configURL";

export const movieService = {
  getMovieList: () => {
    return httpService.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },

  getBannerMovie: () => {
    return httpService.get("/api/QuanLyPhim/LayDanhSachBanner");
  },

  getCinemaList: () => {
    return httpService.get(
      "/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01"
    );
  },
  getDataMovieTheater: () => {
    return httpService.get("/api/QuanLyRap/LayThongTinHeThongRap");
  },
  getDataDetailMovie: (id) => {
    return httpService.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`);
  },
  getDataDetailShowstime: (id) => {
    return httpService.get(
      `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`
    );
  },
  getDataPurchase: (id) => {
    return httpService.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    );
  },
  postDataPurchase: (data) => {
    return httpService.post("/api/QuanLyDatVe/DatVe", data);
  },
};
