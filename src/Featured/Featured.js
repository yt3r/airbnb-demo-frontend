import React from "react";
import styled from "styled-components";
import {
  SectionContainerBase,
  CardBase,
  H1,
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

const Card = CardBase.extend`
  flex-basis: 16.6667%;
  padding-right: 8px;
  padding-left: 8px;
`;

const Img = styled.img`width: 100%;`;

export default () => {
  return (
    <Featured>
      <H1>Featured destinations</H1>
      <Cards>
        <Card>
          <Img src={paris} alt="Paris" />
          <Info>Paris</Info>
        </Card>
        <Card>
          <Img src={miami} alt="Miami" />
          <Info>Miami</Info>
        </Card>
        <Card>
          <Img src={tokyo} alt="Tokyo" />
          <Info>Tokyo</Info>
        </Card>
        <Card>
          <Img src={capeTown} alt="Cape town" />
          <Info>Cape town</Info>
        </Card>
        <Card>
          <Img src={seoul} alt="Seoul" />
          <Info>Seoul</Info>
        </Card>
        <Card>
          <Img src={losAngeles} alt="Los Angeles" />
          <Info>Los Angeles</Info>
        </Card>
        <Scroll />
      </Cards>
    </Featured>
  );
};
