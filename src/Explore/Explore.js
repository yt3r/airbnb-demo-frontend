import React from "react";
import styled from "styled-components";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaraunts from "./restaraunts.png";
import { SectionContainerBase, H1, Cards, CardBase } from "../styled";

const Explore = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = CardBase.extend`
  height: 72px;
  flex-basis: 33.3333%;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  margin-left: 18px;
  overflow: hidden;
`;

const Img = styled.img`height: 100%;`;

const CardText = styled.p`
  width: 60%;
  font-size: 17px;
  margin-top: auto;
  margin-bottom: auto;
`;

const ExploreCard = props => (
  <Card>
    <Img src={props.src} alt={props.name} />
    <CardText>{props.name}</CardText>
  </Card>
);

export default () => {
  return (
    <Explore>
      <H1>Explore Airbnb</H1>
      <Cards>
        <ExploreCard src={homes} name="Homes" />
        <ExploreCard src={experiences} name="Experiences" />
        <ExploreCard src={restaraunts} name="Restaraunts" />
      </Cards>
    </Explore>
  );
};
