import React, { useEffect } from "react";
import { movieService } from "../../service/movieService";
import { Tabs } from "antd";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";
import { getDataDetailShowstime } from "../../redux/reducers/DetailSlice";

const { TabPane } = Tabs;

export default function DetailShowstime({ id }) {
  const { dataDetailShowstime } = useSelector((state) => state.DetailSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    movieService
      .getDataDetailShowstime(id)
      .then((res) => {
        dispatch(getDataDetailShowstime(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderDataDetailShowstime = () => {
    return dataDetailShowstime?.map((item) => {
      return item.heThongRapChieu.map((item, index) => {
        return (
          <TabPane
            key={index}
            tab={<img className="w-10 h-10" src={item.logo} alt={item.logo} />}
          >
            <div className="uppercase text-2xl font-medium text-green-500 text-left whitespace-normal">
              {item.tenHeThongRap}
            </div>
            <div className="grid grid-cols-4 gap-4 pt-5 shows-time-item">
              {item.cumRapChieu.map((item) => {
                return item.lichChieuPhim.map((item, index) => {
                  return (
                    <NavLink
                      key={index}
                      to={`/purchase/${item.maLichChieu}`}
                      className="w-full"
                    >
                      <div className="p-2 text-center text-base bg-slate-100 border rounded cursor-pointer text-shows-time w-40">
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
              })}
            </div>
          </TabPane>
        );
      });
    });
  };

  return (
    <Tabs
      tabPosition="left"
      defaultActiveKey="0"
      id="detailPageShowsTime"
      className="h-full"
    >
      {renderDataDetailShowstime()}
    </Tabs>
  );
}
