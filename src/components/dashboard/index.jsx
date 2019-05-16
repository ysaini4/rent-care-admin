import React, { Component } from "react";
import SmallBoxes from "./smallBoxes";
import { getProperties, updateProperty } from "../../services/adminServices";
import { propertyTypes } from "../../utility/common";
import { getTableHeader } from "../../utility/tableHeaders";
import Header from "../common/Header";
import PropertySelect from "./propertySelect";
import Table from "../common/table";

class DashBoard extends Component {
  state = {
    propertyList: [],
    filterPropertyList: [],
    currentSelectProperty: "0",
    tableKeys: [],
    propertyTypes
  };

  componentDidMount() {
    this.propertiesList();
  }
  propertiesList = async () => {
    const data = { MarkAsRead: false };
    const propertyList = await getProperties(data);
    this.setState({ propertyList });
    this.onFilterProperty(this.state.currentSelectProperty);
  };
  onFilterProperty = type => {
    const filterPropertyList = this.state.propertyList.filter(
      item => item.Property === type
    );
    const tableKeys = getTableHeader(type).filter(item => item !== "_id");
    this.setState({
      tableKeys,
      filterPropertyList,
      currentSelectProperty: type
    });
  };
  onMarkAsRead = async pId => {
    const data = { condation: { _id: pId }, updateData: { MarkAsRead: true } };
    await updateProperty(data);
    this.propertiesList();
  };
  onPublish = async (pId, value) => {
    const data = { condation: { _id: pId }, updateData: { Publish: value } };
    await updateProperty(data);
    this.propertiesList();
  };
  onShowAtHome = async (pId, value) => {
    const data = { condation: { _id: pId }, updateData: { ShowAtHome: value } };
    await updateProperty(data);
    this.propertiesList();
  };
  render() {
    return (
      <React.Fragment>
        {/* Main content */}
        <section className="content">
          <Header title="DashBoard" subTitle="Newly added Properties" />
          <SmallBoxes propertyList={this.state.propertyList} />
          <PropertySelect
            propertyTypes={this.state.propertyTypes}
            onFilterProperty={this.onFilterProperty}
          />
          <Table
            tableTitle={"Newly Added Properties."}
            tableKeys={this.state.tableKeys}
            filterPropertyList={this.state.filterPropertyList}
            onPublish={this.onPublish}
            onShowAtHome={this.onShowAtHome}
            onMarkAsRead={this.onMarkAsRead}
          />
        </section>
        {/* /.content */}
      </React.Fragment>
    );
  }
}

export default DashBoard;
