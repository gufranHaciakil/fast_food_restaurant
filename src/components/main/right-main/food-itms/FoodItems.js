import React from "react";
import "./food.css";
const FoodItems = () => {
  return (
    <div className="food-items">
      <div className="food-items-cont flex gap-3 flex-wrap">
        <div className="item-box">
          <img src="./imgs/hamburger-1.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>
        <div className="item-box">
          <img src="./imgs/Beans-with-potatoes.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>
        <div className="item-box">
          <img src="./imgs/Cheese-pizza.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>

        <div className="item-box">
          <img src="./imgs/Diet-salad.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>
        <div className="item-box">
          <img src="./imgs/Grilled-chicken.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>
        <div className="item-box">
          <img src="./imgs/Pasta-with-vegetables.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>
        <div className="item-box">
          <img src="./imgs/hamburger-2.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>
        <div className="item-box">
          <img src="./imgs/Syrian-dish.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>
        <div className="item-box">
          <img src="./imgs/soup.jpg" alt="" />
          <p className="mt-4">Chicken Burger</p>
          <p className="flex items-center gap-2 text-gray-500 text-sm">
            <img src="./icons/dollar.png" alt="" />
            <span className="">$6.05</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItems;
