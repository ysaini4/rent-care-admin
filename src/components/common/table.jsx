import React, { Component } from "react";
import ImageModal from "./imageModal";
import ConfirmModal from "./confirmModal";
class Table extends Component {
  state = { currentImage: "", deleteId: "" };
  renderTableCol = (col, tableRow) => {
    const { onPublish, onShowAtHome, onMarkAsRead } = this.props;
    let colElement;
    if (col === "Publish") {
      if (!tableRow[col]) {
        colElement = (
          <button
            className="btn btn-sm bg-red"
            onClick={() => onPublish(tableRow._id, !tableRow[col])}
          >
            <i className="fa  fa-times-circle" />
          </button>
        );
      } else {
        colElement = (
          <button
            className="btn btn-sm bg-green"
            onClick={() => onPublish(tableRow._id, !tableRow[col])}
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
            onClick={() => onShowAtHome(tableRow._id, !tableRow[col])}
          >
            <i className="fa fa-times-circle" />
          </button>
        );
      } else {
        colElement = (
          <button
            className="btn btn-sm bg-green"
            onClick={() => onShowAtHome(tableRow._id, !tableRow[col])}
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
            onClick={() => onMarkAsRead(tableRow._id)}
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
    const { tableTitle, tableKeys, filterPropertyList, onDelete } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-xs-12">
            <div className="box">
              <div className="box-header">
                <h3 className="box-title">{tableTitle}</h3>
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
        <ConfirmModal onDelete={onDelete} deleteId={this.state.deleteId} />
      </React.Fragment>
    );
  }
}

export default Table;
