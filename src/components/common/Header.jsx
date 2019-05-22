import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>
          {title}
          <small>{subTitle}</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <Link to="#">
              <i className="fa fa-dashboard" /> Home
            </Link>
          </li>
          <li>
            <Link to="#">{title}</Link>
          </li>
        </ol>
      </section>
    </React.Fragment>
  );
};

export default Header;
