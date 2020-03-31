import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FilmBlock from "../../components/UserInterface/FilmBlock/FilmBlock";
import * as actions from "../../store/actions/index";
import { useHistory } from "react-router-dom";
import classes from "./Watchlist.module.css";

const Watchlist = () => {
  const films = useSelector(state => state.favorites.films);
  const dispatch = useDispatch();
  const actualPath = useHistory();

  const goFilmDetail = movieId => {
    dispatch(actions.getFilm(movieId));
    actualPath.push("/");
  };

  let displayWatchlist = null;
  if (films) {
    displayWatchlist = films.watchlist.map(film => (
      <FilmBlock
        clicked={goFilmDetail}
        key={film.id}
        title={film.filmTitle}
        id={film.filmId}
        backdrop={film.backdrop}
      ></FilmBlock>
    ));
  }

  return (
    <div className={classes.WatchlistWrapper}>
      <h2>Watchlist</h2>
      {displayWatchlist}
    </div>
  );
};

export default Watchlist;
