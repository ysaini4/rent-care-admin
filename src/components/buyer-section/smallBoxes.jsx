import React from "react";
const SmallBoxes = () => {
  let smallBoxData = [
    {
      label: "Corporate",
      count: 150,
      bgClass: "bg-aqua",
      iconClass: "ion-ios-grid-view"
    },
    {
      label: "Commercial",
      count: 150,
      bgClass: "bg-green",
      iconClass: "ion-ios-briefcase"
    },
    {
      label: "Residential",
      count: 150,
      bgClass: "bg-red",
      iconClass: "ion-home"
    },
    {
      label: "PG/Hostel",
      count: 150,
      bgClass: "bg-blue",
      iconClass: "ion-ios-football"
    },
    {
      label: "Hotel",
      count: 150,
      bgClass: "bg-yellow",
      iconClass: "ion-laptop"
    },
    {
      label: "Restaurant",
      count: 150,
      bgClass: "bg-purple",
      iconClass: "ion-ios-wineglass"
    }
  ];
  return (
    <React.Fragment>
      {/* Small boxes (Stat box) */}

      <div className="row">
        {smallBoxData.map(item => {
          return (
            <div className="col-lg-2 col-xs-6" key={item.label}>
              {/* small box */}
              <div className={"small-box " + item.bgClass}>
                <div className="inner">
                  <h3>{item.count}</h3>
                  <p>{item.label}</p>
                </div>
                <div className="icon">
                  <i className={"ion " + item.iconClass} />
                </div>
                <span className="small-box-footer">
                  {/* More info <i className="fa fa-arrow-circle-right" /> */}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default SmallBoxes;
