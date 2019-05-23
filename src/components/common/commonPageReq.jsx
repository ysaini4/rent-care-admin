import React, { Component } from "react";
import { getPropertiesReq } from "../../services/adminServices";
import { getTableHeader } from "../../utility/tableHeaders";
import Header from "./Header";
import Table from "./table";
import { firstCharCapital, filterTableData } from "../../utility/common";
import {
  updatePropertyReq,
  deletePropertyReq
} from "../../services/adminServices";

class CommonPage extends Component {
  state = {
    propertyList: [],
    filterPropertyList: [],
    currentSelectProperty: "0",
    tableKeys: [],
    searchTextValue: ""
  };
  componentDidMount() {
    const { type } = this.props.pType;
    this.setState({ currentSelectProperty: this.props.pType.type });
    this.propertiesList({ Property: this.props.pType.type });
    this.tableHeader(type);
  }
  propertiesList = async data => {
    const propertyList = await getPropertiesReq(data);
    this.setState({ propertyList, filterPropertyList: propertyList });
    this.handleSearch(
      this.state.searchTextValue + " " + this.state.currentSelectProperty
    );
  };
  tableHeader = async type => {
    let tableKeys = await getTableHeader(type);
    tableKeys = tableKeys.filter(
      item =>
        item !== "_id" &&
        item !== "Image" &&
        item !== "Publish" &&
        item !== "ShowAtHome"
    );
    if (type === "corporate") {
      tableKeys = [
        "Company Name",
        "Reference Name",
        "Designation",
        ...tableKeys
      ];
    }
    this.setState({ tableKeys });
  };
  onFilterProperty = type => {
    const filterPropertyList = this.state.propertyList.filter(
      item => item.Property === type
    );
    this.setState({
      filterPropertyList,
      currentSelectProperty: type
    });
  };

  onSearch = async value => {
    this.setState({ searchTextValue: value });
    this.handleSearch(value);
  };
  handleSearch = async value => {
    const { propertyList, tableKeys } = this.state;
    const filterPropertyList = filterTableData(tableKeys, propertyList, value);
    this.setState({ filterPropertyList });
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
            updateProperty={updatePropertyReq}
            deleteProperty={deletePropertyReq}
            onSearch={this.onSearch}
            searchTextValue={this.state.searchTextValue}
            propertiesList={this.propertiesList}
          />
        </section>
        {/* /.content */}
      </React.Fragment>
    );
  }
}

export default CommonPage;
