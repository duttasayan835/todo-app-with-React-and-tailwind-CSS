import React from "react";
import Item from "./Item";

export default function Box(props) {
  const items = props.data.map((
    singleData,key
  ) => {
    return <Item key={key} item={}/>;
  });
  return (
    <div className="p-3">
      {items}
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
