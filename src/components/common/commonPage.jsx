import React, { Component } from "react";
import {
  getProperties,
  updateProperty,
  deleteProperty
} from "../../services/adminServices";
import { getTableHeader } from "../../utility/tableHeaders";
import Header from "./Header";
import Table from "./table";
import { firstCharCapital } from "../../utility/common";

class CommonPage extends Component {
  state = {
    propertyList: [],
    filterPropertyList: [],
    currentSelectProperty: "0",
    tableKeys: []
  };
  componentDidMount() {
    this.setState({ currentSelectProperty: this.props.pType.type });
    this.propertiesList();
  }
  propertiesList = async () => {
    const data = {};
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
  onDelete = async pId => {
    const data = { _id: pId };
    await deleteProperty(data);
    this.propertiesList();
  };
  render() {
    return (
      <React.Fragment>
        {/* Main content */}
        <section className="content">
          <Header
            title={this.props.pType.lable}
            subTitle={this.props.pType.lable + " List"}
          />
          <Table
            tableTitle={
              "All " + firstCharCapital(this.props.pType.type) + " Properties"
            }
            tableKeys={this.state.tableKeys}
            filterPropertyList={this.state.filterPropertyList}
            onPublish={this.onPublish}
            onShowAtHome={this.onShowAtHome}
            onMarkAsRead={this.onMarkAsRead}
            onDelete={this.onDelete}
          />
        </section>
        {/* /.content */}
      </React.Fragment>
    );
  }
}

export default CommonPage;
