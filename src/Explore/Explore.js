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
  margin-right: 18px;
  overflow: hidden;
`;

const Img = styled.img`height: 100%;`;

const CardText = styled.p`
  width: 60%;
  font-size: 17px;
  margin-top: auto;
  margin-bottom: auto;
`;

export default () => {
  return (
    <Explore>
      <H1>Explore Airbnb</H1>
      <Cards>
        <Card>
          <Img src={homes} alt="Homes pic" />
          <CardText>Homes</CardText>
        </Card>
        <Card>
          <Img src={experiences} alt="Experiences pic" />
          <CardText>Experiences</CardText>
        </Card>
        <Card>
          <Img src={restaraunts} alt="Restaraunts pic" />
          <CardText>Restaraunts</CardText>
        </Card>
      </Cards>
    </Explore>
  );
};
