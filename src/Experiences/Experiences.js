import React from "react";
import styled from "styled-components";
import forestTherapy from "./forestTherapy.png";
import whaleWatching from "./whaleWatching.png";
import mountain from "./mountain.png";
import salsaNight from "./salsaNight.png";

import {
  SectionContainerBase,
  CardBase,
  H1,
  Cards,
  Stars,
  Rating,
  Arrow,
  Link,
  Info,
  RatingInfo,
  SectionHead,
  Scroll
} from "../styled";

const Experiences = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = CardBase.extend`
  flex-basis: 25%;
  padding-right: 8px;
  padding-left: 8px;
`;

const Img = styled.img`width: 100%;`;

const Span = styled.span`font-weight: 300;`;

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
        <Card>
          <Img src={forestTherapy} alt="Forest therapy pic" />
          <Info>
            $29
            <Span> Forest therapy</Span>
          </Info>
          <Rating>
            <Stars />
            <RatingInfo>44 reviews</RatingInfo>
          </Rating>
        </Card>
        <Card>
          <Img src={whaleWatching} alt="Whale watching pic" />
          <Info>
            $69
            <Span> Whale watching</Span>
          </Info>
          <Rating>
            <Stars />
            <RatingInfo>46 reviews</RatingInfo>
          </Rating>
        </Card>
        <Card>
          <Img src={mountain} alt="Mountain pic" />
          <Info>
            $69
            <Span> Table Mountain Summit, Cable Car Down</Span>
          </Info>
          <Rating>
            <Stars />
            <RatingInfo>44 reviews</RatingInfo>
          </Rating>
        </Card>
        <Card>
          <Img src={salsaNight} alt="Salsa night pic" />
          <Info>
            $50
            <Span> Salsa night</Span>
          </Info>
          <Rating>
            <Stars />
            <RatingInfo>44 reviews</RatingInfo>
          </Rating>
        </Card>
        <Scroll />
      </Cards>
    </Experiences>
  );
};
