import React from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import TabsAddressCinema from "./TabsAddressCinema";
import "./index.css";

const { TabPane } = Tabs;

export default function TabsCinemaList() {
  const { dataTabsCinema } = useSelector((state) => state.HomeSlice);

  const renderTabsCinemaList = () => {
    return dataTabsCinema?.map((item, index) => {
      return (
        <TabPane
          className="m-0"
          key={index}
          tab={
            <div className="border-b" style={{ paddingBottom: "20px" }}>
              <img width={60} height={60} src={item.logo} alt={item.logo} />
            </div>
          }
        >
          <TabsAddressCinema item={item} />
        </TabPane>
      );
    });
  };

  return (
    <Tabs
      style={{ border: "1px solid #00000029" }}
      tabPosition="left"
      defaultActiveKey="0"
    >
      {renderTabsCinemaList()}
    </Tabs>
  );
}
