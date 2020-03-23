import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const setFilm = (firstFilm, popFilms) => {
  return {
    type: actionTypes.INIT_FILM_SUCCES,
    film: firstFilm,
    popFilms: popFilms
  };
};

export const setGenres = genres => {
  return {
    type: actionTypes.SET_GENRES,
    genres: genres
  };
};

export const fetchFilmFailed = () => {
  return {
    type: actionTypes.INIT_FILM_FAILED
  };
};

export const initGenres = () => {
  return dispatch => {
    axios
      .get(
        "genre/movie/list?api_key=8317a8165995bba8acb46fcbe40dfd45&language=en-US"
      )
      .then(response => {
        dispatch(setGenres(response.data.genres));
      })
      .catch(error => console.log(error));
  };
};
export const initFilm = () => {
  return dispatch => {
    axios
      .get(
        "movie/popular?api_key=8317a8165995bba8acb46fcbe40dfd45&language=en-US&page=1"
      )
      .then(response => {
        dispatch(setFilm(response.data.results[0], response.data.results));
      })
      .catch(error => {
        dispatch(fetchFilmFailed());
      });
  };
};

export const addFilm = film => {
  return {
    type: actionTypes.ADD_FILM,
    film: film
  };
};
