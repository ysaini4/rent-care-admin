import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./notFound";
import { propertyTypes } from "../utility/common";
import Login from "./login";
import Wrap from "../utility/wrapper";
const Container = () => {
  return (
    <React.Fragment>
      {/* Content Wrapper. Contains page content */}
      <Switch>
        <Route
          path="/"
          render={props => <Wrap component="DashBoard" {...props} />}
          exact
        />
        <Route path="/login" component={Login} exact />
        {propertyTypes
          .filter(item => item.id !== 0)
          .map(item => {
            return (
              <Route
                path={"/" + item.type}
                key={item.id}
                render={props => (
                  <Wrap pType={item} {...props} component="CommonPage" />
                )}
              />
            );
          })}
        <Route
          path="/buyer"
          render={props => <Wrap {...props} component="BuyerSection" />}
        />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
};

export default Container;
