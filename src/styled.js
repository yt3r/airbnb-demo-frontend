import React from "react";
import "./fonts/fonts.css";
import styled from "styled-components";
import star from "./star.svg";
import arrow from "./arrow.svg";
import scroll from "./scroll.svg";
import arrowDown from "./arrowDown.svg";

export const SectionContainerBase = styled.section`
  margin-right: auto;
  margin-left: auto;
  margin-top: 48px;
  width: 964px;
  font-family: "Circular", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 24px;
  display: flex;
`;

export const CardBase = styled.a.attrs({
  href: "#"
})`
  border-sizing: border-box;
  text-decoration: none;
  color: rgba(56, 56, 56, 1);
`;

export const H1 = styled.h1`line-height: 34px;`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const Star = styled.img.attrs({
  src: star,
  alt: "star"
})`
  padding-right: 4px;
  height: 12px;
`;

export function Stars() {
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>
  );
}

export const Rating = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 14px;
`;

export const Arrow = styled.img.attrs({
  src: arrow,
  alt: "arrow"
})`
  padding-left: 8px;
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: rgba(56, 56, 56, 1);
  align-self: center;
`;

export const ScrollArrow = styled.img.attrs({
  src: scroll,
  alt: "Scroll arrow"
})`
  padding-left: 16px;
  padding-top: 11px;
`;

export const Scroll = styled.a`
  width: 40px;
  height: 40px;
  background: url(${scroll}) center no-repeat;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  box-sizing: border-box;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.16);
  border-radius: 50%;
  position: absolute;
  z-index: 100;
  top: 30%;
  left: 98%;
`;

export const Info = styled.p`
  line-height: 18px;
  font-size: 15px;
`;

export const Description = Info.extend`font-weight: 300;`;

export const RatingInfo = styled.span`
  line-height: 14px;
  font-size: 12px;
  font-weight: 300;
  align-self: flex-start;
`;

export const SectionHead = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const Dropdown = styled.select`
  box-sizing: border-box;
  appearance: none;
  background: transparent;
  font-size: 18px;
  line-height: 21px;
  font-weight: 300;
  height: 48px;
  width: 100%;
  background: url(${arrowDown}) no-repeat 90%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  margin-bottom: 16px;
  padding-left: 16px;
`;
