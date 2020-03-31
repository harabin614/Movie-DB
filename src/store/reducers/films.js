import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  film: null,
  genres: null,
  popFilms: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FILM:
      return updateObject(state, { film: action.film });
    case actionTypes.INIT_FILM_SUCCES:
      return updateObject(state, {
        film: action.film
      });
    case actionTypes.INIT_POPFILMS_SUCCESS:
      return updateObject(state, {
        popFilms: action.popFilms
      });
    case actionTypes.SET_GENRES:
      return updateObject(state, { genres: action.genres });
    case actionTypes.GET_FILM_SUCCESS:
      return updateObject(state, { film: action.film });
    default:
      return state;
  }
};

export default reducer;
