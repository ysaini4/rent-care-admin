import React, { Component } from "react";
import "./App.css";
import ControlledSideBar from "./components/controlledSideBar";
import Container from "./components/container";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <Container />
        <ControlledSideBar />
      </React.Fragment>
    );
  }
}

export default App;
