import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  favFilms: null,
  watchList: null,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INIT_FAV_FILMS_SUCCESS:
      return updateObject(state, { favFilms: action.favFilms });
    case actionTypes.INIT_FAV_FILMS_FAILED:
      return updateObject(state, { error: action.error });
    case actionTypes.INIT_WATCHLIST_SUCCESS:
      return updateObject(state, { watchList: action.watchList });
    case actionTypes.INIT_WATCHLIST_FAILED:
      return updateObject(state, { error: action.error });
    default:
      return state;
  }
};

export default reducer;
