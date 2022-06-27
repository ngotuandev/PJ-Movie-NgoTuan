import { httpService } from "./configURL";
import { USER } from "./localStoreService";

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
  postDataUser: (data, accessToken) => {
    return httpService.post("/api/QuanLyNguoiDung/ThongTinTaiKhoan", data, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },

  deleteUser: (data) => {
    return httpService.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data}`
    );
  },
};
