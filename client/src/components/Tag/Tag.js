import React from "react";
import './Tag.scss';

function Tag(props) {
  return <p className="tag">{props.children}</p>;
}

export default Tag;
