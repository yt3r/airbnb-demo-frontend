import React from "react";
import styled from "styled-components";
import star from "./star.svg";

const Star = styled.img.attrs({
  src: star,
  alt: "star"
})`
  padding-right: 4px;
  height: 12px;
`;

export default () => {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
};
