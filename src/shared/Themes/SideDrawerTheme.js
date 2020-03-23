import { createMuiTheme } from "@material-ui/core/styles";

export const themeDrawer = createMuiTheme({
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
