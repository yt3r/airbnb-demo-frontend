import React from "react";
import styled from "styled-components";
import {
  SectionContainerBase,
  CardBase,
  H1,
  Cards,
  Arrow,
  Link,
  SectionHead,
  Scroll
} from "../styled";
import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import primeMeats from "./primeMeats.png";
import seaprice from "./seaprice.png";

const Popular = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = CardBase.extend`
  flex-basis: 25%;
  padding-right: 8px;
  padding-left: 8px;
`;

const Img = styled.img`width: 100%;`;

const Category = styled.p`
  font-size: 10px;
  line-height: 12px;
  font-weight: 700;
`;

const Name = styled.p`
  font-size: 18px;
  line-height: 21px;
  font-weight: 700;
`;
const Pricing = Name.extend`font-weight: 300;`;

export default () => {
  return (
    <Popular>
      <SectionHead>
        <H1>Popular reservations around the world</H1>
        <Link href="/popular-all">
          See all <Arrow />
        </Link>
      </SectionHead>
      <Cards>
        <Card>
          <Img src={chumley} alt="Chumley" />
          <Category>SPEAKEASY</Category>
          <Name>Chumley's</Name>
          <Pricing>About $60 per person</Pricing>
        </Card>
        <Card>
          <Img src={hanjan} alt="Hanjan" />
          <Category>KOREAN GASTROPUB</Category>
          <Name>Hanjan</Name>
          <Pricing>About $50 per person</Pricing>
        </Card>
        <Card>
          <Img src={primeMeats} alt="Prime Meats" />
          <Category>GERMAN AMERICAN</Category>
          <Name>Prime Meats</Name>
          <Pricing>About $55 per person</Pricing>
        </Card>
        <Card>
          <Img src={seaprice} alt="Seaprice" />
          <Category>FINE SEAFOOD</Category>
          <Name>Seaprice</Name>
          <Pricing>About $70 per person</Pricing>
        </Card>
        <Scroll />
      </Cards>
    </Popular>
  );
};
