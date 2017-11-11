import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header";
import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";
import Footer from "./Footer";
import "./App.css";

const Main = styled.main``;

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          <Explore />
          <Experiences />
          <Homes />
          <Popular />
          <Featured />
        </Main>
        <Footer />
      </div>
    );
  }
}

export default App;
