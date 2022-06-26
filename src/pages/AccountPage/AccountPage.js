import React, { useEffect } from "react";
import background from "../../assets/img/background.jpg";
import InfoAccount from "./InfoAccount";
import { userService } from "../../service/userService";
import { useDispatch, useSelector } from "react-redux";
import TicketHistory from "./TicketHistory";
import "./index.css";
import {
  getDataTicketHistoryService,
  getDataTicketHistory,
  getDataAccountUser,
} from "../../redux/reducers/AccountSlice";

export default function AccountPage() {
  const { userLogin } = useSelector((state) => state.HomeSlice);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDataTicketHistoryService(userLogin.taiKhoan));

    dispatch(getDataAccountUser(userLogin.taiKhoan));
    // userService
    //   .postDataUser(userLogin.taiKhoan)
    //   .then((res) => {
    //     dispatch(getDataTicketHistory(res.data.content));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div
          className="h-full flex justify-center items-center mx-auto px-4 account-page"
          style={{ width: "1100px" }}
        >
          <div className="w-full pt-24">
            <div
              className="w-full bg-white rounded-lg px-3 py-2"
              style={{
                filter: "drop-shadow(0 0 .75rem rgb(248 113 113))",
              }}
            >
              <InfoAccount userLogin={userLogin} />
            </div>
            <div
              className="my-5 w-full h-96 px-3 py-2 rounded-lg bg-white overflow-y-scroll"
              style={{
                filter: "drop-shadow(0 0 .75rem rgb(248 113 113))",
              }}
            >
              <TicketHistory />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
