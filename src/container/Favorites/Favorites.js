import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import FilmBlock from "../../components/UserInterface/FilmBlock/FilmBlock";
import { useHistory } from "react-router-dom";
import classes from "./Favorites.module.css";

const Favorites = () => {
  const films = useSelector(state => state.favorites.films);
  const dispatch = useDispatch();
  console.log(films);
  const actualPath = useHistory();

  const goFilmDetail = movieId => {
    console.log("pes");
    dispatch(actions.getFilm(movieId));
    actualPath.push("/");
  };
  let displayFavFilms = null;
  if (films) {
    displayFavFilms = films.favorites.map(film => (
      <FilmBlock
        clicked={goFilmDetail}
        key={film.id}
        title={film.filmTitle}
        body={film.overview}
        id={film.filmId}
        backdrop={film.backdrop}
      ></FilmBlock>
    ));
  }

  return (
    <div className={classes.FavoritesWrapper}>
      <h2>Favorites</h2>
      {displayFavFilms}
    </div>
  );
};

export default Favorites;
