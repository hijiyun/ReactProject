import React from "react";

const Box = (props) => {
  console.log("props는: ",props)
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item && props.item.img}
        alt="가위"
      />
      <h2>win</h2>
    </div>
  );
};

export default Box;
