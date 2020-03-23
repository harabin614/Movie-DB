import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Toolbar.module.css";
import { NavLink } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiList: {
      root: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: "white"
      }
    },
    MuiListItem: {
      root: {
        width: "auto",
        color: "black"
      },
      selected: {}
    }
  }
});

const ToolBar = () => {
  const [selected, setSelected] = useState();
  const actualPath = useHistory();
  useEffect(() => {
    if (actualPath.location.pathname.includes("popular")) {
      setSelected(1);
    } else {
      setSelected(0);
    }
  }, [actualPath]);
  const pickPa = index => {
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
            onClick={() => pickPa(index)}
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
    <div className={classes.ToolBar}>
      <ThemeProvider theme={theme}>{list}</ThemeProvider>
    </div>
  );
};
export default ToolBar;
