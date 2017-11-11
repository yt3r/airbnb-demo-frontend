import "./fonts/fonts.css";
import styled, { css } from "styled-components";
import arrow from "./arrow.svg";
import scroll from "./scroll.svg";
import arrowDown from "./arrowDown.svg";
import "flexboxgrid2";

export const sizes = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export const mediaMax = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      max-width: ${sizes[label]}px;
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export const SectionBase = styled.section.attrs({
  className: "container"
})`
  margin-top: 48px;
  font-family: "Circular", Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 24px;

  position: relative;
`;

export const CardBase = styled.a.attrs({
  href: "#"
})`
  box-sizing: border-box;
  text-decoration: none;
  color: rgba(56, 56, 56, 1);
  padding-left: 8px;
  padding-right: 8px;
`;

export const H1 = styled.h1`line-height: 34px;`;

export const Img = styled.img`width: 100%;`;

export const Cards = styled.div.attrs({
  className: "row"
})`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
`;

export const Rating = styled.div`
  display: flex;
  font-size: 12px;
  line-height: 14px;
`;

export const Arrow = styled.img.attrs({
  src: arrow,
  alt: "arrow"
})`

`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 14px;
  font-weight: 400;
  color: rgba(56, 56, 56, 1);
  margin-left: auto;
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
  top: 40%;
  left: 98%;
  ${mediaMin.xl`
    display: none;
  `};
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
  box-sizing: border-box;
  align-items: center;
`;

export const Dropdown = styled.select`
  box-sizing: border-box;
  appearance: none;
  ::-ms-expand {
    display: none;
  }
  background: transparent;
  font-size: 18px;
  line-height: 21px;
  height: 48px;
  width: 100%;
  background: url(${arrowDown}) no-repeat 90%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  margin: 16px 8px 0 8px;
  padding-left: 16px;
  font-family: inherit;
  color: rgba(56, 56, 56, 1);
  font-weight: 300;
`;
