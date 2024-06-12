import React from "react";

export default function Item() {
  return (
    <div className="flex justify-between w-full p-2 border-b">
      <div className="">
        <span>Item</span>
      </div>
      <div>
        <img
          className="w-4"
          src="https://icon-library.com/images/trash-icon-vector/trash-icon-vector-19.jpg"
          alt="trash"
        />
      </div>
    </div>
  );
}
