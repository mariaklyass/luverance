import React from "react";

const Icon = ({ name, width, height }) => (
  <svg className={`icon icon-${name}`} style={{ width, height }}>
    <use xlinkHref={`../public/icons/sprite.svg#${name}`}></use>
  </svg>
);

export default Icon;
