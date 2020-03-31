import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import axiosFirebase from "../../axios-firebase";

const setFilmSuccess = film => {
  return {
    type: actionTypes.INIT_FILM_SUCCES,
    film: film
  };
};
const setPopFilmsSuccess = popFilms => {
  return {
    type: actionTypes.INIT_POPFILMS_SUCCESS,
    popFilms: popFilms
  };
};

const setFilm = firstFilm => {
  return dispatch => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${firstFilm.id}?api_key=8317a8165995bba8acb46fcbe40dfd45&language=en-US`
      )
      .then(res => {
        console.log(res.data);
        dispatch(setFilmSuccess(res.data));
      })
      .catch(err => console.log(err.message));
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
        `movie/popular?api_key=8317a8165995bba8acb46fcbe40dfd45&language=en-US&page=1`
      )
      .then(response => {
        dispatch(setFilm(response.data.results[0]));
      })
      .catch(error => {
        dispatch(fetchFilmFailed());
      });
  };
};

export const initPop = pageNumber => {
  return dispatch => {
    axios
      .get(
        `movie/popular?api_key=8317a8165995bba8acb46fcbe40dfd45&language=en-US&page=${pageNumber}`
      )
      .then(response => {
        dispatch(setPopFilmsSuccess(response.data.results));
      })
      .catch(error => {
        dispatch(fetchFilmFailed());
      });
  };
};

const getFilmSuccess = movie => {
  return {
    type: actionTypes.GET_FILM_SUCCESS,
    film: movie
  };
};

export const getFilm = movieId => {
  return dispatch => {
    console.log(movieId);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=8317a8165995bba8acb46fcbe40dfd45&language=en-US`
      )
      .then(res => {
        dispatch(getFilmSuccess(res.data));
      })
      .catch(err => console.log(err.message));
  };
};

export const addFilm = id => {
  return dispatch => {
    console.log(id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=8317a8165995bba8acb46fcbe40dfd45&language=en-US`
      )
      .then(res => {
        dispatch(addFilmSuccess(res.data));
      })
      .catch(err => console.log(err.message));
  };
};
export const addFilmSuccess = film => {
  return {
    type: actionTypes.ADD_FILM,
    film: film
  };
};
export const addRating = (filmId, rating) => {
  return dispatch => {
    axiosFirebase.post("/ratings.json", { filmId, rating });
  };
};
