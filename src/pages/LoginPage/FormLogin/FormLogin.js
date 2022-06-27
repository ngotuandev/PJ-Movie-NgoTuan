import React from "react";
import { Form, Input, message } from "antd";
import { userService } from "../../../service/userService";
import { useHistory, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { localStoreService } from "../../../service/localStoreService";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { setDataLogin, setUserLogin } from "../../../redux/reducers/HomeSlice";

export default function FormLogin() {
  let history = useHistory();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    localStoreService.setRememberUser(values);
    dispatch(setDataLogin(values));
    userService
      .dangNhap(values)
      .then((res) => {
        localStoreService.setUserLocal(res.data.content);
        dispatch(setUserLogin(res.data.content));
        window.location.href = "/";

        // //*Thay thế url và tải lại trang
        // window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại");
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        width: "360px",
        filter: "drop-shadow(0 0 0.75rem rgb(248 113 113))",
      }}
      className="p-6 m-auto bg-white rounded"
    >
      <div className="flex flex-col items-center place-content-around mb-5">
        <svg
          style={{ width: "9.5%" }}
          className="MuiSvgIcon-root MuiAvatar-fallback p-1 h-1/12 bg-red-500 rounded-full fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
        </svg>
        <p className="text-2xl font-medium">Đăng nhập</p>
      </div>
      <Form
        layout="vertical"
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="taiKhoan"
          rules={[
            {
              required: true,
              message: "Tài khoản không được bỏ trống!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tài khoản"
          />
        </Form.Item>

        <Form.Item
          name="matKhau"
          rules={[
            {
              required: true,
              message: "Mật khẩu không được bỏ trống!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Mật khẩu"
          />
        </Form.Item>

        <Form.Item>
          <button className="rounded px-7 py-2 bg-red-500 uppercase text-sm font-medium text-white w-full">
            Đăng nhập
          </button>
        </Form.Item>
        <div className="text-right font-medium text-base">
          <NavLink to="/register" className="underline hover:underline">
            Bạn chưa có tài khoản? Đăng ký
          </NavLink>
        </div>
      </Form>
    </div>
  );
}
