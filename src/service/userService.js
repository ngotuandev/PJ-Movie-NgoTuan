import axios from "axios";
import { BASE_URL, httpService, TOKEN_CYBERSOFT } from "./configURL";
import { USER } from "./localStoreService";

let getMaNhom = () => {
  let jsonData = localStorage.getItem(USER);
  if (jsonData) {
    return JSON.parse(jsonData).maNhom;
  } else {
    return null;
  }
};

export const userService = {
  dangNhap: (dataLogin) => {
    return httpService.post("/api/QuanLyNguoiDung/DangNhap", dataLogin);
  },
  dangKy: (dataRegister) => {
    return httpService.post("/api/QuanLyNguoiDung/DangKy", dataRegister);
  },
  putDataUser: (data) => {
    return httpService.put(
      "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      data
    );
  },
  postDataUser: (data) => {
    return httpService.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", data);
  },

  deleteUser: (data) => {
    return httpService.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data}`
    );
  },
  searchDataUser: (taiKhoan) => {
    return httpService.get(
      `/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${getMaNhom()}&tuKhoa=${taiKhoan}`
    );
  },
};
