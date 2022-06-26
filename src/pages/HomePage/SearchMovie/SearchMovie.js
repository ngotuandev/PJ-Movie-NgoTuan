import React, { useEffect, useState } from "react";
import { AutoComplete } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
import { searchDataMovieList } from "../../../redux/reducers/HomeSlice";

export default function SearchMovie() {
  const { dataMovieList } = useSelector((state) => state.HomeSlice);
  const [valueSearch, setValueSearch] = useState(null);
  const dispatch = useDispatch();

  let renderOptionsMovieList = () => {
    return dataMovieList?.map((item) => {
      return {
        value: item.tenPhim,
      };
    });
  };
  useEffect(() => {
    if (valueSearch) {
      let searchMovie = dataMovieList?.filter((item) =>
        item.tenPhim
          ?.trim()
          .toUpperCase()
          .includes(valueSearch?.trim().toUpperCase())
      );
      dispatch(searchDataMovieList(searchMovie));
    } else {
      dispatch(searchDataMovieList(valueSearch));
    }
  }, [valueSearch]);

  return (
    <div>
      <AutoComplete
        className="w-full text-red-600 search-movie border-red-300 "
        placeholder="Tìm kiếm phim"
        allowClear
        value={valueSearch}
        size="large"
        onChange={(value) => setValueSearch(value)}
        options={renderOptionsMovieList()}
      />
    </div>
  );
}
