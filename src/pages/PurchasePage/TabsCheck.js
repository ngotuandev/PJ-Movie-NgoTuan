import React, { useState } from "react";
import { Form, Input, message, Tabs } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { userService } from "../../service/userService";
import { localStoreService } from "../../service/localStoreService";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../redux/reducers/HomeSlice";

const { TabPane } = Tabs;

export default function TabsCheck({ dataPurchase }) {
  const [valueActiveKey, setValueActiveKey] = useState(1);
  const dispatch = useDispatch();

  const onFinishLogin = (values) => {
    userService
      .dangNhap(values)
      .then((res) => {
        localStoreService.setUserLocal(res.data.content);
        dispatch(setUserLogin(res.data.content));
        window.location.href = `/purchase/${dataPurchase[0]?.thongTinPhim.maLichChieu}`;
      })
      .catch((err) => {
        console.log(err);
        message.error("Đăng nhập thất bại");
      });
  };

  const onFinishFailedLogin = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinishRegister = (values) => {
    let dataRegister = { ...values, maNhom: "GP01" };
    userService
      .dangKy(dataRegister)
      .then((res) => {
        message.success("Đăng ký thành công");
        setValueActiveKey(1);
      })
      .catch((err) => {
        message.error(err.response.data.content);
        console.log(err);
      });
  };

  const onFinishFailedRegister = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      className="w-full h-screen z-20 fixed top-0 tabs-check"
      style={{
        backgroundColor: "rgba(0,0,0,.7)",
      }}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div className=" bg-white rounded-lg px-4 py-3 w-auto h-auto">
          <Tabs activeKey={`${valueActiveKey}`} tabPosition="top">
            <TabPane
              key={1}
              tab={
                <button className="py-2" onClick={() => setValueActiveKey(1)}>
                  <span className="uppercase font-medium text-lg">
                    Đăng nhập
                  </span>
                </button>
              }
            >
              <div
                style={{ width: "25vw" }}
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
                  onFinish={onFinishLogin}
                  onFinishFailed={onFinishFailedLogin}
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
                  <div className="flex justify-end font-medium text-base">
                    <div
                      onClick={() => {
                        setValueActiveKey(2);
                      }}
                      className="underline hover:underline hover:text-red-500 duration-300 cursor-pointer"
                    >
                      Bạn chưa có tài khoản? Đăng ký
                    </div>
                  </div>
                </Form>
              </div>
            </TabPane>
            <TabPane
              key={2}
              tab={
                <button className="py-2" onClick={() => setValueActiveKey(2)}>
                  <span className="uppercase font-medium text-lg">Đăng ký</span>
                </button>
              }
            >
              <div
                style={{ width: "25vw" }}
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
                  onFinish={onFinishRegister}
                  onFinishFailed={onFinishFailedRegister}
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
                  <Form.Item>
                    <button className="rounded px-7 py-2 bg-red-500 uppercase text-sm font-medium text-white w-full">
                      Đăng ký
                    </button>
                  </Form.Item>
                  <div className="flex justify-end font-medium text-base">
                    <div
                      onClick={() => {
                        setValueActiveKey(1);
                      }}
                      className="underline hover:underline hover:text-red-500 duration-300 cursor-pointer"
                    >
                      Bạn đã có tài khoản? Đăng nhập
                    </div>
                  </div>
                </Form>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
