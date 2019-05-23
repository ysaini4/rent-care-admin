import React, { Component } from "react";
import ImageModal from "./imageModal";
import ConfirmModal from "./confirmModal";
class Table extends Component {
  state = { currentImage: "", deleteId: "" };
  onMarkAsRead = async pId => {
    const data = { condation: { _id: pId }, updateData: { MarkAsRead: true } };
    await this.props.updateProperty(data);
    this.props.propertiesList();
  };
  onPublish = async (pId, value) => {
    const data = { condation: { _id: pId }, updateData: { Publish: value } };
    await this.props.updateProperty(data);
    this.props.propertiesList();
  };
  onShowAtHome = async (pId, value) => {
    const data = { condation: { _id: pId }, updateData: { ShowAtHome: value } };
    await this.props.updateProperty(data);
    this.props.propertiesList();
  };
  onDelete = async pId => {
    const data = { _id: pId };
    await this.props.deleteProperty(data);
    this.props.propertiesList();
  };
  renderTableCol = (col, tableRow) => {
    let colElement;
    if (col === "Publish") {
      if (!tableRow[col]) {
        colElement = (
          <button
            className="btn btn-sm bg-red"
            onClick={() => this.onPublish(tableRow._id, !tableRow[col])}
          >
            <i className="fa  fa-times-circle" />
          </button>
        );
      } else {
        colElement = (
          <button
            className="btn btn-sm bg-green"
            onClick={() => this.onPublish(tableRow._id, !tableRow[col])}
          >
            <i className="fa  fa-check-circle" />
          </button>
        );
      }
    } else if (col === "ShowAtHome") {
      if (!tableRow[col]) {
        colElement = (
          <button
            className="btn btn-sm bg-red"
            onClick={() => this.onShowAtHome(tableRow._id, !tableRow[col])}
          >
            <i className="fa fa-times-circle" />
          </button>
        );
      } else {
        colElement = (
          <button
            className="btn btn-sm bg-green"
            onClick={() => this.onShowAtHome(tableRow._id, !tableRow[col])}
          >
            <i className="fa  fa-check-circle" />
          </button>
        );
      }
    } else if (col === "MarkAsRead") {
      if (!tableRow[col]) {
        colElement = (
          <button
            className="btn btn-sm bg-red"
            onClick={() => this.onMarkAsRead(tableRow._id)}
          >
            <i className="fa  fa-times-circle" />
          </button>
        );
      }
    } else if (col === "Delete") {
      if (!tableRow[col]) {
        colElement = (
          <button
            className="btn btn-sm bg-red"
            data-toggle="modal"
            data-target="#modal-confirm"
            onClick={() => {
              this.setState({ deleteId: tableRow._id });
            }}
          >
            <i className="fa fa-trash" />
          </button>
        );
      }
    } else if (col === "Image") {
      colElement = (
        <React.Fragment>
          <img
            src={tableRow[col]}
            alt="Property"
            style={{ width: "50px" }}
            data-toggle="modal"
            data-target="#modal-default"
            onClick={() => {
              this.setState({ currentImage: tableRow[col] });
            }}
          />
        </React.Fragment>
      );
    } else colElement = tableRow[col];
    return colElement;
  };
  render() {
    const {
      tableTitle,
      tableKeys,
      filterPropertyList,
      onSearch,
      searchTextValue
    } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">{tableTitle}</h3>
                <div className="row" style={{ marginTop: 10 }}>
                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      onChange={({ currentTarget: input }) => {
                        onSearch(input.value);
                      }}
                      value={searchTextValue}
                    />
                  </div>
                </div>
              </div>

              {/* /.box-header */}
              <div className="box-body table-responsive">
                <table
                  id="xx"
                  className="table table-hover  table-bordered table-striped"
                >
                  <thead>
                    <tr>
                      {tableKeys.map(item => {
                        return <th key={item}>{item}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {filterPropertyList.map(tableRow => {
                      return (
                        <tr key={tableRow._id}>
                          {tableKeys.map(col => {
                            if (tableRow.MarkAsRead)
                              return (
                                <td key={tableRow._id + col}>
                                  {this.renderTableCol(col, tableRow)}
                                </td>
                              );
                            return (
                              <td
                                key={tableRow._id + col}
                                style={{
                                  backgroundColor: "rgb(194, 194, 194)"
                                }}
                              >
                                {this.renderTableCol(col, tableRow)}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {/* /.box-body */}
            </div>
            {/* /.box */}
          </div>
          {/* /.col */}
        </div>
        <ImageModal imageSrc={this.state.currentImage} />
        <ConfirmModal onDelete={this.onDelete} deleteId={this.state.deleteId} />
      </React.Fragment>
    );
  }
}

export default Table;
