export const adminColumns = [
  {
    title: "Tài khoản",
    dataIndex: "taiKhoan",
    key: "taiKhoan",
    render: (text) => <a className="text-blue-400">{text}</a>,
  },
  {
    title: "Họ tên",
    dataIndex: "hoTen",
    key: "hoTen",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Số điện thoại",
    dataIndex: "soDT",
    key: "soDT",
    render: (text) => <div>{text}</div>,
  },
  {
    title: "Mã loại người dùng",
    dataIndex: "maLoaiNguoiDung",
    key: "maLoaiNguoiDung",
    render: (text) => {
      if (text == "KhachHang") {
        return <div className="text-blue-500">Khách hàng</div>;
      } else {
        return <div className="text-red-500">Quản trị</div>;
      }
    },
  },
  {
    title: "Thao tác",
    dataIndex: "actions",
    key: "actions",
    render: ({ onDelete, onEdit }, record) => (
      <div className="space-x-2">
        <button className="px-3 py-2 bg-blue-500 rounded text-white">
          Sửa
        </button>
        <button
          className="px-3 py-2 bg-red-500 rounded text-white"
          onClick={() => onDelete(record.taiKhoan)}
        >
          Xóa
        </button>
      </div>
    ),
  },
];
