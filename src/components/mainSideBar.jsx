import React from "react";
import { Link } from "react-router-dom";
import { propertyTypes, rPropertyTypes } from "../utility/common";

const MainSideBar = ({ user }) => {
  let tableHeaderSection = null;
  if (user.userType === "admin") {
    tableHeaderSection = (
      <li className="active">
        <Link to="/headers">
          <i className="fa fa-home" /> <span>Header Control</span>
          <span className="pull-right-container">
            {/* <i className="fa fa-angle-left pull-right" /> */}
          </span>
        </Link>
      </li>
    );
  }
  return (
    <React.Fragment>
      {/* Left side column. contains the logo and sidebar */}
      <aside className="main-sidebar">
        {/* sidebar: style can be found in sidebar.less */}
        <section className="sidebar">
          {/* Sidebar user panel */}
          <div className="user-panel">
            <div className="pull-left image">
              <img
                src="dist/img/photo.jpg"
                style={{ width: 160 }}
                className="img-circle"
                alt="User"
              />
            </div>
            <div className="pull-left info">
              <p>DharmVeer Singh</p>
              <Link to="#">
                <i className="fa fa-circle text-success" /> Online
              </Link>
            </div>
          </div>

          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active">
              <Link to="/">
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
                <span className="pull-right-container">
                  {/* <i className="fa fa-angle-left pull-right" /> */}
                </span>
              </Link>
            </li>
            <li className="active">
              <Link to="/buyer">
                <i className="fa fa-home" /> <span>Buyer Section</span>
                <span className="pull-right-container">
                  {/* <i className="fa fa-angle-left pull-right" /> */}
                </span>
              </Link>
            </li>
            {propertyTypes
              .filter(item => item.id !== 0)
              .map(item => {
                return (
                  <li className="active " key={item.id}>
                    <Link to={"/" + item.type}>
                      <i className={"ion " + item.iconClass} />
                      <span>{item.lable}</span>
                      <span className="pull-right-container">
                        {/* <i className="fa fa-angle-left pull-right" /> */}
                      </span>
                    </Link>
                  </li>
                );
              })}
            {rPropertyTypes
              .filter(item => item.id !== 0)
              .map(item => {
                return (
                  <li className="active " key={item.id}>
                    <Link to={"/" + item.url}>
                      <i className={"ion " + item.iconClass} />
                      <span>{item.lable}</span>
                      <span className="pull-right-container">
                        {/* <i className="fa fa-angle-left pull-right" /> */}
                      </span>
                    </Link>
                  </li>
                );
              })}
            {tableHeaderSection}
            {/* <ul className="treeview-menu">
                <li className="active">
                  <Link to="index.html">
                    <i className="fa fa-circle-o" /> Dashboard v1
                  </Link>
                </li>
                <li>
                  <Link to="index2.html">
                    <i className="fa fa-circle-o" /> Dashboard v2
                  </Link>
                </li>
              </ul> */}
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    </React.Fragment>
  );
};

export default MainSideBar;
