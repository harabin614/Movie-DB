import React, { useState } from "react";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Filter from "../../components/Filter/Filter";

const Layout = props => {
  const [closeUl, setCloseUl] = useState(false);
  const handleCloseUl = bool => {
    setCloseUl(bool);
  };
  return (
    <React.Fragment>
      <div onClick={() => handleCloseUl(false)}>
        <Toolbar />
        <SideDrawer />
      </div>
      <div onClick={() => handleCloseUl(true)}>
        <Filter close={closeUl} />
      </div>
      <main onClick={() => handleCloseUl(false)}>
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
export default Layout;
