import React from "react";
import { useSelector } from "react-redux";
import bgLoad from "../../assets/bgLoad.json";
import Lottie from "lottie-react";

export default function SpinnerComponents() {
  const { loading } = useSelector((state) => state.SpinnerSlice);

  return loading ? (
    <Lottie
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: "100",
        position: "fixed",
      }}
      loop={Infinity}
      animationData={bgLoad}
    />
  ) : (
    <></>
  );
}
