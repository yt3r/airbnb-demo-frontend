import React from "react";
import styled from "styled-components";
import {
  SectionContainerBase,
  CardBase,
  H1,
  Img,
  Cards,
  Stars,
  Rating,
  Arrow,
  Link,
  Info,
  Description,
  RatingInfo,
  SectionHead,
  Scroll
} from "../styled";
import home01 from "./home-1.png";
import home02 from "./home-2.png";
import home03 from "./home-3.png";

const Homes = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = CardBase.extend`flex-basis: 33.3333%;`;

const HomesCard = props => (
  <Card>
    <Img src={props.src} alt={props.name} />
    <Info>
      ${props.price} {props.name}
    </Info>
    <Description>
      {props.type} &middot; {props.beds} {props.beds > 1 ? "beds" : "bed"}
    </Description>
    <Rating>
      <Stars />
      <RatingInfo>
        {props.rating} &middot; {props.status}
      </RatingInfo>
    </Rating>
  </Card>
);

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
        <HomesCard
          src={home01}
          price={89}
          name="La Salentina, see, nature & relax"
          type="Entire house"
          beds={9}
          rating={97}
          status="Superhost"
        />
        <HomesCard
          src={home02}
          price={89}
          name="Your private 3 bedr."
          type="Entire house"
          beds={5}
          rating={161}
          status="Superhost"
        />
        <HomesCard
          src={home03}
          price={200}
          name="Dreamy Tropical Tree House"
          type="Entire treehouse"
          beds={1}
          rating={364}
          status="Superhost"
        />
        <Scroll />
      </Cards>
    </Homes>
  );
};
