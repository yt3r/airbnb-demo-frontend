import React from "react";
import styled from "styled-components";
import {
  SectionContainerBase,
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

const Popular = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = CardBase.extend`flex-basis: 25%;`;

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

const PopularCard = props => (
  <Card>
    <Img src={props.src} alt={props.name} />
    <Category>{props.category.toUpperCase()}</Category>
    <Name>{props.name}</Name>
    <Pricing>About ${props.price} per person</Pricing>
  </Card>
);

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
        <PopularCard
          src={chumley}
          name="Chumley's"
          category="speakeasy"
          price={60}
        />
        <PopularCard
          src={hanjan}
          name="Hanjan"
          category="korean gastropub"
          price={50}
        />
        <PopularCard
          src={primeMeats}
          name="Prime Meats"
          category="german american"
          price={55}
        />
        <PopularCard
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
