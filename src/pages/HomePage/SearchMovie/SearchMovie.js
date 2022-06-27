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
        style={{
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
        }}
        className="w-full text-red-600 search-movie border-red-300 rounded-md"
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
