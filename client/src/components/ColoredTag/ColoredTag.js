import React from "react";
import "./ColoredTag.scss";

function ColoredTag(props) {
  return <p className="colored-tag">{props.children}</p>;
}

export default ColoredTag;
