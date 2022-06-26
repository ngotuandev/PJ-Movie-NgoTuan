import React from "react";
import FormRegister from "./FormRegister/FormRegister";
import background from "../../assets/img/background.jpg";

export default function DangKiPage() {
  return (
    <>
      <div
        className="flex justify-center items-center"
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <FormRegister></FormRegister>
      </div>
    </>
  );
}
