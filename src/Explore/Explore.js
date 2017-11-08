import React from "react";
import "../fonts/fonts.css";
import styled from "styled-components";

const Explore = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-top: 48px;
  width: 964px;
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 600;
  line-height: 24px;
`;

const H1 = styled.h1`line-height: 34px;`;

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 310px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-sizing: border-box;
  border-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 96px;
  height: 72px;
  background-color: rgba(255, 90, 95, 1);
`;

const CardText = styled.p`
  width: 189px;
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
          <Img alt="Homes pic" />
          <CardText>Homes</CardText>
        </Card>
        <Card>
          <Img alt="Experiences pic" />
          <CardText>Experiences</CardText>
        </Card>
        <Card>
          <Img alt="Restaraunts pic" />
          <CardText>Restaraunts</CardText>
        </Card>
      </Cards>
    </Explore>
  );
};
