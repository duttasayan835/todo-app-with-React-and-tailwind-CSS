import React from "react";

export default function Input() {
  return (
    <div className="p-3">
      <input
        placeholder="Enter the task to be done"
        className="p-3 border border-slate-400 w-full focus:outline-none"
        type="text"
        aria-label="INPUT-TASK"
      />
      <div>+</div>
    </div>
  );
}
