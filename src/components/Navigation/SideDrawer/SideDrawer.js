import React, { useState, useEffect } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
import MenuIcon from "@material-ui/icons/Menu";
import classes from "./SideDrawer.module.css";
import { Button, ThemeProvider } from "@material-ui/core";
import { NavLink, useHistory } from "react-router-dom";

const theme = createMuiTheme({
  overrides: {
    MuiList: { root: { display: "block", marginTop: "10vh" } },
    MuiListItem: {
      root: {}
    },
    MuiButton: {
      root: {
        border: "1px solid white",
        height: "3rem"
      },
      text: {
        color: "white"
      }
    },
    MuiPaper: {
      root: {
        width: "40vw"
      }
    }
  }
});

const SideDrawer = () => {
  const [openSideDrawer, setSD] = useState(false);
  const [selected, setSelected] = useState();
  const actualPath = useHistory();
  useEffect(() => {
    if (actualPath.location.pathname.includes("popular")) {
      setSelected(1);
    } else {
      setSelected(0);
    }
  }, [actualPath]);

  const toggleDrawer = (what, index) => {
    setSD(what);
  };
  const pickList = (what, index) => {
    setSD(what);
    setSelected(index);
  };

  const list = (
    <div>
      <List>
        {["Home", "Popular", "Favorites", "Watchlist"].map((text, index) => (
          <ListItem
            button
            key={text}
            selected={index === selected}
            onClick={() => pickList(false, index)}
          >
            {text === "Home" ? (
              <NavLink to={`/`} exact>
                {text}
              </NavLink>
            ) : (
              <NavLink to={`/${text.toLowerCase()}`}>{text}</NavLink>
            )}
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.SideDrawer}>
      <ThemeProvider theme={theme}>
        <Button onClick={() => toggleDrawer(true)}>
          <MenuIcon
            style={{
              fontSize: "1rem",
              padding: "0"
            }}
          />
        </Button>
        <Drawer open={openSideDrawer} onClose={() => toggleDrawer(false)}>
          <div className={classes.A}>{list}</div>
        </Drawer>
      </ThemeProvider>
    </div>
  );
};

export default SideDrawer;
