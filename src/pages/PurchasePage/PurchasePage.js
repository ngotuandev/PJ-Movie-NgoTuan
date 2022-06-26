import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../service/movieService";
import InfoMoviesTicket from "./InfoMoviesTicket";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import MovieChairsInfo from "./MovieChairsInfo";

import TabsCheck from "./TabsCheck";
import { message } from "antd";
import { getDataPurchase } from "../../redux/reducers/PurchaseSlice";

export default function PurchasePage() {
  const [checkUser, setCheckUser] = useState(false);
  const { dataPurchase } = useSelector((state) => state.PurchaseSlice);
  const { dataChairsMovie } = useSelector((state) => state.PurchaseSlice);
  const { userLogin } = useSelector((state) => state.HomeSlice);
  let { id } = useParams();
  const dispatch = useDispatch();

  let DanhSachVeDat = {
    maLichChieu: dataPurchase[0]?.thongTinPhim.maLichChieu,
    danhSachVe: dataChairsMovie,
  };

  useEffect(() => {
    let fetchMovies = async () => {
      let result = await movieService.getDataPurchase(id);
      dispatch(getDataPurchase(result.data.content));
    };
    fetchMovies();
  }, []);

  let handleBookTicket = () => {
    if (userLogin === null) {
      setCheckUser(true);
    } else if (dataChairsMovie?.length === 0) {
      setCheckUser(false);
      message.warning("Bạn vui lòng chọn ghế");
    } else {
      setCheckUser(false);
      movieService
        .postDataPurchase(DanhSachVeDat, userLogin.accessToken)
        .then((res) => {
          message.success(
            "Bạn đã đặt vé thành công, vui lòng kiểm tra lịch sử đặt vé"
          );
          setTimeout(() => {
            window.location.href = `/purchase/${dataPurchase[0]?.thongTinPhim.maLichChieu}`;
          }, 2000);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <>
        <div className="w-full h-full bg-gray-600 pb-32 pt-32">
          <div className="flex justify-between items-center mx-auto container h-full movies-purchase">
            <div style={{ width: "800px" }}>
              <MovieChairsInfo dataPurChase={dataPurchase} />
            </div>
            <div
              className="shadow bg-white rounded-3xl overflow-hidden relative"
              style={{
                width: "550px",
                height: "700px",
                filter: "drop-shadow(0 0 0.75rem rgb(202 138 4))",
              }}
            >
              <InfoMoviesTicket infoMovies={dataPurchase[0].thongTinPhim} />
              <div className="absolute w-full h-12 bottom-0 overflow-hidden">
                <button
                  className="w-full h-12 text-2xl font-medium btn-13"
                  onClick={() => handleBookTicket()}
                >
                  <span>Đặt vé</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {checkUser ? <TabsCheck dataPurchase={dataPurchase} /> : ""}
      </>
    </>
  );
}
