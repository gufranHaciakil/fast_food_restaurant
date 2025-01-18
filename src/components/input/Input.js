import React from "react";

const Input = ({ value, onChange, type, placeholder = "", name }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="py-4 px-4 text-sm rounded-[1rem] w-full border-[1px] border-gray-100 bg-gray-100 focus:ring-0 focus:outline-0 focus:border-red-700"
    />
  );
};

export default Input;
