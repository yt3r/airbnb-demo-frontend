import React from "react";
import styled from "styled-components";
import {
  SectionContainerBase,
  CardBase,
  H1,
  Img,
  Cards,
  Info,
  Scroll
} from "../styled";
import capeTown from "./capeTown.png";
import losAngeles from "./losAngeles.png";
import miami from "./miami.png";
import paris from "./paris.png";
import seoul from "./seoul.png";
import tokyo from "./tokyo.png";

const Featured = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = CardBase.extend`flex-basis: 16.6667%;`;

const FeaturedCard = props => (
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
        <FeaturedCard src={paris} name="Paris" />
        <FeaturedCard src={miami} name="Miami" />
        <FeaturedCard src={tokyo} name="Tokyo" />
        <FeaturedCard src={capeTown} name="Cape town" />
        <FeaturedCard src={seoul} name="Seoul" />
        <FeaturedCard src={losAngeles} name="Los Angeles" />
        <Scroll />
      </Cards>
    </Featured>
  );
};
