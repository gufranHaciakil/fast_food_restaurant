import React from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="p-6">
      <div className="bg-white sm:p-12 p-6 shadow-md sm:w-[33rem] mx-auto mt-4">
        <div className="flex justify-center gap-3 items-center">
          <img src="./imgs/salad2.png" alt="" />
          <h1 className="font-bold">Davur</h1>
        </div>
        <h2 className="text-center mt-3 text-lg font-semibold text-gray-400">
          sign up your account
        </h2>
        <form className="flex flex-col gap-">
          <div className="flex flex-col mt-4 gap-3">
            <label className="font-bold ml-3 text-gray-500">Username</label>
            <Input type="text" placeholder="username" />
          </div>
          <div className="flex flex-col mt-4 gap-3">
            <label className="font-bold ml-3 text-gray-500">Email</label>
            <Input type="email" placeholder="hello@exmple.com" />
          </div>
          <div className="flex flex-col mt-4 gap-3">
            <label className="font-bold ml-3 text-gray-500">Password</label>
            <Input type="password" placeholder="••••••••" />
          </div>
          <button
            type="button"
            onClick={() => (window.location.href = "/dashboard")}
            className="bg-red-800 text-zinc-100 p-3 rounded-xl mt-6 font-bold"
          >
            Sign me up
          </button>
          <p className="text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-red-800">
              {" "}
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
