import React from "react";

export default function Item() {
  return (
    <div className="w-full p-2 border-b">
      <div>
        <span>time</span>
        <span>Item</span>
      </div>
      <div>
        <img
          className="w-2"
          src="https://icon-library.com/images/trash-icon-vector/trash-icon-vector-19.jpg"
          alt="trash"
        />
      </div>
    </div>
  );
}
