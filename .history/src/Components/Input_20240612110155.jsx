import React from "react";

export default function Input() {
  return (
    <div className="flex justify-around p-3">
      <input
        placeholder="Enter the task to be done"
        className=" w-[90%] p-3 border border-slate-400 focus:outline-none"
        type="text"
        aria-label="INPUT-TASK"
      />
      <div className=" w-[50px] h-[50px] bg-[#e74c3c] text-white text-3xl rounded-[50%] flex justify-center items-center ">
        <img src="https://cdn4.iconfinder.com/data/icons/ios-optimized-1/30/add__create__new__addition__buttons__more__round-1024.png" />
      </div>
    </div>
  );
}
