import React from "react";
const ControlledSideBar = () => {
  return (
    <React.Fragment>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Create the tabs */}
        <ul className="nav nav-tabs nav-justified control-sidebar-tabs" />
        {/* Tab panes */}
        <div className="tab-content">
          {/* Home tab content */}
          <div className="tab-pane" id="control-sidebar-home-tab" />
          {/* /.tab-pane */}
        </div>
      </aside>
      {/* /.control-sidebar */}
      {/* Add the sidebar's background. This div must be placed
               immediately after the control sidebar */}
      <div className="control-sidebar-bg" />
    </React.Fragment>
  );
};

export default ControlledSideBar;
