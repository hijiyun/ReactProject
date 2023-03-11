import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="https://cdn-icons-png.flaticon.com/512/1499/1499517.png"
        alt="가위"
      />
      <h2>win</h2>
    </div>
  );
};

export default Box;
