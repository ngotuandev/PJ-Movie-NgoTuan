import { Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { movieService } from "../../../service/movieService";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { getDataMovieSchedul } from "../../../redux/reducers/HomeSlice";

export default function SeLectMovie() {
  const { dataMovieList } = useSelector((state) => state.HomeSlice);
  const { dataMovieSchedul } = useSelector((state) => state.HomeSlice);
  const [valueMovie, setValueMovie] = useState(null);
  const [valueTheater, setValueTheater] = useState(null);
  const [valuePurchase, setValuePurchase] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    valueMovie &&
      movieService
        .getDataDetailShowstime(valueMovie)
        .then((res) => {
          dispatch(getDataMovieSchedul(res.data.content));
        })
        .catch((err) => {
          console.log(err);
        });
  }, [valueMovie]);

  let renderDataMovieList = () => {
    return dataMovieList?.map((item, index) => {
      return (
        <option
          key={index}
          value={item.maPhim}
          className="text-red-500 font-medium"
        >
          {item.tenPhim}
        </option>
      );
    });
  };

  let renderTheater = () => {
    return dataMovieSchedul?.map((item) => {
      return item?.map((item) => {
        return item.cumRapChieu?.map((item) => {
          return item.lichChieuPhim?.map((item, index) => {
            return (
              <option
                key={index}
                value={item.maRap}
                className="text-red-500 font-medium"
              >
                {item.tenRap}
              </option>
            );
          });
        });
      });
    });
  };

  let renderShowtime = () => {
    return dataMovieSchedul?.map((item) => {
      return item?.map((item) => {
        return item.cumRapChieu?.map((item) => {
          return item.lichChieuPhim?.map((item, index) => {
            if (item.maRap === valueTheater) {
              return (
                <option
                  key={index}
                  value={item.maLichChieu}
                  className="text-red-500 font-medium"
                >
                  {`${moment(item.ngayChieuGioChieu).format(
                    "DD-MM-YYYY"
                  )} ~ ${moment(item.ngayChieuGioChieu).format("hh:mm")}`}
                </option>
              );
            }
          });
        });
      });
    });
  };

  return (
    <div className="select-movie w-full h-full flex">
      <Form.Select
        defaultValue="0"
        className="w-1/4 font-bold text-lg h-full text-center"
        onChange={(e) => {
          setValueMovie(e.target.value);
        }}
      >
        <option value="0">Phim</option>
        {renderDataMovieList()}
      </Form.Select>
      {valueMovie && valueMovie !== "0" ? (
        <Form.Select
          defaultValue="0"
          className="w-1/4 font-bold text-lg h-full text-center mx-5"
          onChange={(e) => {
            setValueTheater(e.target.value);
          }}
        >
          <option value="0">Rạp</option>
          {renderTheater()}
        </Form.Select>
      ) : (
        <Form.Select
          disabled
          defaultValue="0"
          className="w-1/4 font-bold text-lg h-full text-center mx-5"
          onChange={(e) => {
            setValueTheater(e.target.value);
          }}
        >
          <option value="0">Rạp</option>
          {renderTheater()}
        </Form.Select>
      )}
      {valueTheater && valueTheater !== "0" ? (
        <Form.Select
          defaultValue="0"
          className="w-1/4 font-bold text-lg h-full text-center"
          onChange={(e) => {
            setValuePurchase(e.target.value);
          }}
        >
          <option value="0">Ngày giờ chiếu</option>
          {renderShowtime()}
        </Form.Select>
      ) : (
        <Form.Select
          disabled
          defaultValue="0"
          className="w-1/4 font-bold text-lg h-full text-center"
        >
          <option value="0">Ngày giờ chiếu</option>
          {renderShowtime()}
        </Form.Select>
      )}
      {valuePurchase && valuePurchase !== "0" ? (
        <NavLink to={`/purchase/${valuePurchase}`}>
          <button className="px-2 py-2 uppercase rounded ml-10 font-medium button--moema">
            Mua vé ngay
          </button>
        </NavLink>
      ) : (
        <NavLink to={`/purchase/${valuePurchase}`}>
          <button
            disabled
            className="text-white bg-red-500 px-2 py-2 uppercase opacity-50 rounded ml-10 font-medium "
          >
            Mua vé ngay
          </button>
        </NavLink>
      )}
    </div>
  );
}
