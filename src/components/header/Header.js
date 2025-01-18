import React, { Fragment, useState } from "react";
import "./header.css";
import Sidebar from "../sidebar/Sidebar";
import { Link } from "react-router";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Fragment>
      <div className="bg-white shadow-sm pr-8 fixed w-full z-10 right-0 left-0 top-0">
        <div className="flex header-cont justify-between gap-[2rem] h-full">
          <div className="item-1 flex gap-7 h-full">
            <div
              className="menu-icon-div cursor-pointer overflow-hidden"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              {showSidebar ? (
                <img
                  src="./icons/close.png"
                  className="close-icon"
                  width={"30px"}
                  alt="no img"
                />
              ) : (
                <img
                  src="./icons/menu.png"
                  className="menu-icon"
                  width={"40px"}
                  alt="no img"
                />
              )}
            </div>

            <h2 className="text-4xl font-bold mt-[18px] pb-6">Davur</h2>
          </div>
          <div className="item-2 mt-[28px]">
            <ul className="flex flex-wrap">
              <li>
                <Link to={"/"}>
                  <img src="./icons/pos.png" alt="" />
                  <span> POS</span>
                </Link>
              </li>
              <li>
                <Link to={"/transaction"}>
                  <img src="./icons/list.png" alt="" />
                  <span>Transaction</span>
                </Link>
              </li>
              <li>
                <Link to={"/booking"}>
                  <img src="./icons/booking.png" alt="" />
                  <span>Booking</span>
                </Link>
              </li>
              <li>
                <Link to={"/orders_status"}>
                  <img src="./icons/loading.png" alt="" />
                  <span>Orders Status</span>
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src="./icons/dashboard.png" alt="" />
                  <span> Check Dashboard</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="item-3 flex gap-4 items-center ">
            <div>
              <p className="text-md font-bold">Gufran Hac. </p>
              <p className="text-xs text-gray-500 cursor-pointer hover:text-red-600">
                Super Admin
              </p>
            </div>
            <div className="outlinee cursor-pointer bg-gray-300 border-4 border-white rounded-full p-1 overflow-hidden">
              <img src="./imgs/woman.png" alt="" width={"40px"} />
            </div>
          </div>
        </div>
      </div>
      {showSidebar && <Sidebar setShowSidebar={setShowSidebar} />}
    </Fragment>
  );
};

export default Header;
