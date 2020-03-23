import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";

const Watchlist = () => {
  const watchlist = useSelector(state => state.favorites.watchList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.initWatchlist());
  }, [dispatch]);
  let displayWatchlist = null;
  if (watchlist) {
    displayWatchlist = watchlist.map(film => (
      <p key={film.filmId}>{film.filmName}</p>
    ));
  }

  return <div>{displayWatchlist}</div>;
};

export default Watchlist;
