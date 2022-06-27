import React, { useEffect, useState } from "react";
import InfoApp from "./CarouselApp/InfoApp";
import CarouselBanner from "./CarouselBanner/CarouselBanner";
import CarouselListMovie from "./CarouselListMovie/CarouselListMovie";
import CinemaList from "./CinemaList/CinemaList";
import FooterHomePage from "./FooterHomePage/FooterHomePage";
import MovieNews from "./MovieNews/MovieNews";
import { movieService } from "../../service/movieService";
import { useDispatch } from "react-redux";
import SelectMovie from "./SearchMovie/SelectMovie";
import MediaQuery from "react-responsive";
import "./index.css";
import SearchMovie from "./SearchMovie/SearchMovie";
import { getDataCinemaList } from "../../redux/reducers/HomeSlice";

export default function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    movieService
      .getCinemaList()
      .then((res) => {
        dispatch(getDataCinemaList(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <>
        <div className="py-20 relative carousel-banner">
          <MediaQuery minWidth={600}>
            <CarouselBanner />
          </MediaQuery>
          <MediaQuery minWidth={961}>
            <div
              className="mx-auto px-2 py-3 bg-white rounded absolute shadow home__search-movie  "
              style={{
                maxWidth: "1060px",
                height: "80px",
                right: "-50%",
                left: "-50%",
                bottom: "5%",
              }}
            >
              <SelectMovie />
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={960}>
            <div
              className="mx-auto absolute home__search-movie rounded-md "
              style={{
                maxWidth: "1060px",
                right: "-50%",
                left: "-50%",
                bottom: "4%",
                boxShadow:
                  "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
              }}
            >
              <SearchMovie />
            </div>
          </MediaQuery>
        </div>

        <div
          style={{ maxWidth: "1100px" }}
          className="carousel-movie-list mx-auto pb-20 "
          id="carouselListMovie"
        >
          <CarouselListMovie />
        </div>
        <div
          className="py-12 mx-auto tabs-cinema-list"
          style={{ maxWidth: "1100px" }}
          id="cinemaList"
        >
          <MediaQuery minWidth={960}>
            <CinemaList />
          </MediaQuery>
        </div>
        <div
          className="tabs-movie-news mx-auto"
          style={{ maxWidth: "1100px", padding: "10px 20px 60px 20px" }}
          id="movieNews"
        >
          <MovieNews />
        </div>
        <div id="infoApp">
          <InfoApp />
        </div>
        <div className="footer-home bg-stone-800">
          <FooterHomePage />
        </div>
      </>
    </>
  );
}
