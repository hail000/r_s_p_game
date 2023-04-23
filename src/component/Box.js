import React from "react";

const Box = (props) => {
  console.log("props", props);
  const result =
    props.use === "컴퓨터"
      ? props.result === "이겼습니다!"
        ? "졌습니다!"
        : props.result === "졌습니다!"
        ? "이겼습니다!"
        : props.result
      : props.result;
  return (
    <div className="Box">
      <h1>{props.use}</h1>
      <h1>{props.item && props.item.name}</h1>
      <h1>{result}</h1>
    </div>
  );
};

export default Box;
