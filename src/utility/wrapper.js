import React, { Component } from "react";
import Header from "../components/header";
import MainSideBar from "../components/mainSideBar";
import Footer from "../components/footer";
import DashBoard from "../components/dashboard";
import CommonPage from "../components/common/commonPage";
import BuyerSection from "../components/buyer-section";
import { validateUser } from "../services/adminServices";
class Wrap extends Component {
  state = {};
  componentDidMount() {
    global
      .$(".content-wrapper")
      .css("height", global.$(window).innerHeight() - 101);
  }
  async componentWillMount() {
    try {
      console.log("on route change");
      const res = await validateUser();
      if (!res.status) {
        this.props.history.replace("/login");
      }
    } catch (err) {
      this.props.history.replace("/login");

      console.log(err);
    }
  }
  render() {
    const { component, pType } = this.props;
    let container;
    if (component === "DashBoard") container = <DashBoard />;
    if (component === "CommonPage") container = <CommonPage pType={pType} />;
    if (component === "BuyerSection") container = <BuyerSection />;
    return (
      <React.Fragment>
        <Header />
        <MainSideBar />
        <div className="content-wrapper">{container}</div>
        <Footer />
        {/* <ControlledSideBar /> */}
      </React.Fragment>
    );
  }
}

export default Wrap;
