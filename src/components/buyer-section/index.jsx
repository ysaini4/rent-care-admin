import React, { Component } from "react";
import Header from "./header";
import SmallBoxes from "./smallBoxes";
import Container from "./container";
import { loadInit } from "../../utility/loadInit";
class BuyerSection extends Component {
  componentDidMount() {
    loadInit();
  }
  render() {
    return (
      <React.Fragment>
        {/* Main content */}
        <section className="content">
          <Header />
          <SmallBoxes />
          <Container />
        </section>
        {/* /.content */}
      </React.Fragment>
    );
  }
}
export default BuyerSection;
