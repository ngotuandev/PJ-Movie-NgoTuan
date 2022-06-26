import React from "react";
import { useSelector } from "react-redux";

export default function InfoMoviesTicket({ infoMovies }) {
  const { dataChairsMovie } = useSelector((state) => state.PurchaseSlice);

  let renderChairsSelected = () => {
    return dataChairsMovie?.map((item, index) => {
      return (
        <div key={index} className="inline-block ml-2">
          {" "}
          <span>Ghế</span> {item.tenGhe} -{" "}
          <span>{item.giaVe.toLocaleString()} VND</span>
        </div>
      );
    });
  };
  let totalTicketPrice = dataChairsMovie?.reduce((sum, data) => {
    return (sum += data.giaVe);
  }, 0);

  return (
    <div className="py-4 px-3">
      <div className="text-center text-3xl uppercase font-bold pb-5">
        Thông tin vé
      </div>
      <div className="flex justify-between">
        <div className="font-medium text-xl mr-5 w-40">Tên phim:</div>
        <div className="text-red-500 font-medium text-2xl text-right w-80">
          {infoMovies.tenPhim ? infoMovies.tenPhim : ""}
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-4">
        <div className="font-medium text-xl mr-5 w-40">Tên cụm rạp:</div>
        <div className="text-red-500 font-medium text-2xl text-right w-80">
          {infoMovies.tenCumRap ? infoMovies.tenCumRap : ""}
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-4">
        <div className="font-medium text-xl mr-5 w-40">Tên rạp:</div>
        <div className="text-red-500 font-medium text-2xl text-right w-80">
          {infoMovies.tenRap ? infoMovies.tenRap : ""}
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-4">
        <div className="font-medium text-xl mr-5 w-20">Địa chỉ:</div>
        <div className="text-red-500 font-medium text-2xl text-right w-96">
          {infoMovies.diaChi ? infoMovies.diaChi : ""}
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-4">
        <div className="font-medium text-xl mr-5 w-40">Ngày giờ chiếu:</div>
        <div className="text-red-500 font-medium text-2xl text-right w-80">
          <span>{infoMovies.ngayChieu ? infoMovies.ngayChieu : ""}</span> -{" "}
          <span>{infoMovies.gioChieu ? infoMovies.gioChieu : ""}</span>
        </div>
      </div>
      <hr />
      <div className="flex justify-between pt-4">
        <div className="font-medium text-xl w-32">Ghế đã chọn:</div>
        <div
          className="text-red-500 font-bold text-base text-right w-96"
          style={{
            height: "auto",
            overflowY: "scroll",
            maxHeight: "85px",
          }}
        >
          {renderChairsSelected()}
        </div>
      </div>
      <hr />
      <div className="flex justify-center pt-5 text-3xl font-bold text-yellow-600">
        {totalTicketPrice.toLocaleString()} VND
      </div>
    </div>
  );
}
