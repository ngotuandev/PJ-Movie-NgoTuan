import React, { useEffect, useState } from "react";
import { movieService } from "../../../service/movieService";
import logoIphone from "../../../assets/img/logoIphone.png";
import logoAndroid from "../../../assets/img/logoAndroid.png";
import logoFb from "../../../assets/img/logoFb.png";
import logoZalo from "../../../assets/img/logoZalo.png";
import logoZion from "../../../assets/img/logoZion.jpg";
import logoBCT from "../../../assets/img/logoBCT.png";
import "./index.css";
import MediaQuery from "react-responsive";

export default function FooterHomePage() {
  const [dataPartsner, setDataPartsner] = useState([]);

  useEffect(() => {
    movieService
      .getDataMovieTheater()
      .then((res) => {
        setDataPartsner(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let logo = [];
  dataPartsner.forEach((item, index) => {
    return logo.push(item.logo);
  });

  return (
    <div
      className="mx-auto"
      style={{ maxWidth: "1100px", padding: "15px 20px 40px 20px" }}
    >
      <MediaQuery minWidth={800}>
        <div className="grid grid-cols-6 gap-4 pb-4">
          <div className="col-span-2">
            <div className="text-white uppercase pb-3 font-medium text-lg text-center">
              Tix
            </div>
            <div className="flex justify-between text-gray-500">
              <p className="hover:text-white duration-300">FAQ</p>
              <p className="hover:text-white duration-300">
                Thỏa thuận sử dụng
              </p>
            </div>
            <div className="flex justify-between text-gray-500">
              <p className="hover:text-white duration-300">Brand Guidelines</p>
              <p className="hover:text-white duration-300">
                Chính sách bảo mật
              </p>
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-white uppercase pb-3 font-medium text-lg text-center">
              Đối tác
            </div>
            <div className="grid grid-cols-4 gap-4 logo-hover">
              <a href="https://www.bhdstar.vn/">
                <img className="w-9 h-9" src={logo[0]} alt={logo[0]} />
              </a>
              <a href="https://www.cgv.vn/">
                <img className="w-9 h-9" src={logo[1]} alt={logo[1]} />
              </a>
              <a href="http://cinestar.com.vn/">
                <img className="w-9 h-9" src={logo[2]} alt={logo[2]} />
              </a>
              <a href="https://www.galaxycine.vn/">
                <img className="w-9 h-9" src={logo[3]} alt={logo[3]} />
              </a>
              <a href="http://lottecinemavn.com/LCHS/index.aspx">
                <img className="w-9 h-9" src={logo[4]} alt={logo[4]} />
              </a>
              <a href="https://www.megagscinemas.vn/">
                <img className="w-9 h-9" src={logo[5]} alt={logo[5]} />
              </a>
            </div>
          </div>
          <div>
            <div className="text-white uppercase pb-3 font-medium text-lg text-center">
              Mobile App
            </div>
            <div className="flex justify-center space-x-4 logo-hover">
              <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                <img className="w-10 h-10" src={logoIphone} alt={logoIphone} />
              </a>
              <a href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
                <img
                  className="w-10 h-10"
                  src={logoAndroid}
                  alt={logoAndroid}
                />
              </a>
            </div>
          </div>
          <div>
            <div className="text-white uppercase pb-3 font-medium text-lg text-center">
              Social
            </div>
            <div className="flex justify-center space-x-4 logo-hover">
              <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                <img className="w-10 h-10" src={logoFb} alt={logoFb} />
              </a>
              <a href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197">
                <img className="w-10 h-10" src={logoZalo} alt={logoZalo} />
              </a>
            </div>
          </div>
        </div>
      </MediaQuery>
      <div className="flex border-t border-white pt-4">
        <div>
          <img className="w-32 h-12" src={logoZion} alt={logoZion} />
        </div>
        <div className="ml-16">
          <p className="text-white uppercase font-medium text-base pb-3">
            TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
          </p>
          <p className="text-slate-300">
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
          </p>
          <p className="text-slate-300">
            Giấy chứng nhận đăng ký kinh doanh số: 0101659783,đăng ký thay đổi
            lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành
            phố Hồ Chí Minh cấp.
          </p>
          <p className="text-slate-300">
            Số Điện Thoại (Hotline): 1900 545 436
          </p>
        </div>
        <div>
          <img className="w-32 h-12" src={logoBCT} alt={logoBCT} />
        </div>
      </div>
    </div>
  );
}
