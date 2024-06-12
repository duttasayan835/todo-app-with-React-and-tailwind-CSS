import React, { useState } from "react";

export default function Item() {
  const [done, setDone] = useState(false);
  return (
    <div
      onClick={() => setDone(!done)}
      className={`flex justify-between w-full p-2 border-b cursor-pointer select-none items-center`}
    >
      <div className="">
        <span className="pr-2 text-[14px] text-slate-400">Time</span>
        <span className={`${
        done === true ? "line-through" : ""
      } text-[20px]}`>Item</span>
      </div>
      <div className="bg-[#df928bf9] bg-center pt-1 pl-1 pr-1">
        <img
          className="w-4 h-4 "
          src="https://icon-library.com/images/trash-icon-vector/trash-icon-vector-19.jpg"
          alt="trash"
        />
      </div>
    </div>
  );
}
