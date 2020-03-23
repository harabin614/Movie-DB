import React from "react";
import { connect } from "react-redux";
// import Film from "../CurrentFilm/CurrentFilm";
import classes from "./PopFilms.module.css";
import { Route, Switch } from "react-router-dom";

const PopFilms = props => {
  let page1 = null;
  let page2 = null;
  let page3 = null;
  let posterImgUrl = "";
  const { popFilms } = props;

  if (popFilms) {
    page1 = props.popFilms.slice(0, 8).map(popFilm => {
      posterImgUrl =
        "https://image.tmdb.org/t/p/original/" + popFilm.poster_path;
      return (
        <li key={popFilm.id}>
          <img src={posterImgUrl} alt=""></img>
          {popFilm.title}
        </li>
      );
    });
    page2 = props.popFilms.slice(8, 16).map(popFilm => {
      posterImgUrl =
        "https://image.tmdb.org/t/p/original/" + popFilm.poster_path;
      return (
        <li key={popFilm.id}>
          <img src={posterImgUrl} alt=""></img>
          {popFilm.title}
        </li>
      );
    });
    page3 = props.popFilms.slice(16, 20).map(popFilm => {
      posterImgUrl =
        "https://image.tmdb.org/t/p/original/" + popFilm.poster_path;
      return (
        <li key={popFilm.id}>
          <img src={posterImgUrl} alt=""></img>
          {popFilm.title}
        </li>
      );
    });
  }
  return (
    <div className={classes.PopFilms}>
      <ul>
        <Switch>
          <Route path="/popular/1" render={() => page1} />
          <Route path="/popular/2" render={() => page2} />
          <Route path="/popular/3" render={() => page3} />
          <Route path="/popular" exact render={() => page1} />
        </Switch>
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    popFilms: state.film.popFilms,
    film: state.film.film
  };
};

export default connect(mapStateToProps)(PopFilms);
