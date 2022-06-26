import React from "react";
import { NavLink } from "react-router-dom";
import { localStoreService } from "../../service/localStoreService";
import { useSelector } from "react-redux";
import { useCallback } from "react";

export default function UserNav() {
  const { userLogin } = useSelector((state) => state.HomeSlice);

  const handleLogout = useCallback(() => {
    localStoreService.removeUserLocal();
    window.location.href = "/login";
  }, []);

  return (
    <div>
      {userLogin ? (
        <div className="flex justify-center">
          <NavLink to="/account">
            <div className="text-slate-400 font-semibold text-xl hover:text-red-500 duration-300 cursor-pointer">
              Hi, {userLogin.hoTen}
            </div>
          </NavLink>
          <hr
            className="w-px h-8 mx-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", height: "2rem " }}
          />
          <a
            className="flex justify-center items-center link-logo"
            onClick={() => {
              handleLogout();
            }}
          >
            <svg
              className="MuiSvgIcon-root jss12 MuiSvgIcon-fontSizeLarge w-8 h-8 fill-slate-400 duration-300"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
            </svg>
            <p className="font-semibold text-slate-400 text-base ml-2 duration-300">
              Đăng xuất
            </p>
          </a>
        </div>
      ) : (
        <div className="flex">
          <NavLink
            to="/login"
            className="flex justify-center items-center link-logo"
          >
            <svg
              className="MuiSvgIcon-root jss12 MuiSvgIcon-fontSizeLarge w-8 h-8 fill-slate-400 duration-300"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
            </svg>
            <p className="font-semibold text-slate-400 text-base ml-2 duration-300">
              Đăng Nhập
            </p>
          </NavLink>

          <hr
            className="w-px mx-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", height: "2rem" }}
          />
          <NavLink
            to="/register"
            className="flex justify-center items-center link-logo"
          >
            <svg
              className="MuiSvgIcon-root jss12 MuiSvgIcon-fontSizeLarge w-8 h-8 fill-slate-400 duration-300"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
            </svg>
            <p className="font-semibold text-slate-400 text-base ml-2 duration-300">
              Đăng Ký
            </p>
          </NavLink>
        </div>
      )}
    </div>
  );
}
