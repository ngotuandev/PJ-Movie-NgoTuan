import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";
import pic1 from "../../../assets/imgSlideApp/bannerApp1.jpg";
import pic2 from "../../../assets/imgSlideApp/bannerApp2.jpg";
import pic3 from "../../../assets/imgSlideApp/bannerApp3.jpg";
import pic4 from "../../../assets/imgSlideApp/bannerApp4.jpg";
import pic5 from "../../../assets/imgSlideApp/bannerApp5.jpg";
import pic6 from "../../../assets/imgSlideApp/bannerApp6.jpg";

let arrPicCarouselApp = [pic1, pic2, pic3, pic4, pic5, pic6];

export default function CarouselApp() {
  let renderPicCarouselApp = () => {
    return arrPicCarouselApp?.map((item, index) => {
      return (
        <Carousel.Item key={index} interval={3000} style={{ height: "455px" }}>
          <img
            className="absolute"
            style={{ width: "230px", height: "455px", top: "-0.5%" }}
            src={item}
            alt={item}
          />
        </Carousel.Item>
      );
    });
  };

  return (
    <div className="border-2 border-slate-500 rounded-3xl">
      <div
        className=" border-2 border-slate-600 rounded-3xl relative overflow-hidden"
        style={{ width: "230px", height: "455px" }}
      >
        <Carousel fade className="carousel-app" pause="hover">
          {renderPicCarouselApp()}
        </Carousel>
      </div>
    </div>
  );
}
