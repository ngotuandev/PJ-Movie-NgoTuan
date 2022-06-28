import React, { useEffect, useState } from "react";
import play from "../../../assets/img/play.png";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setModalNew } from "../../../redux/reducers/HomeSlice";

function ItemListMovie({ item }) {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setModalNew(modal));
  }, [modal]);

  return (
    <div className="card-movie-list cursor-pointer">
      <div className="relative">
        <div className="relative" style={{ width: "100%", height: "100%" }}>
          <div className="w-full h-full flex justify-center items-center absolute ">
            <button
              className="btn-icon-play opacity-0 duration-500 z-10"
              onClick={() => setModal(true)}
            >
              <img src={play} alt={play} />
            </button>
          </div>
          <img
            className="m-auto rounded object-fill"
            style={{ width: "269px", height: "350px" }}
            src={item.hinhAnh}
            alt={item.hinhAnh}
          />
          <NavLink to={`/detail/${item.maPhim}`}>
            <div
              className="overlay-img opacity-0 absolute rounded-md"
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                width: "100%",
                height: "100%",
                top: "0%",
                right: "0%",
              }}
            ></div>
          </NavLink>
        </div>

        {modal ? (
          <section className="modal__bg" onClick={() => setModal(false)}>
            <div className="modal__align">
              <div className="modal__content">
                <svg
                  onClick={() => setModal(false)}
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
      <div className="mt-2 relative">
        <div className="card-movie-title">
          <div
            className="mb-3 font-bold text-lg h-14"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
              display: "-webkit-box",
            }}
          >
            <span className="bg-orange-500 text-white text-lg font-medium rounded px-1 mr-2">
              C18
            </span>
            {item.tenPhim}
          </div>
          <p
            className="mb-2 text-base font-medium opacity-80 tracking-tight italic leading-tight"
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "2",
              display: "-webkit-box",
            }}
          >
            {item.moTa}
          </p>
        </div>
        <NavLink to={`/detail/${item.maPhim}`}>
          <button className="btn-buy-ticket hidden relative uppercase duration-300 font-bold text-2xl w-full py-3 top-0 rounded-md button--wapasha">
            Mua vé
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default ItemListMovie;
