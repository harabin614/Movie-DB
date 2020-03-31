import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  films: null,
  error: null,
  cunt: false,
  newFilm: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_FILMS_OPTIONS_SUCCESS:
      return updateObject(state, {
        films: {
          favorites: action.favorites,
          watchlist: action.watchlist,
          ratedFilms: action.ratings
        },
        newFilm: !state.newFilm
      });
    case actionTypes.ADD_FAV_FILM_SUCCESS:
      return updateObject(state, { cunt: !state.cunt });
    case actionTypes.ADD_TO_WATCHLIST_SUCCESS:
      return updateObject(state, { cunt: !state.cunt });
    case actionTypes.ADD_RATING_SUCCESS:
      return updateObject(state, { cunt: !state.cunt });
    case actionTypes.REMOVE_FILM_FROM_FAV_SUCCESS:
      return updateObject(state, { cunt: !state.cunt });
    case actionTypes.REMOVE_FILM_FROM_FAV_WATCHLIST:
      return updateObject(state, { cunt: !state.cunt });

    default:
      return state;
  }
};

export default reducer;
