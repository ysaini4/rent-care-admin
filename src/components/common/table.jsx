import React from "react";

const Table = ({
  tableTitle,
  tableKeys,
  filterPropertyList,
  onPublish,
  onShowAtHome,
  onMarkAsRead
}) => {
  const renderTableCol = (col, tableRow) => {
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
            <i className="fa  fa-times-circle" />
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
    } else if (col === "Image") {
      colElement = (
        <img src={tableRow[col]} alt="Property" style={{ width: "50px" }} />
      );
    } else colElement = tableRow[col];
    return colElement;
  };
  return (
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
                              {renderTableCol(col, tableRow)}
                            </td>
                          );
                        return (
                          <td
                            key={tableRow._id + col}
                            style={{
                              backgroundColor: "rgb(194, 194, 194)"
                            }}
                          >
                            {renderTableCol(col, tableRow)}
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
  );
};

export default Table;
