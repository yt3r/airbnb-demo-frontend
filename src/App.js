import React, { Component } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences";
import Homes from "./Homes/Homes";
import Popular from "./Popular/Popular";
import Featured from "./Featured/Featured";
import Footer from "./Footer/Footer";
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
