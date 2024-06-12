import React from "react";

export default function Input() {
  return (
    <div>
      <input
        className="p-3 border border-slate-400"
        type="text"
        aria-label="INPUT-TASK"
      />
      <div>+</div>
    </div>
  );
}
