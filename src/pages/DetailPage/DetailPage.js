import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { movieService } from "../../service/movieService";
import play from "../../assets/img/play.png";
import { Progress } from "antd";
import { Rate } from "antd";
import "./index.css";
import DetailShowstime from "./DetailShowstime";
import moment from "moment";
import { getDataDetailPage } from "../../redux/reducers/DetailSlice";

export default function DetailPage() {
  const { dataDetailPage } = useSelector((state) => state.DetailSlice);
  const [learnMore, setLearnMore] = useState(false);
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    let fetchMovie = async () => {
      let result = await movieService.getDataDetailMovie(id);
      dispatch(getDataDetailPage(result.data.content));
    };
    fetchMovie();
  }, []);

  let renderDetailMovie = () => {
    return dataDetailPage?.map((item, index) => {
      return (
        <div key={index} className="grid mt-28 grid-cols-4 w-full">
          <div className="relative w-full img-movie ">
            <div className="w-full h-full absolute flex justify-center items-center">
              <button
                className="btn-icon-play w-16 opacity-0 duration-500 z-10"
                onClick={() => setModal(true)}
              >
                <img src={play} alt={play} />
              </button>
            </div>
            <img
              className="w-64 h-96 rounded"
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />

            {modal ? (
              <section className="modal__bg" onClick={() => setModal(false)}>
                <div className="modal__align">
                  <div className="modal__content">
                    <svg
                      onClick={setModal}
                      style={{
                        height: "60px",
                        width: "60px",
                        position: "relative",
                        bottom: "20%",
                        left: "47%",
                        cursor: "pointer",
                      }}
                      viewBox="0 0 20 20"
                      fill="white"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <div className="modal__video-align">
                      <iframe
                        width={1000}
                        height={550}
                        style={{ border: "none" }}
                        src={item.trailer}
                        allowFullScreen={true}
                        title="Youtube"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
          <div className="col-span-2 w-full">
            <p className="text-white font-bold text-2xl pb-1">{item.tenPhim}</p>
            <p className="text-red-300 pb-3">
              <span className="text-slate-300 font-medium">
                Ngày khởi chiếu:{" "}
              </span>{" "}
              {moment(item.ngayKhoiChieu).format("DD-MM-YYYY hh:mm")}
            </p>
            <p className="text-slate-300 font-medium pb-1">
              {learnMore ? item.moTa : item.moTa.substr(0, 155) + "..."}
            </p>
            <button
              onClick={() => setLearnMore(!learnMore)}
              className="block pb-4 text-red-300 hover:text-red-500"
            >
              [Đọc thêm]
            </button>
            <a href="#buyTicket">
              <button className="py-3 px-5 uppercase text-white bg-red-500 rounded font-medium">
                Mua vé
              </button>
            </a>
          </div>
          <div className="ant-progress-custom flex flex-col items-center space-y-3">
            <Progress
              type="circle"
              percent={item.danhGia * 10}
              format={(point) => (
                <span className="font-bold text-yellow-500">
                  {point / 10} Điểm
                </span>
              )}
            />
            <Rate
              style={{ width: "135px" }}
              disabled
              allowHalf
              value={(item.danhGia / 10) * 5}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="w-full h-full bg-emerald-900" id="detailPage">
        <div
          style={{ maxWidth: "1100px" }}
          className="mx-auto h-full flex flex-col items-center px-3"
        >
          {renderDetailMovie()}
          <div
            id="buyTicket"
            className="w-full h-96 bg-white mt-20 my-32 rounded"
          >
            <DetailShowstime id={id} />
          </div>
        </div>
      </div>
    </>
  );
}
