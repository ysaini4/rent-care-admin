import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      {/* Content Header (Page header) */}
      <section className="content-header">
        <h1>
          Buyer Section
          <small>Newly Requests For Buy and Rent</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <Link to="#">
              <i className="fa fa-dashboard" /> Home
            </Link>
          </li>
          <li>
            <Link to="#">Buyer Section</Link>
          </li>
        </ol>
      </section>
    </React.Fragment>
  );
};

export default Header;
