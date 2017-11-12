import React from "react";
import "../fonts/fonts.css";
import logo from "./airbnbLogo.svg";
import search from "./search.svg";
import styled from "styled-components";
import { mediaMin } from "../styled";
import arrowDown from "../arrowDown.svg";

const Header = styled.header.attrs({
  className: "container"
})`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 8px;
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
`;

const Logo = styled.img`
  width: 30px;
  height: 32px;
`;

const Input = styled.input.attrs({
  className: "col-xs-10 col-md-7 col-xl-5"
})`
  background: url(${search}) no-repeat 16px center;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  margin-left: 20px;
  height: 48px;
  font-family: inherit;
  ::placeholder {
    padding-left: 40px;
  }
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: rgba(56, 56, 56, 1);
  padding: 0 8px;
`;

const Nav = styled.nav`
  display: none;
  ${mediaMin.lg`
    display: flex;
    margin-left: auto;
  `};
`;

const NavImg = styled.img.attrs({
  src: arrowDown,
  alt: "Navigation"
})`
  display: flex;
  padding-left: 8px;
  ${mediaMin.lg`display:none;`};
`;

export default () => {
  return (
    <Header>
      <Logo src={logo} alt="Airbnb logo" />
      <NavImg />
      <Input type="text" placeholder="Try &quot;Miami&quot;" />

      <Nav>
        <Link href="/become-a-host">Become a host</Link>
        <Link href="/help">Help</Link>
        <Link href="/sign-up">Sign Up</Link>
        <Link href="/log-in">Log In</Link>
      </Nav>
    </Header>
  );
};
