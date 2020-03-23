import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import GradeIcon from "@material-ui/icons/Grade";
import RoomSharpIcon from "@material-ui/icons/RoomSharp";
import classes from "./FilmOptions.module.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AddRating from "./AddRating/AddRating";
import * as actions from "../../../store/actions/index";

const theme = createMuiTheme({
  overrides: {
    MuiSvgIcon: {
      root: {
        fontSize: "4rem",
        padding: "1rem 0 0.5rem 0",
        display: "block",
        margin: "0 auto",
        cursor: "pointer"
      }
    }
  }
});

const FilmOptions = () => {
  const [show, setShow] = useState({
    rating: false,
    watchlist: false
  });

  const dispatch = useDispatch();
  const onAddFavorites = (filmName, filmId) =>
    dispatch(actions.addFavFilm(filmName, filmId));
  const onAddToWatchlist = (filmName, filmId) =>
    dispatch(actions.addToWatchlist(filmName, filmId));
  const film = useSelector(state => state.film.film);

  const onFavorite = () => {
    onAddFavorites(film.title, film.id);
  };
  const onWatchlist = () => {
    onAddToWatchlist(film.title, film.id);
  };
  const onAddRating = rating => {
    setShow({ ...show, rating: !show.rating });
  };
  const onShowCinema = () => {
    console.log("Nearest Cinema");
  };
  console.log(show);

  return (
    <React.Fragment>
      <div className={classes.FilmOptions}>
        <ThemeProvider theme={theme}>
          <FavoriteIcon onClick={onFavorite} />
          <WatchLaterIcon onClick={onWatchlist} />
          <div className={classes.Options}>
            <GradeIcon onClick={onAddRating} />
            {show.rating ? <AddRating close={onAddRating} /> : null}
          </div>
          <RoomSharpIcon onClick={onShowCinema} />
        </ThemeProvider>
      </div>
    </React.Fragment>
  );
};

export default React.memo(FilmOptions);
