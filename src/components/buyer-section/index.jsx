import React, { Component } from "react";
import Header from "./header";
import Table from "../common/table";
import { propertyTypes } from "../../utility/common";
import { getBuyersProperties } from "../../services/adminServices";
import { getTableHeader } from "../../utility/tableHeaders";
import PropertySelect from "../dashboard/propertySelect";
class BuyerSection extends Component {
  state = {
    propertyList: [],
    filterPropertyList: [],
    currentSelectProperty: "pg",
    tableKeys: [],
    propertyTypes
  };
  componentDidMount() {
    this.propertiesList();
    // loadInit();
  }
  propertiesList = async () => {
    const data = {};
    const propertyList = await getBuyersProperties(data);
    this.setState({ propertyList });
    this.onFilterProperty(this.state.currentSelectProperty);
  };
  onFilterProperty = type => {
    const filterPropertyList = this.state.propertyList.filter(
      item => item.Property === type
    );
    let tableKeys = getTableHeader(type).filter(
      item =>
        item !== "_id" &&
        item !== "MarkAsRead" &&
        item !== "Publish" &&
        item !== "ShowAtHome"
    );
    tableKeys = ["BName", "BEmail", "BMobile", ...tableKeys];
    this.setState({
      tableKeys,
      filterPropertyList,
      currentSelectProperty: type
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* Main content */}
        <section className="content">
          <Header />
          {/* <SmallBoxes /> */}
          <PropertySelect
            propertyTypes={this.state.propertyTypes}
            onFilterProperty={this.onFilterProperty}
          />
          <Table
            tableTitle={"All Buyer Properties Requests"}
            tableKeys={this.state.tableKeys}
            filterPropertyList={this.state.filterPropertyList}
            onPublish={this.onPublish}
            onShowAtHome={this.onShowAtHome}
            onMarkAsRead={this.onMarkAsRead}
          />
          {/* <Container /> */}
        </section>
        {/* /.content */}
      </React.Fragment>
    );
  }
}
export default BuyerSection;
