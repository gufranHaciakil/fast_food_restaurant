import React from "react";
import Input from "../../components/input/Input";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="px-6">
      <div className="flex lg:w-[80%] md:flex-row flex-col bg-white py-6  mx-auto mt-12 rounded-lg shadow-lg">
        <div className="w-[45%] hidden lg:block justify-items-center border-r shadow-lg ">
          <img src="./imgs/login.png" width="" alt="" />
        </div>
        <div className="md:p-16 p-10 flex flex-col gap-12 w-full lg:w-[55%]">
          <h1 className="text-6xl font-[cursive] text-rose-900">Sign In</h1>
          <form className="flex flex-col gap-6">
            <div>
              <label className="text-zinc-500 font-medium block mb-3">
                Phone Number
              </label>
              <Input type="text" placeholder="Enter Phone No." />
            </div>
            <div>
              <label className="text-zinc-500 font-medium block mb-3">
                OTP send on above number
              </label>
              <Input type="number" placeholder="Enter OTP" />
            </div>
            <button
              type="button"
              onClick={() => (window.location.href = "/dashboard")}
              className="bg-[#b21e00] p-3 -mb-2 text-zinc-100 rounded-md"
            >
              Send Me in
            </button>
            <p className="text-sm text-zinc-500 font-medium">
              Don't have an account?
              <Link to="/register" className="text-red-800 ml-2 font-bold">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
