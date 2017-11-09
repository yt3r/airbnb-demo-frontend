import React from "react";
import styled from "styled-components";
import {
  SectionContainerBase,
  H1,
  Cards,
  Arrow,
  Link,
  SectionHead
} from "../styled";
import chumley from "./chumley.png";
import hanjan from "./hanjan.png";
import primeMeats from "./prime-meats.png";
import seaprice from "./seaprice.png";

const Popular = SectionContainerBase.extend`
  flex-direction: column;
  justify-content: space-between;
`;

const Card = styled.div`
  flex-basis: 25%;
  box-sizing: border-box;
  padding-right: 8px;
  padding-left: 8px;
`;

const Img = styled.img`width: 100%;`;

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
          <p>SPEAKEASY</p>
          <p>Chumley's</p>
          <p>About $60 per person</p>
        </Card>
        <Card>
          <Img src={hanjan} alt="Hanjan" />
          <p>KOREAN GASTROPUB</p>
          <p>Hanjan</p>
          <p>About $50 per person</p>
        </Card>
        <Card>
          <Img src={primeMeats} alt="Prime Meats" />
          <p>GERMAN AMERICAN</p>
          <p>Prime Meats</p>
          <p>About $55 per person</p>
        </Card>
        <Card>
          <Img src={seaprice} alt="Seaprice" />
          <p>FINE SEAFOOD</p>
          <p>Seaprice</p>
          <p>About $70 per person</p>
        </Card>
      </Cards>
    </Popular>
  );
};
