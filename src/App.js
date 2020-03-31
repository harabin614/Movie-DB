import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
// import FilmDetail from "./container/FilmDetail";
import Layout from "./hoc/Layout/Layout";
import { Route, Switch, withRouter, useHistory } from "react-router-dom";
import * as actions from "./store/actions/index";
import Map from "./components/UserInterface/GoogleMap/Map";

const App = () => {
  const dispatch = useDispatch();
  const actualPath = useHistory();
  useEffect(() => {
    dispatch(actions.initFilm());
    dispatch(actions.initGenres());
    dispatch(actions.getFilmOptionsData());
  }, [dispatch, actualPath]);
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
      <Route path="/map" component={Map} />
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
