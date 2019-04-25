import React from "react";

const MainSideBar = () => {
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
                alt="User Image"
              />
            </div>
            <div className="pull-left info">
              <p>DharmVeer Singh</p>
              <a href="#">
                <i className="fa fa-circle text-success" /> Online
              </a>
            </div>
          </div>

          {/* sidebar menu: : style can be found in sidebar.less */}
          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <li className="active">
              <a href="/">
                <i className="fa fa-dashboard" /> <span>Dashboard</span>
                <span className="pull-right-container">
                  {/* <i className="fa fa-angle-left pull-right" /> */}
                </span>
              </a>
              {/* <ul className="treeview-menu">
                <li className="active">
                  <a href="index.html">
                    <i className="fa fa-circle-o" /> Dashboard v1
                  </a>
                </li>
                <li>
                  <a href="index2.html">
                    <i className="fa fa-circle-o" /> Dashboard v2
                  </a>
                </li>
              </ul> */}
            </li>
          </ul>
        </section>
        {/* /.sidebar */}
      </aside>
    </React.Fragment>
  );
};

export default MainSideBar;
