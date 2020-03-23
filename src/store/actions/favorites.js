import * as actionTypes from "./actionTypes";
import axios from "../../axios-firebase";

const initFavFilmsSuccess = films => {
  return {
    type: actionTypes.INIT_FAV_FILMS_SUCCESS,
    films: films
  };
};
const initFavFilmsFailed = error => {
  return {
    type: actionTypes.INIT_FAV_FILMS_FAILED,
    error: error
  };
};

export const initFavFilms = () => {
  return dispatch => {
    axios
      .get("/favorites.json")
      .then(res => {
        dispatch(initFavFilmsSuccess(res.data));
      })
      .catch(error => {
        dispatch(initFavFilmsFailed(error));
      });
  };
};
const addFavFilmSuccess = () => {
  return {
    type: actionTypes.ADD_FAV_FILM_SUCCESS
  };
};
export const addFavFilm = (filmName, filmId) => {
  return dispatch => {
    axios
      .post("/favorites.json", { filmName, filmId })
      .then(res => dispatch(addFavFilmSuccess))
      .catch(err => console.log(err.message));
  };
};

const initWatchlistSuccess = watchlist => {
  return {
    type: actionTypes.INIT_WATCHLIST_SUCCESS,
    watchlist: watchlist
  };
};
const initWatchlistFailed = error => {
  return {
    type: actionTypes.INIT_WATCHLIST_FAILED,
    error: error
  };
};

export const initWatchlist = () => {
  return dispatch => {
    axios
      .get("/watchlist.json")
      .then(res => {
        dispatch(initWatchlistSuccess(res.data));
      })
      .catch(err => {
        dispatch(initWatchlistFailed(err));
      });
  };
};

const addToWatchlistSuccess = () => {
  return {
    type: actionTypes.ADD_TO_WATCHLIST_SUCCES
  };
};
export const addToWatchlist = (filmName, filmId) => {
  return dispatch => {
    axios
      .post("/watchlist.json", {
        filmName,
        filmId
      })
      .then(res => dispatch(addToWatchlistSuccess))
      .catch(err => console.log(err.message));
  };
};
