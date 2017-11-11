import React from "react";
import { SectionBase, CardBase, H1, Img, Cards, Info, Scroll } from "../styled";

import capeTown from "./capeTown.png";
import losAngeles from "./losAngeles.png";
import miami from "./miami.png";
import paris from "./paris.png";
import seoul from "./seoul.png";
import tokyo from "./tokyo.png";

const Featured = SectionBase.extend`flex-direction: column;`;

const CardSt = CardBase.extend.attrs({
  className: "col-xs-4 col-md-3 col-xl-2"
})``;

const Card = props => (
  <CardSt>
    <Img src={props.src} alt={props.name} />
    <Info>{props.name}</Info>
  </CardSt>
);

export default () => {
  return (
    <Featured>
      <H1>Featured destinations</H1>
      <Cards>
        <Card src={paris} name="Paris" />
        <Card src={miami} name="Miami" />
        <Card src={tokyo} name="Tokyo" />
        <Card src={capeTown} name="Cape town" />
        <Card src={seoul} name="Seoul" />
        <Card src={losAngeles} name="Los Angeles" />
        <Scroll />
      </Cards>
    </Featured>
  );
};
