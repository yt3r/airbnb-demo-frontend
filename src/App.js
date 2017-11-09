import React, { Component } from "react";
import Header from "./Header/Header";
import Explore from "./Explore/Explore";
import Experiences from "./Experiences/Experiences";
import Homes from "./Homes/Homes";
import Popular from "./Popular/Popular";
import Featured from "./Featured/Featured";
import Footer from "./Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <Explore />
        <Experiences />
        <Homes />
        <Popular />
        <Featured />
        <Footer />
      </main>
    );
  }
}

export default App;
