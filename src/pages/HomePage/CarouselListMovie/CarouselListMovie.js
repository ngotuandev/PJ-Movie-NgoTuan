import React, { useEffect } from "react";
import { movieService } from "../../../service/movieService";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";
import ItemListMovie from "./ItemListMovie";
import { getDataMovieList } from "../../../redux/reducers/HomeSlice";

export default function CarouselListMovie() {
  const { dataMovieList } = useSelector((state) => state.HomeSlice);
  const dispatch = useDispatch();
  const dataMovie = [];

  if (dataMovieList?.length > 8) {
    const dataMovieList1 = dataMovieList?.slice(0, 8);
    const dataMovieList2 = dataMovieList?.slice(8, 16);

    dataMovie.push(dataMovieList1, dataMovieList2);
  } else {
    dataMovie.push(dataMovieList);
  }
  //* Call api of GP01 and GP02
  useEffect(() => {
    movieService
      .getMovieList()
      .then((res) => {
        dispatch(getDataMovieList(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderDataMovie = () => {
    return dataMovie?.map((item, index) => {
      return (
        <Carousel.Item key={index} interval={7000}>
          <div className="grid grid-cols-4 gap-y-8 gap-x-6 carousel-movie-grid">
            {item.map((item, index) => {
              return <ItemListMovie key={index} item={item} />;
            })}
          </div>
        </Carousel.Item>
      );
    });
  };

  return (
    <Carousel touch={true} pause="hover">
      {renderDataMovie()}
    </Carousel>
  );
}
