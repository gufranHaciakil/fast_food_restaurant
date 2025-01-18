import React, { useState } from "react";
import "./table.css";
import ItemList from "./items/ItemList";

const Table = ({
  tableBody,
  tableHead,
  tableCoun,
  pagCount,
  box = "",
  title = "",
  title2 = "",
}) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div className="transaction px-8">
      <div className="transaction-cont">
        <div className="flex justify-between flex-wrap gap-4 items-center">
          <div className="flex gap-6 flex-wrap items-center">
            <h1 className="font-semibold">
              {title}
              <span className="text-lime-500 ml-4">{title2}</span>
            </h1>

            <button
              className={`bg-lime-500 px-6 ${
                box === "" ? "hidden" : "block"
              } py-4 rounded-full text-zinc-50 focus:ring-4 focus:ring-lime-300`}
            >
              {box}
            </button>
          </div>{" "}
          <div className="relative w-[20rem]">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full py-3 px-4  rounded-[1rem] border focus:border-gray-400 border-gray-200 focus:ring-0 focus:outline-0 "
            />
            <img
              src="./icons/search_gray.png"
              alt=""
              className="absolute top-3 right-3"
            />
          </div>
        </div>

        <div className="item-list mt-14">
          <ItemList
            tableCoun={tableCoun}
            tableBody={tableBody}
            tableHead={tableHead}
            pagCount={pagCount}
          />
        </div>

        <div className="mt-8 mb-14 flex flex-col gap-4 justify-center sm:flex-row sm:justify-between items-center">
          <p className="text-gray-600 ml-4">Showing 1 to 5 of 11 entries</p>
          <div className="flex gap-2 transa-btns">
            <button>Previous</button>
            <div className="flex gap-2">
              {pagCount.map((num, index) => (
                <button
                  key={index}
                  onClick={() => handleClick(index)}
                  className={activeButton === index ? "active" : ""}
                  style={{
                    backgroundColor: activeButton === index ? "" : "#f1f1f1",
                    color: activeButton === index ? "#a10505" : "gray",
                  }}
                >
                  {num}
                </button>
              ))}
            </div>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
