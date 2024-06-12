import React from "react";

export default function Input() {
  return (
    <div className="p-3 flex justify-around">
      <input
        placeholder="Enter the task to be done"
        className=" w-[90%] p-3 border border-slate-400 focus:outline-none"
        type="text"
        aria-label="INPUT-TASK"
      />
      <div className=" w-[50px] h-[50px] bg-[#e74c3c] text--white">+</div>
    </div>
  );
}
