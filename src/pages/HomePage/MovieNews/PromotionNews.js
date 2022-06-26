import React from "react";
import pic1 from "../../../assets/imgNews/picPro1.jpg";
import pic2 from "../../../assets/imgNews/picPro2.jpg";
import pic3 from "../../../assets/imgNews/picPro3.jpg";
import pic4 from "../../../assets/imgNews/picPro4.jpg";
import pic5 from "../../../assets/imgNews/picPro5.jpg";
import pic6 from "../../../assets/imgNews/picPro6.jpg";
import pic7 from "../../../assets/imgNews/picPro7.jpg";
import pic8 from "../../../assets/imgNews/picPro8.jpg";

export default function PromotionNews() {
  return (
    <div className="cinema-news" id="promotionNews">
      <div className="flex flex-row">
        <div className="w-full basis-1/2 mr-2">
          <a href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang">
            <img className="rounded w-full" src={pic1} alt={pic1} />
          </a>
          <a
            href="https://tix.vn/khuyen-mai/7790-123phim-nhap-ma-bkt-giam-ngay-20k-khi-dat-ve-bac-kim-thang"
            className="mt-2 mb-3 hover:text-red-500 text-lg font-medium block"
          >
            [123Phim] NHẬP MÃ 'BKT' - Giảm ngay 20k khi đặt vé Bắc Kim Thang
          </a>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "3",
              display: "-webkit-box",
            }}
          >
            123Phim đồng hành cùng phim Việt - Giảm ngay 20k mỗi giao dịch khi
            đặt vé Bắc Kim Thang trên ứng dụng 123Phim.
          </p>
        </div>
        <div className="w-full basis-1/2 ml-2">
          <a href="https://tix.vn/khuyen-mai/7774-sinh-nhat-mega-gs">
            <img className="rounded w-full" src={pic2} alt={pic2} />
          </a>
          <a
            href="https://tix.vn/khuyen-mai/7774-sinh-nhat-mega-gs"
            className="mt-2 mb-3 hover:text-red-500 text-lg font-medium block"
          >
            Sinh Nhật Mega GS
          </a>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "3",
              display: "-webkit-box",
            }}
          >
            Đến hẹn lại lên, vậy là một năm nữa đã trôi qua và chúng ta lại đến
            tháng 8, tháng sinh nhật của Mega GS Cinemas.
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-4">
        <div className="w-full basis-1/3">
          <a href="https://tix.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua">
            <img className="rounded w-full" src={pic3} alt={pic3} />
          </a>
          <a
            href="https://tix.vn/khuyen-mai/7741-123phim-tixshop-tro-lai-qua-xin-hon-xua"
            className="my-2 hover:text-red-500 text-lg font-medium block"
          >
            [123Phim] TixShop trở lại, quà ‘xịn’ hơn xưa
          </a>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "3",
              display: "-webkit-box",
            }}
          >
            Nhiều Tix làm gì, để tiêu vào TixShop chứ còn chờ chi.
          </p>
        </div>
        <div className="w-full basis-1/3 mx-3">
          <a href="https://tix.vn/khuyen-mai/7732-galaxy-trang-thi-xem-phim-hay-say-qua-tang">
            <img className="rounded w-full" src={pic4} alt={pic4} />
          </a>
          <a
            href="https://tix.vn/khuyen-mai/7732-galaxy-trang-thi-xem-phim-hay-say-qua-tang"
            className="my-2 hover:text-red-500 text-lg font-medium block"
          >
            [Galaxy Tràng Thi] Xem Phim Hay, Say Quà Tặng
          </a>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "3",
              display: "-webkit-box",
            }}
          >
            Nhân dịp khai trương Galaxy Tràng Thi, Galaxy Cinema dành tặng các
            Stars Hà Nội loạt phần quà siêu hấp dẫn.
          </p>
        </div>
        <div className="w-full basis-1/3">
          <div className="flex mb-3">
            <a href="https://tix.vn/khuyen-mai/7727-mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve">
              <img
                style={{ width: "90px" }}
                className=" rounded-lg h-16"
                src={pic5}
                alt={pic5}
              />
            </a>
            <a
              href="https://tix.vn/khuyen-mai/7727-mua-2-ve-cinestar-qua-zalopay-chi-1-000d-ve"
              className="ml-3 hover:text-red-500 text-lg font-medium block"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                display: "-webkit-box",
                height: "60px",
              }}
            >
              Mua 2 Vé Cinestar Qua ZaloPay Chỉ 1.000đ/vé
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/khuyen-mai/7723-123phim-ban-la-fan-cung-marvel">
              <img
                style={{ width: "70px" }}
                className=" rounded-lg h-16"
                src={pic6}
                alt={pic6}
              />
            </a>
            <a
              href="https://tix.vn/khuyen-mai/7723-123phim-ban-la-fan-cung-marvel"
              className="ml-3 hover:text-red-500 text-lg font-medium block"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                display: "-webkit-box",
                height: "60px",
              }}
            >
              [123Phim] Bạn Là Fan Cứng Marvel?
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/khuyen-mai/7722-galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui">
              <img
                style={{ width: "120px" }}
                className=" rounded-lg h-16"
                src={pic7}
                alt={pic7}
              />
            </a>
            <a
              href="https://tix.vn/khuyen-mai/7722-galaxy-trang-thi-trai-nghiem-bom-tan-cang-dong-cang-vui"
              className="ml-3 hover:text-red-500 text-lg font-medium block"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                display: "-webkit-box",
                height: "60px",
              }}
            >
              [Galaxy Tràng Thi] Trải Nghiệm Bom Tấn Càng Đông Càng Vui
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/khuyen-mai/7716-mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve">
              <img
                style={{ width: "110px" }}
                className=" rounded-lg h-16"
                src={pic8}
                alt={pic8}
              />
            </a>
            <a
              href="https://tix.vn/khuyen-mai/7716-mua-ve-bhd-star-tren-123phim-bang-zalopay-1-000d-ve"
              className="ml-3 hover:text-red-500 text-lg font-medium block"
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: "2",
                display: "-webkit-box",
                height: "60px",
              }}
            >
              Mua Vé BHD Star Trên 123Phim Bằng ZaloPay: 1.000đ/vé
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
