import React from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main>
        {props.children}
        <div
          style={{
            width: "100%",
            textAlign: "center",
            position: "absolute",
            bottom: "0"
          }}
        >
          Header
        </div>
      </main>
    </React.Fragment>
  );
};
export default layout;
