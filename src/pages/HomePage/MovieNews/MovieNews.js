import React, { useState } from "react";
import { Tabs } from "antd";
import "./index.css";
import CinemaNews24h from "./CinemaNews24h";
import ReviewNews from "./ReviewNews";
import PromotionNews from "./PromotionNews";

const { TabPane } = Tabs;

export default function MovieNews() {
  const [openCinemaNews, setOpenCinemaNews] = useState(false);
  const [openReviewNews, setOpenReviewNews] = useState(false);
  const [openPromotionNews, setOpenPromotionNews] = useState(false);

  const handleOpenCinemaNews = () => {
    setOpenCinemaNews(!openCinemaNews);
  };
  const handleOpenReviewNews = () => {
    setOpenReviewNews(!openReviewNews);
  };
  const handlePromotionNews = () => {
    setOpenPromotionNews(!openPromotionNews);
  };

  let renderButton = (open, handleOpen, info) => {
    return (
      <>
        {" "}
        {open ? (
          <>
            {info}
            <div className="flex justify-center">
              <button
                onClick={() => handleOpen()}
                className="mt-4 py-2 px-3 border text-lg font-medium rounded-lg button--aylen relative  duration-300"
              >
                Rút gọn
              </button>
            </div>
          </>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={() => handleOpen()}
              className="mt-4 py-2 px-3 border text-lg font-medium rounded-lg button--aylen relative  duration-300 "
            >
              Xem thêm
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <Tabs defaultActiveKey="1">
        <TabPane
          key="1"
          tab={
            <div className="text-xl font-medium text-black">Điện Ảnh 24h</div>
          }
        >
          {renderButton(
            openCinemaNews,
            handleOpenCinemaNews,
            <CinemaNews24h />
          )}
        </TabPane>
        <TabPane
          key="2"
          tab={<div className="text-xl font-medium text-black">Review</div>}
        >
          {renderButton(openReviewNews, handleOpenReviewNews, <ReviewNews />)}
        </TabPane>
        <TabPane
          key="3"
          tab={<div className="text-xl font-medium text-black">Khuyến Mãi</div>}
        >
          {renderButton(
            openPromotionNews,
            handlePromotionNews,
            <PromotionNews />
          )}
        </TabPane>
      </Tabs>
    </div>
  );
}
