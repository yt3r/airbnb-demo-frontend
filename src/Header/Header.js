import React from "react";
import "../fonts/fonts.css";
import logo from "./Logo.png";
import search from "./Search.png";
import styled from "styled-components";

const Header = styled.header`
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 80px;
  font-family: "Circular", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  margin-left: auto;
  margin-right: auto;
  width: 964px;
`;

const Logo = styled.img`
  width: 30px;
  height: 32px;
`;

const Input = styled.input`
  background: url(${search}) no-repeat 16px center;
  padding-left: 53px;
  border-radius: 4px;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  box-sizing: border-box;
  font-size: 16px;
  line-height: 24px;
  width: 40%;
  margin-left: 20px;
  height: 48px;
  font-family: inherit;
`;

const Link = styled.a`
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  color: rgba(56, 56, 56, 1);
  padding: 0 8px;
`;

const Nav = styled.nav`margin-left: auto;`;

export default () => {
  return (
    <Header>
      <Logo src={logo} alt="Airbnb logo" />

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
