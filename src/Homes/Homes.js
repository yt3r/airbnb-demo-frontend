import React from "react";
import styled from "styled-components";
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
  Description,
  RatingInfo,
  SectionHead,
  Scroll,
  ScrollArrow
} from "../styled";
import home01 from "./home-1.png";
import home02 from "./home-2.png";
import home03 from "./home-3.png";

const Homes = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = CardBase.extend`
  flex-basis: 33.3333%;
  padding-right: 8px;
  padding-left: 8px;
`;

const Img = styled.img`width: 100%;`;

export default () => {
  return (
    <Homes>
      <SectionHead>
        <H1>Homes</H1>
        <Link href="/homes-all">
          See all <Arrow />
        </Link>
      </SectionHead>
      <Cards>
        <Card>
          <Img src={home01} alt="home img" />
          <Info>$89 La Salentina, see, nature & relax</Info>
          <Description>Entire house &middot; 9 beds</Description>
          <Rating>
            <Stars />
            <RatingInfo>97 &middot; Superhost</RatingInfo>
          </Rating>
        </Card>
        <Card>
          <Img src={home02} alt="home img" />
          <Info>$89 Your private 3 bedr.</Info>
          <Description>Entire house &middot; 5 beds</Description>
          <Rating>
            <Stars />
            <RatingInfo>161 &middot; Superhost</RatingInfo>
          </Rating>
        </Card>
        <Card>
          <Img src={home03} alt="home img" />
          <Info>$200 Dreamy Tropical Tree House</Info>
          <Description>Entire treehouse &middot; 1 bed</Description>
          <Rating>
            <Stars />
            <RatingInfo>364 &middot; Superhost</RatingInfo>
          </Rating>
        </Card>
        <Scroll />
      </Cards>
    </Homes>
  );
};
