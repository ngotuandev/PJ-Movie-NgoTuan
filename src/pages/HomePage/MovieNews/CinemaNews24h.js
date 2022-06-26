import React from "react";
import pic1 from "../../../assets/imgNews/picNew1.png";
import pic2 from "../../../assets/imgNews/picNew2.jpg";
import pic3 from "../../../assets/imgNews/picNew3.png";
import pic4 from "../../../assets/imgNews/picNew4.png";
import pic5 from "../../../assets/imgNews/picNew5.png";
import pic6 from "../../../assets/imgNews/picNew6.png";
import pic7 from "../../../assets/imgNews/picNew7.jpg";
import pic8 from "../../../assets/imgNews/picNew8.jpg";

export default function CinemaNews24h() {
  return (
    <div className="cinema-news">
      <div className="flex flex-row">
        <div className="w-full basis-1/2 mr-2">
          <a href="https://tix.vn/goc-dien-anh/7943-tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam">
            <img className="rounded w-full" src={pic1} alt={pic1} />
          </a>
          <a
            href="https://tix.vn/goc-dien-anh/7943-tenet-cong-bo-ngay-khoi-chieu-chinh-thuc-tai-viet-nam"
            className="mt-2 mb-3 hover:text-red-500 text-lg font-medium block"
          >
            TENET công bố ngày khởi chiếu chính thức tại Việt Nam
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
            Đêm qua theo giờ Việt Nam, hãng phim Warner Bros. đưa ra thông báo
            chính thức về ngày khởi chiếu cho bom tấn TENET tại các thị trường
            bên ngoài Bắc Mỹ, trong đó có Việt Nam.
          </p>
        </div>
        <div className="w-full basis-1/2 ml-2">
          <a href="https://tix.vn/goc-dien-anh/7941-khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan">
            <img className="rounded w-full" src={pic2} alt={pic2} />
          </a>
          <a
            href="https://tix.vn/goc-dien-anh/7941-khi-phu-nu-khong-con-o-the-tron-chay-cua-nan-nhan"
            className="mt-2 mb-3 hover:text-red-500 text-lg font-medium block"
          >
            Khi phụ nữ không còn ở thế trốn chạy của nạn nhân
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
            Là bộ phim tâm lý li kỳ với chủ đề tội phạm, Bằng Chứng Vô Hình mang
            đến một góc nhìn mới về hình ảnh những người phụ nữ thời hiện đại.
            Điều đó được thể hiện qua câu chuyện về hai người phụ nữ cùng hợp
            sức để vạch mặt tên tội phạm có sở thích bệnh hoạn với phụ nữ.
          </p>
        </div>
      </div>
      <div className="flex flex-row mt-4">
        <div className="w-full basis-1/3">
          <a href="https://tix.vn/goc-dien-anh/7940-gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland">
            <img className="rounded w-full" src={pic3} alt={pic3} />
          </a>
          <a
            href="https://tix.vn/goc-dien-anh/7940-gerard-butler-cung-bo-cu-deadpool-tham-gia-greenland"
            className="my-2 hover:text-red-500 text-lg font-medium block"
          >
            Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
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
            Bộ phim hành động mang đề tài tận thế Greenland: Thảm Họa Thiên
            Thạch đến từ nhà sản xuất của loạt phim John Wick đã tung ra trailer
            đầu tiên, hé lộ nội dung cốt truyện, dàn diễn viên, cùng hàng loạt
            đại cảnh cháy nổ hoành tráng.
          </p>
        </div>
        <div className="w-full basis-1/3 mx-3">
          <a href="https://tix.vn/goc-dien-anh/7939-dien-vien-dac-biet-cua-bang-chung-vo-hinh">
            <img className="rounded w-full" src={pic4} alt={pic4} />
          </a>
          <a
            href="https://tix.vn/goc-dien-anh/7939-dien-vien-dac-biet-cua-bang-chung-vo-hinh"
            className="my-2 hover:text-red-500 text-lg font-medium block"
          >
            Diễn viên đặc biệt của Bằng Chứng Vô Hình
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
            Bằng Chứng Vô Hình tiết lộ thêm với khán giả một diễn viên vô cùng
            đặc biệt, đi diễn như đi chơi và không hề nghe theo sự chỉ đạo của
            đạo diễn Trịnh Đình Lê Minh. Đó chính là chú chó Ben – trợ thủ đắc
            lực của cô gái mù Thu (Phương Anh Đào).
          </p>
        </div>
        <div className="w-full basis-1/3">
          <div className="flex mb-3">
            <a href="https://tix.vn/goc-dien-anh/7938-pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep">
              <img
                style={{ width: "105px" }}
                className=" rounded-lg h-16"
                src={pic5}
                alt={pic5}
              />
            </a>
            <a
              href="https://tix.vn/goc-dien-anh/7938-pee-nak-2-van-kiep-thien-thu-di-tu-khong-het-nghiep"
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
              Pee Nak 2 - Vạn kiếp thiên thu, đi tu không hết nghiệp!
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7">
              <img
                style={{ width: "95px" }}
                className=" rounded-lg h-16"
                src={pic6}
                alt={pic6}
              />
            </a>
            <a
              href="https://tix.vn/goc-dien-anh/7937-loat-phim-kinh-di-khong-the-bo-lo-trong-thang-7"
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
              Loạt phim kinh dị không thể bỏ lỡ trong tháng 7!
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/goc-dien-anh/7936-rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de">
              <img
                style={{ width: "100px" }}
                className=" rounded-lg h-16"
                src={pic7}
                alt={pic7}
              />
            </a>
            <a
              href="https://tix.vn/goc-dien-anh/7936-rom-tung-trailer-he-lo-cuoc-song-cua-dan-choi-so-de"
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
              RÒM tung trailer hé lộ cuộc sống của dân chơi số đề
            </a>
          </div>
          <div className="flex mb-3">
            <a href="https://tix.vn/goc-dien-anh/7935-antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them">
              <img
                style={{ width: "130px" }}
                className=" rounded-lg h-16"
                src={pic8}
                alt={pic8}
              />
            </a>
            <a
              href="https://tix.vn/goc-dien-anh/7935-antebellum-trailer-cuoi-cung-khong-he-lo-bat-cu-thong-tin-gi-them"
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
              Antebellum - Trailer cuối cùng không hé lộ bất cứ thông tin gì
              thêm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
