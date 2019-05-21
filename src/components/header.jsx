import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Header = props => {
  return (
    <header className="main-header">
      {/* Logo */}
      <Link to="index2.html" className="logo">
        {/* mini logo for sidebar mini 50x50 pixels */}
        <span className="logo-mini">
          <b>R</b>CA
        </span>
        {/* logo for regular state and mobile devices */}
        <span className="logo-lg">
          <b>Rent-</b>Care<small> Admin</small>
        </span>
      </Link>
      {/* Header Navbar: style can be found in header.less */}
      <nav className="navbar navbar-static-top">
        {/* Sidebar toggle button*/}
        <Link
          to="#"
          className="sidebar-toggle"
          data-toggle="push-menu"
          role="button"
        >
          <span className="sr-only">Toggle navigation</span>
        </Link>
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown user user-menu">
              <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                <img
                  src="dist/img/photo.jpg"
                  style={{ width: 30 }}
                  className="user-image"
                  alt="User"
                />
                <span className="hidden-xs">DVS</span>
              </Link>
              <ul className="dropdown-menu">
                {/* User image */}
                <li className="user-header">
                  <img
                    src="dist/img/photo.jpg"
                    style={{ width: 100 }}
                    className="img-circle"
                    alt="User"
                  />
                  <p>
                    Dharm Veer Singh - Admin
                    {/* <small>Member since Nov. 2012</small> */}
                  </p>
                </li>
                {/* Menu Body */}
                {/* <li className="user-body">
                  <div className="row">
                    <div className="col-xs-4 text-center">
                      <Link to="#">Followers</Link>
                    </div>
                    <div className="col-xs-4 text-center">
                      <Link to="#">Sales</Link>
                    </div>
                    <div className="col-xs-4 text-center">
                      <Link to="#">Friends</Link>
                    </div>
                  </div>
                  
                </li> */}
                {/* Menu Footer*/}
                <li className="user-footer">
                  {/* <div className="pull-left">
                    <Link to="#" className="btn btn-default btn-flat">
                      Profile
                    </Link>
                  </div> */}
                  <div className="pull-right">
                    <Link
                      to="/login"
                      className="btn btn-default btn-flat"
                      onClick={() => {
                        localStorage.removeItem("rc-x-auth-token");
                        axios.defaults.headers.common["x-auth-token"] = "";
                      }}
                    >
                      Sign out
                    </Link>
                  </div>
                </li>
              </ul>
            </li>
            {/* Control Sidebar Toggle Button */}
            <li>
              <Link to="#" data-toggle="control-sidebar">
                <i className="fa fa-gears" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
