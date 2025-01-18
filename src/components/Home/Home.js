import React, { Fragment } from "react";
import Header from "../header/Header";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="mt-[110px]">
        <Outlet />
      </div>
    </Fragment>
  );
};

export default Home;
