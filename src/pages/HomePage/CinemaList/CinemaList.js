import React from "react";
import backCinema from "../../../assets/img/backCinema.png";
import TabsCinemaList from "./TabsCinemaList";

export default function CinemaList() {
  return (
    <div style={{ padding: "0 20px" }}>
      <div
        className="pt-32 bg-no-repeat"
        style={{
          backgroundImage: `url(${backCinema})`,
          backgroundSize: "100%",
        }}
      ></div>
      <div>
        <TabsCinemaList />
      </div>
    </div>
  );
}
