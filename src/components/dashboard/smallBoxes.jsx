import React from "react";
import { propertyTypes, firstCharCapital } from "../../utility/common";
const SmallBoxes = ({ propertyList }) => {
  let pCount = propertyList.reduce((pre, post) => {
    if (pre[post.Property]) pre[post.Property]++;
    else pre[post.Property] = 1;
    return pre;
  }, {});
  let smallBoxData = propertyTypes
    .filter(item => item.id !== 0)
    .map(item => {
      item.count = pCount[item.type];
      return item;
    });
  return (
    <React.Fragment>
      {/* Small boxes (Stat box) */}

      <div className="row">
        {smallBoxData.map(item => {
          return (
            <div className="col-lg-2 col-xs-6" key={item.id}>
              {/* small box */}
              <div className={"small-box " + item.bgClass}>
                <div className="inner">
                  <h3>{item.count}</h3>
                  <p>{firstCharCapital(item.type)}</p>
                </div>
                <div className="icon">
                  <i className={"ion " + item.iconClass} />
                </div>
                <span className="small-box-footer" />
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default SmallBoxes;
