import React from "react";

export default function Item() {
  return (
    <div className="flex justify-between w-full p-2 border-b">
      <div className="">
        <span className="pr-2 text-[14px] text-slate-400">Time</span>
        <span>Item</span>
      </div>
      <div className="bg-[#e74c3d] flex items bg-center ">
        <img
          className="flex items-center w-4 h-4"
          src="https://icon-library.com/images/trash-icon-vector/trash-icon-vector-19.jpg"
          alt="trash"
        />
      </div>
    </div>
  );
}
