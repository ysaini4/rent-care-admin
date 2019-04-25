import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MainSideBar from "./components/mainSideBar";
import ControlledSideBar from "./components/controlledSideBar";
import Container from "./components/container";

function App() {
  return (
    <React.Fragment>
      <Header />
      <MainSideBar />
      <Container />
      <Footer />
      <ControlledSideBar />
    </React.Fragment>
  );
}

export default App;
