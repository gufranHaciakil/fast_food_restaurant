import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center h-screen p-6">
      <h1>404 NOT FOUND PAGE !!</h1>
      <Link
        to="/"
        className="bg-red-900 mt-4 text-white p-6 rounded-full active:scale-75"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
