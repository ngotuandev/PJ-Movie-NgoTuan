import React from "react";
import pic1 from "../../../assets/imgNews/picReNew1.jpg";
import pic2 from "../../../assets/imgNews/picReNew2.jpg";
import pic3 from "../../../assets/imgNews/picReNew3.jpg";
import pic4 from "../../../assets/imgNews/picReNew4.jpg";
import pic5 from "../../../assets/imgNews/picReNew5.jpg";
import pic6 from "../../../assets/imgNews/picReNew6.jpg";
import pic7 from "../../../assets/imgNews/picReNew7.jpg";
import pic8 from "../../../assets/imgNews/picReNew8.jpg";

export default function ReviewNews() {
  return (
    <div className="cinema-news" id="reviewNew">
      <div className="flex flex-row">
        <div className="w-full basis-1/2 mr-2">
          <a href="https://tix.vn/review/7876-review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan">
            <img className="rounded w-full" src={pic1} alt={pic1} />
          </a>
          <a
            href="https://tix.vn/review/7876-review-nang-3-loi-hua-cua-cha-cau-chuyen-tinh-than-cam-dong-cua-kha-nhu-va-kieu-minh-tuan"
            className="mt-2 mb-3 hover:text-red-500 text-lg font-medium block"
          >
            [Review] Nắng 3: Lời Hứa Của Cha - Câu chuyện tình thân cảm động của
            Khả Như và Kiều Minh Tuấn
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
            Như hai phần phim trước, Nắng 3 tiếp tục mang đến câu chuyện tình
            cha, mẹ - con đầy nước mắt của bộ ba nhân vật chính.
          </p>
        </div>
        <div className="w-full basis-1/2 ml-2">
          <a href="https://tix.vn/review/7871-review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than">
            <img className="rounded w-full" src={pic2} alt={pic2} />
          </a>
          <a
            href="https://tix.vn/review/7871-review-onward-khi-phep-thuat-manh-me-nhat-chinh-la-tinh-than"
            className="mt-2 mb-3 hover:text-red-500 text-lg font-medium block"
          >
            [Review] Onward - Khi phép thuật mạnh mẽ nhất chính là tình thân
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
            Tác phẩm mới nhất của Pixar tiếp tục là câu chuyện hài hước và cảm
            xúc về tình cảm gia đình.
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-4">
        <div className="w-full basis-1/3">
          <a href="https://tix.vn/review/7868-review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh">
            <img className="rounded w-full" src={pic3} alt={pic3} />
          </a>
          <a
            href="https://tix.vn/review/7868-review-ke-vo-hinh-con-gi-dang-so-hon-ke-giet-nguoi-benh-hoan-vo-hinh"
            className="my-2 hover:text-red-500 text-lg font-medium block"
          >
            [Review] Kẻ Vô Hình - Còn gì đáng sợ hơn kẻ giết người bệnh hoạn vô
            hình?
          </a>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "3",
              display: "-webkit-box",
              height: "60px",
            }}
          >
            Phiên bản hiện đại của The Invisible Man là một trong những phim
            kinh dị xuất sắc nhất năm nay.
          </p>
        </div>
        <div className="w-full basis-1/3 mx-3">
          <a href="https://tix.vn/review/7861-review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa">
            <img className="rounded w-full" src={pic4} alt={pic4} />
          </a>
          <a
            href="https://tix.vn/review/7861-review-cau-be-ma-2-ban-trai-cua-be-beo-la-day-chu-dau-xa"
            className="my-2 hover:text-red-500 text-lg font-medium block"
          >
            [Review] Cậu Bé Ma 2 - Bạn trai của 'bé Beo' là đây chứ đâu xa
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
            Brahms: The Boy II có những màn hù dọa ấn tượng nhưng cái kết lại
            không tương xứng với phần mở đầu hứa hẹn.
          </p>
        </div>
        <div className="w-full basis-1/3">
          <div className="flex mb-3">
            <a href="https://tix.vn/review/7859-review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi">
              <img
                style={{ width: "137px" }}
                className=" rounded-lg h-16"
                src={pic5}
                alt={pic5}
              />
            </a>
            <a
              href="https://tix.vn/review/7859-review-nhim-sonic-cuoi-tha-ga-cung-chang-nhim-sieu-thanh-lay-loi"
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
              [Review] Nhím Sonic - Cười thả ga cùng chàng nhím siêu thanh lầy
              lội
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/review/7858-review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang">
              <img
                style={{ width: "167px" }}
                className=" rounded-lg h-16"
                src={pic6}
                alt={pic6}
              />
            </a>
            <a
              href="https://tix.vn/review/7858-review-thang-nam-hanh-phuc-ta-tung-co-buong-bo-chua-bao-gio-la-viec-de-dang"
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
              [Review] Tháng Năm Hạnh Phúc Ta Từng Có - Buông bỏ chưa bao giờ là
              việc dễ dàng
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/review/7857-review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh">
              <img
                style={{ width: "147px" }}
                className=" rounded-lg h-16"
                src={pic7}
                alt={pic7}
              />
            </a>
            <a
              href="https://tix.vn/review/7857-review-sac-dep-doi-tra-huong-giang-ke-chuyen-doi-minh-qua-phim-anh"
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
              [Review] Sắc Đẹp Dối Trá - Hương Giang kể chuyện đời mình qua phim
              ảnh
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/review/7852-review-birds-of-prey-man-lot-xac-hoanh-trang-cua-harley-quinn-va-dc">
              <img
                style={{ width: "142px" }}
                className=" rounded-lg h-16"
                src={pic8}
                alt={pic8}
              />
            </a>
            <a
              href="https://tix.vn/review/7852-review-birds-of-prey-man-lot-xac-hoanh-trang-cua-harley-quinn-va-dc"
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
              [Review] Birds of Prey - Màn lột xác hoành tráng của Harley Quinn
              và DC
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
