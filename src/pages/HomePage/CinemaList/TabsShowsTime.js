import moment from "moment";
import React from "react";
import { NavLink } from "react-router-dom";

export default function TabsShowsTime({ item }) {
  const itemNew = item.slice(0, 4);

  const renderTabsShowsTime = () => {
    return itemNew?.map((item, index) => {
      return (
        <NavLink
          key={index}
          to={`/purchase/${item.maLichChieu}`}
          className="w-full"
        >
          <div className=" text-base text-center bg-slate-100 border rounded cursor-pointer text-shows-time w-40 p-2">
            <p className="inline-block text-green-500 font-medium">
              {moment(item.ngayChieuGioChieu).format("DD-MM-YY")}
            </p>
            <p className="inline-block mx-1">~</p>
            <span className="text-red-400 font-medium">
              {moment(item.ngayChieuGioChieu).format("hh:mm")}
            </span>
          </div>
        </NavLink>
      );
    });
  };

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {renderTabsShowsTime()}
    </div>
  );
}
