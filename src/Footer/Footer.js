import React from "react";
import styled from "styled-components";
import { SectionContainerBase, Dropdown } from "../styled";
import logo from "./logo.svg";
import fb from "./facebook.svg";
import twitter from "./twitter.svg";
import ig from "./instagram.svg";

const FooterBase = SectionContainerBase.withComponent("footer");
const Footer = FooterBase.extend`
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px -0.5px 0px rgba(72, 72, 72, 0.3);
`;

const Top = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  box-sizing: border-box;
  padding-top: 48px;
  padding-bottom: 48px;
`;

const Nav = styled.nav`
  display: flex;
  flex-basis: 25%;
  padding-left: 8px;
  padding-right: 8px;
  flex-direction: column;
  box-sizing: border-box;
`;

const Text = styled.p.attrs({
  weight: props => props.weight || 400
})`
  font-size: 15px;
  line-height: 18px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: ${props => props.weight};
`;

const H4 = Text.withComponent("h4");

const Link = Text.withComponent("a").extend`
  text-decoration: none;
  color: rgba(99, 99, 99, 1);
`;

const BottomLink = Link.extend`padding-left: 16px;`;

const Form = Nav.withComponent("form");

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
  align-content: center;
`;

const Logo = styled.img``;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Social = styled.img`padding-left: 12px;`;

const Links = Copyright.extend`justify-content: flex-end;`;

export default () => {
  return (
    <Footer>
      <Top>
        <Form>
          <Dropdown>
            <option>English</option>
            <option>Russian</option>
          </Dropdown>

          <Dropdown>
            <option>US dollar</option>
            <option>Russian ruble</option>
          </Dropdown>
        </Form>
        <Nav id="airbnb">
          <H4 weight={700}>Airbnb</H4>
          <Link href="/about-us">About us</Link>
          <Link href="/carrers">Carrers</Link>
          <Link href="/press">Press</Link>
          <Link href="/policies">Policies</Link>
          <Link href="/help">Help</Link>
          <Link href="/diversity-belonging">Diversity & Belonging</Link>
        </Nav>
        <Nav id="discover">
          <H4 weight={700}>Discover</H4>
          <Link href="/trust-safety">Trust & Safety</Link>
          <Link href="/travel-credit">Travel Credit</Link>
          <Link href="/gift-cards">Gift Cards</Link>
          <Link href="/airbnb-citizen">Airbnb Citizen</Link>
          <Link href="/business-travel">Business Travel</Link>
          <Link href="/guidebooks">Guidebooks</Link>
          <Link href="/airbnbmag">Airbnbmag</Link>
        </Nav>
        <Nav id="hosting">
          <H4 weight={700}>Hosting</H4>
          <Link href="/why-host">Why Host</Link>
          <Link href="/hospitality">Hospitaity</Link>
          <Link href="/responsible-hosting">Responsible Hosting</Link>
          <Link href="/community-center">Community Center</Link>
        </Nav>
      </Top>
      <Bottom>
        <Copyright>
          <Logo src={logo} alt="Airbnb logo" />
          <BottomLink>&#169; Airbnb Inc.</BottomLink>
        </Copyright>

        <Links>
          <BottomLink href="/terms">Terms</BottomLink>
          <BottomLink href="/privacy">Privacy</BottomLink>
          <BottomLink href="/site-map">Site map</BottomLink>
          <Link href="#">
            <Social src={fb} alt="Facebook" />
          </Link>
          <Link href="#">
            <Social src={twitter} alt="Twitter" />
          </Link>
          <Link href="#">
            <Social src={ig} alt="Instagram" />
          </Link>
        </Links>
      </Bottom>
    </Footer>
  );
};
