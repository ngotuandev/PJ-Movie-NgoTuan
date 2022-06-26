import React, { useEffect } from "react";
import FormLogin from "./FormLogin/FormLogin";
import { localStoreService } from "../../service/localStoreService";
import { useHistory } from "react-router-dom";
import background from "../../assets/img/background.jpg";

export default function DangNhapPage() {
  let history = useHistory();

  useEffect(() => {
    if (localStoreService.getUserLocal()) {
      history.push("/");
    }
  }, []);

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
        <FormLogin></FormLogin>
      </div>
    </>
  );
}
