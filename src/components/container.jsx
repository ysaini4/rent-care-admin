import React from "react";
import DashBoard from "./dashboard";
import { Route, Redirect, Switch } from "react-router-dom";
import NotFound from "./notFound";
import BuyerSection from "./buyer-section";
import CommonPage from "./common/commonPage";
import { propertyTypes } from "../utility/common";
const Container = () => {
  return (
    <React.Fragment>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        <Switch>
          <Route path="/" component={DashBoard} exact />
          {propertyTypes
            .filter(item => item.id !== 0)
            .map(item => {
              return (
                <Route
                  path={"/" + item.type}
                  key={item.id}
                  render={props => <CommonPage pType={item} {...props} />}
                />
              );
            })}
          <Route path="/buyer" component={BuyerSection} />
          <Route path="/not-found" component={NotFound} />

          <Redirect to="/not-found" />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default Container;
