import React from "react";
import "./main.css";
import LeftMain from "./left-main/LeftMain";
import RightMain from "./right-main/RightMain";

const Main = () => {
  return (
    <main className="px-8">
      <div className="mains-cont flex gap-4">
        <LeftMain />
        <RightMain />
      </div>
    </main>
  );
};

export default Main;
