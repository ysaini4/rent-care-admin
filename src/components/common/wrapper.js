import React, { Component } from "react";
import jwtDecode from "jwt-decode";

import Header from "../header";
import MainSideBar from "../mainSideBar";
import Footer from "../footer";
import DashBoard from "../dashboard";
import CommonPage from "./commonPage";
import BuyerSection from "../buyer-section";
import TableHeaders from "../tableHeaders";

import { validateUser } from "../../services/adminServices";
class Wrap extends Component {
  state = { user: {} };
  componentDidMount() {
    global
      .$(".content-wrapper")
      .css("height", global.$(window).innerHeight() - 101);
  }
  async componentWillMount() {
    try {
      let token = localStorage.getItem("rc-x-auth-token");
      if (token) {
        const user = jwtDecode(token);
        this.setState({ user });
      }
      if (!token) {
        this.props.history.replace("/login");
        return;
      }
      const res = await validateUser();
      if (!res.status) {
        this.props.history.replace("/login");
      }
    } catch (err) {
      this.props.history.replace("/login");

      console.log(err, "token");
    }
  }
  render() {
    const { component, pType } = this.props;
    let container;
    if (component === "DashBoard") container = <DashBoard />;
    if (component === "CommonPage") container = <CommonPage pType={pType} />;
    if (component === "BuyerSection") container = <BuyerSection />;
    if (component === "TableHeaders") container = <TableHeaders />;
    return (
      <React.Fragment>
        <Header />
        <MainSideBar user={this.state.user} />
        <div className="content-wrapper">{container}</div>
        <Footer />
        {/* <ControlledSideBar /> */}
      </React.Fragment>
    );
  }
}

export default Wrap;
