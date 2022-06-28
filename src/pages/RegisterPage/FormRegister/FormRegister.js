import { Form, Input, message } from "antd";
import { NavLink } from "react-router-dom";
import React from "react";
import { userService } from "../../../service/userService";
import { useHistory } from "react-router-dom";

export default function FormDangKi() {
  let history = useHistory();

  const onFinish = (values) => {
    let dataRegister = { ...values, maNhom: "GP01" };
    userService
      .dangKy(dataRegister)
      .then((res) => {
        message.success("Đăng ký thành công");
        history.push("/login");
      })
      .catch((err) => {
        message.error(err.response.data.content);
        console.log(err);
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
      <div className="flex flex-col items-center place-content-around">
        <svg
          style={{ width: "9.5%" }}
          className="MuiSvgIcon-root p-1 h-1/12 bg-red-500 rounded-full fill-white"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
        </svg>

        <p className="text-2xl font-medium">Đăng ký</p>
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
          label="Tài khoản"
          name="taiKhoan"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Tài khoản không được bỏ trống!",
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật khẩu"
          name="matKhau"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Mật khẩu không được bỏ trống!",
            },
            { len: 6, message: "Mật khẩu phải từ 6 chữ số" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Họ tên"
          name="hoTen"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Họ tên không được bỏ trống!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Email không được bỏ trống!",
            },
            {
              type: "email",
              message: "Email không hợp lệ",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Số điện thoại"
          name="soDT"
          rules={[
            {
              required: true,
              message: "Số điện thoại không được bỏ trống",
            },
            { len: 10, message: "Số điện thoại tối đa 10 số" },
          ]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item>
          <button className="rounded px-7 py-2 bg-red-500 uppercase text-sm font-medium text-white w-full">
            Đăng ký
          </button>
        </Form.Item>
        <div className="text-right font-medium text-base">
          <NavLink to="/login" className="underline hover:underline">
            Bạn đã có tài khoản? Đăng nhập
          </NavLink>
        </div>
      </Form>
    </div>
  );
}
