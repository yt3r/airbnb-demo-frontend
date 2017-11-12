import React from "react";
import styled from "styled-components";
import forestTherapy from "./forestTherapy.png";
import whaleWatching from "./whaleWatching.png";
import mountain from "./mountain.png";
import salsaNight from "./salsaNight.png";
import Stars from "../Stars";
import {
  SectionBase,
  CardBase,
  H1,
  Img,
  Cards,
  Rating,
  Arrow,
  Link,
  Info,
  RatingInfo,
  SectionHead,
  Scroll
} from "../styled";

const Experiences = SectionBase.extend`flex-direction: column;`;

const CardSt = CardBase.extend.attrs({
  className: "col-xs-6 col-md-4 col-xl-3"
})``;

const Span = styled.span`font-weight: 300;`;

const Card = props => (
  <CardSt>
    <Img src={props.src} alt={props.name} />
    <Info>
      ${props.price}
      <Span> {props.name}</Span>
    </Info>
    <Rating>
      <Stars />
      <RatingInfo>{props.rating} reviews</RatingInfo>
    </Rating>
  </CardSt>
);

export default () => {
  return (
    <Experiences>
      <SectionHead>
        <H1>Experiences</H1>
        <Link href="/experiences-all">
          See all <Arrow />
        </Link>
      </SectionHead>
      <Cards>
        <Card
          src={forestTherapy}
          name="Forest therapy"
          price={29}
          rating={44}
        />
        <Card
          src={whaleWatching}
          name="Whale watching"
          price={69}
          rating={46}
        />
        <Card
          src={mountain}
          name="Table Mountain Summit, Cable Car Down"
          price={69}
          rating={44}
        />
        <Card src={salsaNight} name="Salsa night" price={50} rating={44} />
        <Scroll />
      </Cards>
    </Experiences>
  );
};
