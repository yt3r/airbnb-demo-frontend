import React from "react";
import styled from "styled-components";
import homes from "./homes.png";
import experiences from "./experiences.png";
import restaraunts from "./restaraunts.png";
import { SectionBase, H1, Cards, CardBase, mediaMin } from "../styled";
import "flexboxgrid2";

const Explore = SectionBase.extend`flex-direction: column;`;

const Card = CardBase.extend.attrs({
  className: "col-xs-5 col-lg-4"
})`
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
  ${mediaMin.md`flex-direction: row; `};
`;

const Img = styled.img`
  width: 100%;
  ${mediaMin.md`width: 40%;`};
`;

const CardText = styled.p`
  font-size: 17px;
  margin-right: auto;
  padding-left: 16px;
`;

const SecCard = props => (
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
        <SecCard src={homes} name="Homes" />
        <SecCard src={experiences} name="Experiences" />
        <SecCard src={restaraunts} name="Restaraunts" />
      </Cards>
    </Explore>
  );
};
