import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataChairsMovie } from "../../redux/reducers/PurchaseSlice";

export default function MovieChairsInfo({ dataPurChase }) {
  const { dataChairsMovie } = useSelector((state) => state.PurchaseSlice);
  const dispatch = useDispatch();

  let renderChairsMovie = () => {
    return dataPurChase[0].danhSachGhe?.map((item, index) => {
      for (let i = 0; i < dataChairsMovie?.length; i++) {
        if (dataChairsMovie[i].maGhe === item.maGhe) {
          return (
            <button
              key={index}
              className="w-10 h-10 mx-1 rounded-lg bg-red-600 text-white"
              onClick={() =>
                dispatch(
                  getDataChairsMovie(
                    item,
                    dataPurChase[0]?.thongTinPhim.maLichChieu
                  )
                )
              }
            >
              {item.tenGhe}
            </button>
          );
        }
      }

      if (item.loaiGhe === "Thuong" && item.daDat === false) {
        return (
          <button
            key={index}
            className="w-10 h-10 mx-1 rounded-lg bg-zinc-200 hover:bg-white duration-300"
            onClick={() =>
              dispatch(
                getDataChairsMovie(
                  item,
                  dataPurChase[0]?.thongTinPhim.maLichChieu
                )
              )
            }
          >
            {item.tenGhe}
          </button>
        );
      } else if (item.loaiGhe === "Vip" && item.daDat === false) {
        return (
          <button
            key={index}
            className="w-10 h-10 mx-1 rounded-lg  bg-yellow-400 hover:bg-white duration-300 "
            onClick={() =>
              dispatch(
                getDataChairsMovie(
                  item,
                  dataPurChase[0]?.thongTinPhim.maLichChieu
                )
              )
            }
          >
            {item.tenGhe}
          </button>
        );
      } else if (item.daDat === true) {
        return (
          <button
            disabled
            key={index}
            className="w-10 h-10 mx-1 rounded-lg bg-gray-500 "
          >
            X
          </button>
        );
      }
    });
  };

  return (
    <div className="info-movie-chairs">
      <div className="flex justify-center pb-5">
        <div className="screen-movies relative">
          <p
            className="font-medium text-xl uppercase absolute"
            style={{ right: "42.5%", paddingTop: "10px" }}
          >
            Màn hình
          </p>
        </div>
      </div>
      <div className="space-y-3" style={{ marginLeft: "15px" }}>
        {renderChairsMovie()}
      </div>
      <div className="flex justify-center space-x-8 mt-5">
        <div className="text-center text-white">
          <button className="w-10 h-10 mx-1 rounded-lg bg-gray-500 text-black">
            X
          </button>
          <div style={{ paddingTop: "5px" }}>Đã đặt</div>
        </div>
        <div className="text-center text-white">
          <button className="w-10 h-10 mx-1 rounded-lg bg-zinc-200"></button>
          <div>Thường</div>
        </div>
        <div className="text-center text-white">
          <button className="w-10 h-10 mx-1 rounded-lg bg-yellow-400"></button>
          <div>Vip</div>
        </div>
      </div>
    </div>
  );
}
