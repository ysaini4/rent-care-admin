import React, { Component } from "react";
import SmallBoxes from "./smallBoxes";
import { getProperties } from "../../services/adminServices";
import { propertyTypes, filterTableData } from "../../utility/common";
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
    propertyTypes,
    searchTextValue: ""
  };

  componentDidMount() {
    this.propertiesList();
  }
  propertiesList = async () => {
    const data = { MarkAsRead: false };
    const propertyList = await getProperties(data);
    this.setState({ propertyList });
    this.handleSearch(
      this.state.searchTextValue + " " + this.state.currentSelectProperty
    );
  };
  onFilterProperty = async type => {
    const filterPropertyList = this.state.propertyList.filter(
      item => item.Property === type
    );
    let tableKeys = await getTableHeader(type);
    tableKeys = tableKeys.filter(item => item !== "_id");
    this.setState({
      tableKeys,
      filterPropertyList,
      currentSelectProperty: type,
      searchTextValue: ""
    });
  };
  onSearch = async value => {
    this.setState({ searchTextValue: value });
    let searchVal = value + " " + this.state.currentSelectProperty;
    this.handleSearch(searchVal);
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

export default DashBoard;
