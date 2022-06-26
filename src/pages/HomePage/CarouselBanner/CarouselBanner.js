import React, { useEffect, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieService } from "../../../service/movieService";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";
import play from "../../../assets/img/play.png";
import { addVidBanner } from "../../../redux/reducers/HomeSlice";

function CarouselBanner() {
  const { carouselBanner } = useSelector((state) => state.HomeSlice);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    movieService
      .getBannerMovie()
      .then((res) => {
        dispatch(addVidBanner(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderBanner = () => {
    return carouselBanner?.map((item, index) => {
      return (
        <Carousel.Item interval={6000} className="relative" key={index}>
          <img
            style={{ width: "100%", maxHeight: "780px" }}
            src={item.hinhAnh}
            alt={item.hinhAnh}
          />
          <button
            className="btn-icon-play opacity-0 outline-none absolute duration-500"
            onClick={() => openModal()}
            style={{ zIndex: "2", top: "45%", right: "47%" }}
          >
            <img src={play} alt={play} />
          </button>
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
                      bottom: "15%",
                      left: "109%",
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
        </Carousel.Item>
      );
    });
  };

  return (
    <Carousel touch={true} className="banner-slide" pause="hover">
      {renderBanner()}
    </Carousel>
  );
}

export default memo(CarouselBanner);
