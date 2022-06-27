import React from "react";
import { Form, Input, message, Select } from "antd";
import { userService } from "../../service/userService";
import { useSelector } from "react-redux";

const { Option } = Select;

export default function InfoAccount({ userLogin, dataLogin }) {
  const { dataAccount } = useSelector((state) => state.AccountSlice);

  const onFinish = (values) => {
    console.log("Success:", values);
    userService
      .putDataUser(
        { ...values, maNhom: dataAccount?.maNhom },
        userLogin.accessToken
      )
      .then((res) => {
        message.success("Bạn đã cập nhật thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className=" border-b pb-4">
        <div className="text-2xl font-bold">Cài đặt tài khoản chung</div>
        <div className="mt-2 text-slate-600 font-medium">
          Thông tin có thể được thay đổi
        </div>
      </div>
      <div className="pt-4">
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
          <div className="flex justify-center space-x-12">
            <Form.Item
              className="w-full"
              label="Tài khoản"
              name="taiKhoan"
              hasFeedback
              initialValue={dataAccount?.taiKhoan || userLogin.taiKhoan}
              rules={[
                {
                  required: true,
                  message: "Tài khoản không được bỏ trống!",
                },
                {
                  whitespace: true,
                  message: "Tài khoản không được khoảng cách",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="w-full"
              label="Mật khẩu"
              name="matKhau"
              hasFeedback
              initialValue={dataAccount?.matKhau || dataLogin.matKhau}
              rules={[
                {
                  required: true,
                  message: "Mật khẩu không được bỏ trống!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          <div className="flex justify-center space-x-12">
            <Form.Item
              className="w-full"
              label="Họ tên"
              name="hoTen"
              hasFeedback
              initialValue={dataAccount?.hoTen || userLogin.hoTen}
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
              className="w-full"
              label="Email"
              name="email"
              hasFeedback
              initialValue={dataAccount?.email || userLogin.email}
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
          </div>
          <div className="flex justify-center space-x-12">
            <Form.Item
              className="w-full"
              label="Số điện thoại"
              name="soDT"
              hasFeedback
              initialValue={dataAccount?.soDT || userLogin.soDT}
              rules={[
                {
                  required: true,
                  message: "Số điện thoại không được bỏ trống!",
                },
                { len: 10, message: "Số điện thoại tối đa 10 số" },
              ]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              className="w-full"
              name="maLoaiNguoiDung"
              label="Mã loại người dùng"
              initialValue={
                dataAccount?.maLoaiNguoiDung || userLogin.maLoaiNguoiDung
              }
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select>
                <Option value="KhachHang">Khách Hàng</Option>
                <Option value="QuanTri">Quản trị</Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item>
            <div className="flex items-end justify-end border-t pt-4">
              <button className="px-7 py-2 uppercase text-sm font-medium text-white w-32 btn-16">
                <span>Cập nhật</span>
              </button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
