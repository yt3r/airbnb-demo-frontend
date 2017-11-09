import React from "react";
import styled from "styled-components";
import { SectionContainerBase, H1, Cards } from "../styled";
import capeTown from "./cape-town.png";
import losAngeles from "./los-angeles.png";
import miami from "./miami.png";
import paris from "./paris.png";
import seoul from "./seoul.png";
import tokyo from "./tokyo.png";

const Featured = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = styled.div`
  flex-basis: 16.6667%;
  box-sizing: border-box;
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
          <p>Paris</p>
        </Card>
        <Card>
          <Img src={miami} alt="Miami" />
          <p>Miami</p>
        </Card>
        <Card>
          <Img src={tokyo} alt="Tokyo" />
          <p>Tokyo</p>
        </Card>
        <Card>
          <Img src={capeTown} alt="Cape town" />
          <p>Cape town</p>
        </Card>
        <Card>
          <Img src={seoul} alt="Seoul" />
          <p>Seoul</p>
        </Card>
        <Card>
          <Img src={losAngeles} alt="Los Angeles" />
          <p>Los Angeles</p>
        </Card>
      </Cards>
    </Featured>
  );
};
