import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
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
  console.log("film options render");
  const [showRating, setShowRating] = useState(false);
  const [favorite, setFav] = useState(false);
  const [watchlist, setWatchlist] = useState(false);
  const [rating, setRating] = useState(false);
  const [showIcons, setShowIcons] = useState(false);

  const dispatch = useDispatch();
  const onAddFavorites = (filmName, filmId, backdrop) =>
    dispatch(actions.addFilmToFav(filmName, filmId, backdrop));
  const onAddToWatchlist = (filmName, filmId, backdrop) =>
    dispatch(actions.addFilmToWatchlist(filmName, filmId, backdrop));

  const film = useSelector(state => state.film.film);
  const cunt = useSelector(state => state.favorites.cunt);
  const films = useSelector(state => state.favorites.films);
  const newFilm = useSelector(state => state.favorites.newFilm);
  useEffect(() => {
    if (films) {
      const fav = films.favorites.filter(fi => {
        return fi.filmId === film.id;
      });
      const watch = films.watchlist.filter(fi => {
        return fi.filmId === film.id;
      });
      const rat = films.ratedFilms.filter(fi => {
        return fi.filmId === film.id;
      });
      if (fav[0]) {
        setFav(true);
      } else {
        setFav(false);
      }
      if (watch[0]) {
        setWatchlist(true);
      } else {
        setWatchlist(false);
      }
      if (rat[0]) {
        setRating(true);
      } else {
        setRating(false);
      }

      setShowIcons(true);
    }
  }, [films, film, newFilm]);
  useEffect(() => {
    dispatch(actions.getFilmOptionsData());
  }, [cunt, dispatch, film]);

  const onFavorite = () => {
    let key = null;
    const isFilmAllreadyAdded = films.favorites.filter(fi => {
      key = fi.id;
      return fi.filmId === film.id;
    });
    console.log(films);
    console.log(isFilmAllreadyAdded);
    if (isFilmAllreadyAdded.length === 0) {
      onAddFavorites(film.title, film.id, film.backdrop_path);
    } else {
      setFav(false);
      dispatch(actions.removeFromFav(key));
    }
  };

  const onWatchlist = () => {
    let key = null;
    const isFilmAllreadyAdded = films.watchlist.filter(fi => {
      key = fi.id;
      return fi.filmId === film.id;
    });
    console.log(isFilmAllreadyAdded);
    if (isFilmAllreadyAdded.length === 0) {
      onAddToWatchlist(film.title, film.id, film.backdrop_path);
    } else {
      setWatchlist(false);
      dispatch(actions.removeFromWatchlist(key));
    }
  };

  const onAddRating = (rating, bool) => {
    if (rating) {
      const isFilmAllreadyAdded = films.ratedFilms.filter(fi => {
        return fi.filmId === film.id;
      });
      const filmKey = isFilmAllreadyAdded.map(key => key.id);
      if (isFilmAllreadyAdded.length === 1) {
        dispatch(actions.changeFilmRating(filmKey, rating));
      } else {
        dispatch(actions.addFilmRating(film.title, film.id, rating));
      }
    }
    setShowRating(bool);
  };

  const onShowCinema = () => {
    console.log("Nearest Cinema");
  };
  let icons = null;
  if (showIcons) {
    icons = (
      <React.Fragment>
        <div className={classes.FilmOptions}>
          <ThemeProvider theme={theme}>
            {!favorite ? (
              <FavoriteIcon onClick={onFavorite} />
            ) : (
              <FavoriteIcon onClick={onFavorite} color="secondary" />
            )}
            {!watchlist ? (
              <WatchLaterIcon onClick={onWatchlist} />
            ) : (
              <WatchLaterIcon onClick={onWatchlist} color="primary" />
            )}
            <div className={classes.Options}>
              {rating ? (
                <GradeIcon
                  style={{
                    color: "rgb(218,165,32)"
                  }}
                  onClick={() => onAddRating(null, !showRating)}
                />
              ) : (
                <GradeIcon onClick={() => onAddRating(null, !showRating)} />
              )}
              {showRating ? <AddRating close={onAddRating} /> : null}
            </div>
            <RoomSharpIcon onClick={onShowCinema} />
          </ThemeProvider>
        </div>
      </React.Fragment>
    );
  }
  return icons;
};

export default React.memo(FilmOptions);
