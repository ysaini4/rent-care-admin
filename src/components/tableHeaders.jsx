import React, { Component } from "react";
import Header from "./common/Header";
import { headers, updateHeader } from "../services/adminServices";

class TableHeaders extends Component {
  state = { tableHeaders: [] };
  componentDidMount() {
    this.getSetHeaders();
  }
  getSetHeaders = async () => {
    const res = await headers();
    const tableHeaders = Object.entries(res.headers).filter(
      item => item[0] !== "_id" && item[0] !== "topId" && item[0] !== "__v"
    );
    this.setState({ tableHeaders });
  };
  renderTableCol = colItem => {
    let colElement;
    let btnClass, iClass;
    if (colItem[1]) {
      btnClass = "bg-green";
      iClass = "fa-check-circle";
    } else {
      btnClass = "bg-red";
      iClass = "fa-times-circle";
    }
    colElement = (
      <button
        className={`btn btn-sm ${btnClass}`}
        onClick={() => this.updateTableHeader(colItem)}
      >
        <i className={`fa ${iClass}`} />
      </button>
    );
    return colElement;
  };
  updateTableHeader = async colItem => {
    let key = colItem[0];
    let data = { condation: { topId: 1 }, updateData: { [key]: !colItem[1] } };
    await updateHeader(data);
    await this.getSetHeaders();
  };
  render() {
    const { tableHeaders } = this.state;
    return (
      <React.Fragment>
        {/* Main content */}
        <section className="content">
          <Header
            title="Table Headers"
            subTitle="Manage Table headers for users"
          />

          {/* /.box-header */}
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-body table-responsive">
                  <table
                    id="xx"
                    className="table table-hover  table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        {tableHeaders.map(item => {
                          return <th key={item[0]}>{item[0]}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {tableHeaders.map(item => {
                          return (
                            <td
                              key={item[0]}
                              style={{
                                backgroundColor: "rgb(194, 194, 194)"
                              }}
                            >
                              {this.renderTableCol(item)}
                            </td>
                          );
                        })}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /.box-body */}
      </React.Fragment>
    );
  }
}

export default TableHeaders;
