import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MainSideBar from "./components/mainSideBar";
import ControlledSideBar from "./components/controlledSideBar";
import Container from "./components/container";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Header />
      <MainSideBar />
      <Container />
      <Footer />
      <ControlledSideBar />
    </React.Fragment>
  );
}

export default App;
