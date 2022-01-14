import React from "react";
import "./Tag.scss";

function Tag(props) {
  return (
    <p className="tag" onClick={props.onClick}>
      {props.children}
    </p>
  );
}

export default Tag;
