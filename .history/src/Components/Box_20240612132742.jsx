import React from "react";
import Item from "./Item";

export default function Box(props) {
  const items = props.data.map(() => {
    return <Item />;
  });
  return (
    <div className="p-3">
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}
