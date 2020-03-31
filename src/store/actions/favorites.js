import * as actionTypes from "./actionTypes";
import axiosFirebase from "../../axios-firebase";
import database from "../../config/firebase";

export const getFilmOptionsSuccess = (favorites, ratings, watchlist) => {
  return {
    type: actionTypes.INIT_FILMS_OPTIONS_SUCCESS,
    favorites: favorites,
    watchlist: watchlist,
    ratings: ratings
  };
};
export const getFilmOptionsData = () => {
  return dispatch => {
    axiosFirebase.get("/films.json").then(res => {
      const favorites = [];
      const ratings = [];
      const watchlist = [];
      console.log(res.data);
      if (res.data) {
        for (let key in res.data.favorites) {
          favorites.push({
            ...res.data.favorites[key],
            id: key
          });
        }
        for (let key in res.data.watchlist) {
          watchlist.push({
            ...res.data.watchlist[key],
            id: key
          });
        }
        for (let key in res.data.ratings) {
          ratings.push({
            ...res.data.ratings[key],
            id: key
          });
        }
      }
      dispatch(getFilmOptionsSuccess(favorites, ratings, watchlist));
    });
  };
};

//adding favorite film
const addFilmToFavSucces = () => {
  return {
    type: actionTypes.ADD_FAV_FILM_SUCCESS
  };
};
export const addFilmToFav = (filmTitle, filmId, backdrop) => {
  return dispatch => {
    console.log(backdrop);
    axiosFirebase
      .post("/films/favorites.json", {
        filmTitle: filmTitle,
        filmId: filmId,
        backdrop: backdrop
      })
      .then(res => {
        dispatch(addFilmToFavSucces());
      });
  };
};
//remove from favorites

export const removeFromFav = key => {
  return dispatch => {
    database
      .ref(`/films/favorites/${key}`)
      .remove()
      .then(res => {
        dispatch(removeFromFavSuccess());
      });
  };
};
const removeFromFavSuccess = key => {
  return {
    type: actionTypes.REMOVE_FILM_FROM_FAV_SUCCESS
  };
};

//adding watchlist list
const addFilmToWatchlistSuccess = () => {
  return {
    type: actionTypes.ADD_TO_WATCHLIST_SUCCESS
  };
};
export const addFilmToWatchlist = (filmTitle, filmId, backdrop) => {
  return dispatch => {
    axiosFirebase
      .post("/films/watchlist.json", {
        filmTitle: filmTitle,
        filmId: filmId,
        backdrop: backdrop
      })
      .then(res => {
        dispatch(addFilmToWatchlistSuccess());
      });
  };
};
//remove from watchlist
export const removeFromWatchlist = key => {
  return dispatch => {
    database
      .ref(`/films/watchlist/${key}`)
      .remove()
      .then(res => {
        dispatch(removeFromFavWatchlistSuccess());
      });
  };
};
const removeFromFavWatchlistSuccess = () => {
  return {
    type: actionTypes.REMOVE_FILM_FROM_FAV_WATCHLIST
  };
};
//adding film rating
export const addRatingSuccess = () => {
  return {
    type: actionTypes.ADD_RATING_SUCCESS
  };
};
export const addFilmRating = (filmTitle, filmId, rating) => {
  return dispatch => {
    axiosFirebase
      .post("/films/ratings.json", {
        filmTitle: filmTitle,
        filmId: filmId,
        rating: rating
      })
      .then(res => {
        dispatch(addRatingSuccess());
      });
  };
};

export const changeFilmRating = (filmKey, rating) => {
  return dispatch => {
    database.ref(`/films/ratings/${filmKey}`).update({ rating: rating });
  };
};
