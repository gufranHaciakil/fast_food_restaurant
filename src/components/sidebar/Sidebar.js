import React from "react";
import "./sidebar.css";
import { Link } from "react-router";

const Sidebar = ({ setShowSidebar }) => {
  const closeSidebar = () => {
    setShowSidebar(false);
  };
  return (
    <div className="fixed sidebar top-[5rem] bottom-0 right-0 left-0 bg-[#8686868a] z-20 ">
      <div className="bg-[#f0f0f0] h-full w-72 flex flex-col pt-7 gap- sidebar-cont">
        <Link to={"/"} onClick={closeSidebar} className="item hid">
          <img src="./icons/pos.png" alt="" />
          <span>Pos</span>
        </Link>
        <Link
          to={"/transaction"}
          onClick={closeSidebar}
          className="item hid"
        >
          <img src="./icons/list.png" alt="" />
          <span>Transaction</span>
        </Link>
        <Link to={"/booking"} onClick={closeSidebar} className="item hid">
          <img src="./icons/booking.png" alt="" />
          <span>Booking</span>
        </Link>
        <Link
          to={"/orders_status"}
          onClick={closeSidebar}
          className="item hid"
        >
          <img src="./icons/loading.png" alt="" />
          <span>Orders Status</span>
        </Link>
        <Link to={"/dashboard"} onClick={closeSidebar} className="item block">
          <img src="./icons/dashboard.png" alt="" />
          <span>Dashboard</span>
        </Link>
        <Link to={"/people"} onClick={closeSidebar} className="item block">
          <img src="./icons/boy.png" alt="" />
          <span>People</span>
        </Link>
        <Link to={"/wallet"} onClick={closeSidebar} className="item block">
          <img src="./icons/wallet.png" alt="" />
          <span>Wallet</span>
        </Link>
        <Link to={"/foodItems"} onClick={closeSidebar} className="item block">
          <img src="./icons/food.png" alt="" />
          <span>Food Items</span>
        </Link>
        <Link to={"/reviews"} onClick={closeSidebar} className="item block">
          <img src="./icons/star.png" alt="" />
          <span>Reviews</span>
        </Link>
        <Link
          to={"/authentication"}
          onClick={closeSidebar}
          className="item block"
        >
          <img src="./icons/checked.png" alt="" />
          <span>Authentication</span>
        </Link>
        <Link to={"/setting"} onClick={closeSidebar} className="item block">
          <img src="./icons/cogwheel.png" alt="" />
          <span>Settings</span>
        </Link>
        <Link to={"/login"} onClick={closeSidebar} className="item block">
          <img src="./icons/logout.png" alt="" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
