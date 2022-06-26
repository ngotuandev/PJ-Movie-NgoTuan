import React from "react";
import TabsShowsTime from "./TabsShowsTime";

export default function TabsMovie({ item }) {
  const renderTabsMovie = () => {
    return item?.map((item, index) => {
      return (
        <div key={index} className=" p-4 pb-0">
          <div className="border-b pb-4 flex">
            <div className="mr-5">
              <img
                style={{ width: "100px", height: "130px" }}
                src={item.hinhAnh}
                alt={item.hinhAnh}
              />
            </div>
            <div className="tabs-movie-title text-xl font-bold">
              <span className="bg-orange-500 text-white text-lg font-medium rounded px-1 mr-2">
                C18
              </span>
              {item.tenPhim}
              <div className=" mt-2">
                <TabsShowsTime item={item.lstLichChieuTheoPhim} />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      style={{ height: "700px" }}
      className="overflow-auto tabs-movie text-left"
    >
      {renderTabsMovie()}
    </div>
  );
}
