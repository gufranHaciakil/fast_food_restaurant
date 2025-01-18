import React from "react";
import "./right.css";
import ScrollItems from "./scrolling/ScrollItems";
import FoodItems from "./food-itms/FoodItems";
const RightMain = () => {
  return (
    <div className="right-main flex-1 overflow-hidden ml-[29rem]">
      <ScrollItems />
      <div className="my-7 px-3">
        <div className="search mb-7 flex relative">
          <input
            type="text"
            className="flex-1 p-4 rounded-[2.5rem] border border-gray-100 focus:ring-0 focus:outline-0 "
          />
          <div className="absolute right-0 py-[0.88rem] px-6 hover:opacity-80 rounded-[2.5rem] items-center gap-2 flex">
            <button className="font-bold text-lg">Search</button>
            <img src="./icons/search.png" width={"20px"} alt="" />
          </div>
        </div>
        <FoodItems />
      </div>
    </div>
  );
};

export default RightMain;
