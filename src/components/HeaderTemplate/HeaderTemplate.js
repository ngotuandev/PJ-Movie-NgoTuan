import React from "react";
import { NavLink } from "react-router-dom";
import UserNav from "./UserNav";
import logo from "../../assets/img/logo.png";
import "./index.css";
import MediaQuery from "react-responsive";

export default function HeaderTemplate() {
  return (
    <div
      className="w-full  fixed shadow"
      style={{ zIndex: "10", backgroundColor: "rgba(255,255,255,0.9)" }}
    >
      <div className="h-20 flex justify-between px-10 items-center container mx-auto">
        <div>
          <NavLink to="/">
            <img width={200} height={200} src={logo} alt={logo} />
          </NavLink>
        </div>
        <MediaQuery maxWidth={1280}>
          <label htmlFor="menu__input" className="menu-nav">
            <input
              id="menu__input"
              type="checkbox"
              className="menu__input-check hidden"
            />
            <svg
              className="h-10 w-10  text-red-500 cursor-pointer"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <label
              htmlFor="menu__input"
              className="menu-nav-overlay fixed top-0 bottom-0 left-0 right-0 hidden cursor-pointer"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            ></label>
            <div className="menu-navbar fixed top-0 bottom-0 right-0 w-52 bg-white">
              <div className="menu-user-nav pb-3 pt-4">
                <UserNav />
              </div>
              <div className="p-3 flex flex-col font-medium text-black text-lg border-t ">
                <a href="#carouselListMovie" className="mt-3">
                  <div className="cursor-pointer hover:text-red-500 duration-200">
                    Lịch chiếu
                  </div>
                </a>
                <a href="#cinemaList" className="mt-3">
                  <div className="cursor-pointer hover:text-red-500 duration-200">
                    Cụm rạp
                  </div>
                </a>
                <a href="#movieNews" className="mt-3">
                  <div className="cursor-pointer hover:text-red-500 duration-200">
                    Tin tức
                  </div>
                </a>
                <a href="#infoApp" className="mt-3">
                  <div className="cursor-pointer hover:text-red-500 duration-200">
                    Ứng dụng
                  </div>
                </a>
              </div>
            </div>
          </label>
        </MediaQuery>
        <MediaQuery minWidth={1281}>
          <div className="space-x-8 font-medium text-black text-lg">
            <a href="#carouselListMovie">
              <span className="cursor-pointer hover:text-red-500 duration-200">
                Lịch chiếu
              </span>
            </a>
            <a href="#cinemaList">
              <span className="cursor-pointer hover:text-red-500 duration-200">
                Cụm rạp
              </span>
            </a>
            <a href="#movieNews">
              <span className="cursor-pointer hover:text-red-500 duration-200">
                Tin tức
              </span>
            </a>
            <a href="#infoApp">
              <span className="cursor-pointer hover:text-red-500 duration-200">
                Ứng dụng
              </span>
            </a>
          </div>
          <div>
            <UserNav />
          </div>
        </MediaQuery>
      </div>
    </div>
  );
}
