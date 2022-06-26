import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";

export default function TicketHistory() {
  const { dataAccount } = useSelector((state) => state.AccountSlice);

  let renderTicketHistory = () => {
    return dataAccount.thongTinDatVe?.map((item, index) => {
      return (
        <div key={index}>
          <div>
            Ngày đặt:{" "}
            <span className="text-red-500 font-medium">
              {moment(item.ngayDat).format("DD-MM-YYYY")} |{" "}
              {moment(item.ngayDat).format("hh:mm")}
            </span>
          </div>
          <div>
            Tên phim:{" "}
            <span className="text-red-500 font-bold text-lg uppercase">
              {item.tenPhim}
            </span>
          </div>
          <div>
            Thời lượng:{" "}
            <span className="text-red-500 font-medium">
              {item.thoiLuongPhim}
            </span>
            , Giá vé:{" "}
            <span className="text-red-500 font-medium">{item.giaVe}</span>
          </div>
          <div className="text-green-500 font-bold uppercase">
            {item.danhSachGhe[0].tenHeThongRap}
          </div>
          <div className="grid grid-cols-2">
            {item.danhSachGhe?.map((item, index) => {
              return (
                <div key={index} className="inline-block">
                  <span className="text-red-500">{item.tenRap}</span>, Ghế:{" "}
                  <span className="text-red-500">{item.tenGhe}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className=" border-b pb-4">
        <div className="text-2xl font-bold">Lịch sử đặt vé</div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">{renderTicketHistory()}</div>
    </>
  );
}
