import React from "react";
import styled from "styled-components";
import {
  SectionBase,
  CardBase,
  H1,
  Img,
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

const Popular = SectionBase.extend`flex-direction: column;`;

const CardSt = CardBase.extend.attrs({
  className: "col-xs-6 col-md-4 col-xl-3"
})``;

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

const Card = props => (
  <CardSt>
    <Img src={props.src} alt={props.name} />
    <Category>{props.category.toUpperCase()}</Category>
    <Name>{props.name}</Name>
    <Pricing>About ${props.price} per person</Pricing>
  </CardSt>
);

export default () => {
  return (
    <Popular>
      <SectionHead>
        <H1>Popular reservations around the world</H1>
        <Link href="/popular-all">
          See all<Arrow />
        </Link>
      </SectionHead>
      <Cards>
        <Card src={chumley} name="Chumley's" category="speakeasy" price={60} />
        <Card
          src={hanjan}
          name="Hanjan"
          category="korean gastropub"
          price={50}
        />
        <Card
          src={primeMeats}
          name="Prime Meats"
          category="german american"
          price={55}
        />
        <Card
          src={seaprice}
          name="Seaprice"
          category="fine seafood"
          price={70}
        />
        <Scroll />
      </Cards>
    </Popular>
  );
};
