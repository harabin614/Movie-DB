import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import * as actions from "../../store/actions/index";

const Favorites = () => {
  const favFilms = useSelector(state => state.favorites.favFilms);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.initFavFilms());
  }, [dispatch]);
  let displayFavFilms = null;
  if (favFilms) {
    displayFavFilms = favFilms.map(film => (
      <p key={film.filmId}>{film.filmName}</p>
    ));
  }

  return <div>{displayFavFilms}</div>;
};

export default Favorites;
