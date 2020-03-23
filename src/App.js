import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
// import FilmDetail from "./container/FilmDetail";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, withRouter } from "react-router-dom";
import * as actions from "./store/actions/index";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.initFilm());
    dispatch(actions.initGenres());
  }, [dispatch]);
  console.log("app render");
  const FilmDetail = React.lazy(() => {
    return import("./container/FilmDetail/FilmDetail");
  });
  const PopularFilms = React.lazy(() => {
    return import("./container/PopularFilms/PopularFilms");
  });
  const Watchlist = React.lazy(() => {
    return import("./container/Watchlist/Watchlist");
  });
  const Favorites = React.lazy(() => {
    return import("./container/Favorites/Favorites");
  });
  let routes = (
    <Switch>
      <Route path="/popular" component={PopularFilms} />
      <Route path="/watchlist" component={Watchlist} />
      <Route path="/favorites" component={Favorites} />
      <Route path="/" exact component={FilmDetail} />
    </Switch>
  );

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<p>Loading......</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default withRouter(React.memo(App));
