import React from "react";

function Input({placeholder}: any, {name}:any) {
  return (
      <input 
      type="text"
      name={name}
        placeholder={placeholder}
        className="py-1 lg:border-r placeholder:text-white w-[180px]  text-lg text-sm: md:text-base border-gray-100/50  bg-transparent  outline-none text-white"
      />
  );
}

export default Input;
