import React from "react";
import background from "../../../assets/img/background.jpg";
import CarouselApp from "./CarouselApp";

export default function InfoApp() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1100px" }}>
        <div className="flex justify-center">
          <div style={{ width: "500px" }} className="mr-32 mt-5 info-app">
            <div className="text-3xl text-white font-bold">
              Ứng dụng dành cho người yêu điện ảnh
            </div>
            <p className="text-white mt-16 mb-5">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <div>
              <a href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197">
                <button className="uppercase px-4 text-lg font-bold mb-3 btn-5">
                  <span>App miễn phí - tải về ngay</span>
                </button>
              </a>
            </div>
            <p className="text-white">
              TIX có hai phiên bản{" "}
              <a
                className="border-b-2 hover:border-red-500 border-slate-200 hover:text-red-500"
                href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
              >
                IOS
              </a>{" "}
              &{" "}
              <a
                className="border-b-2 hover:border-red-500 border-slate-200 hover:text-red-500 "
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                Android
              </a>
            </p>
          </div>
          <div className="ml-48">
            <CarouselApp />
          </div>
        </div>
      </div>
    </div>
  );
}
