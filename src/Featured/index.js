import React from "react";
import styled from "styled-components";
import { SectionBase, CardBase, H1, Img, Cards, Info, Scroll } from "../styled";
import "flexboxgrid2";
import capeTown from "./capeTown.png";
import losAngeles from "./losAngeles.png";
import miami from "./miami.png";
import paris from "./paris.png";
import seoul from "./seoul.png";
import tokyo from "./tokyo.png";

const Featured = SectionBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = CardBase.extend.attrs({
  className: "col-xs-4 col-md-3 col-xl-2"
})``;

const SecCard = props => (
  <Card>
    <Img src={props.src} alt={props.name} />
    <Info>{props.name}</Info>
  </Card>
);

export default () => {
  return (
    <Featured>
      <H1>Featured destinations</H1>
      <Cards>
        <SecCard src={paris} name="Paris" />
        <SecCard src={miami} name="Miami" />
        <SecCard src={tokyo} name="Tokyo" />
        <SecCard src={capeTown} name="Cape town" />
        <SecCard src={seoul} name="Seoul" />
        <SecCard src={losAngeles} name="Los Angeles" />
        <Scroll />
      </Cards>
    </Featured>
  );
};
