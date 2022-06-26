import React from "react";
import { Tabs } from "antd";
import TabsMovie from "./TabsMovie";

const { TabPane } = Tabs;

export default function TabsAddressCinema({ item }) {
  const renderTabsAddressCinema = () => {
    return item.lstCumRap?.map((item, index) => {
      return (
        <TabPane
          tab={
            <div className="w-80 border-b pb-3">
              <p className="uppercase text-base font-medium text-green-500 text-left whitespace-normal">
                {item.tenCumRap}
              </p>
              <p className="text-left text-sm text-slate-700">
                {item.diaChi.length < 45
                  ? item.diaChi
                  : item.diaChi.substr(0, 45) + "..."}
              </p>
            </div>
          }
          key={index}
        >
          <TabsMovie item={item.danhSachPhim} />
        </TabPane>
      );
    });
  };

  return (
    <Tabs className="tabs-address" tabPosition="left" defaultActiveKey="0">
      {renderTabsAddressCinema()}
    </Tabs>
  );
}
