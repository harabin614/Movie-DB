import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
// import Film from "../CurrentFilm/CurrentFilm";
import classes from "./PopFilms.module.css";
import { Route, Switch, useHistory } from "react-router-dom";
import * as actions from "../../store/actions/index";
import Pagination from "../Pagination/Pagination";
import FilmBlock from "../UserInterface/FilmBlock/FilmBlock";

const PopFilms = props => {
  const dispatch = useDispatch();
  const actualPath = useHistory();
  let page = null;
  useEffect(() => {
    console.log(actualPath);
    if (
      actualPath.location.pathname === "/popular" ||
      actualPath.location.pathname === "/popular/1"
    ) {
      dispatch(actions.initPop(1));
    } else {
      dispatch(actions.initPop(actualPath.location.pathname.slice(-1)));
    }
  }, [actualPath, dispatch]);

  const handlePickedFilm = id => {
    actualPath.push("/");
    dispatch(actions.addFilm(id));
  };

  const { popFilms } = props;
  let popularFilms = null;

  if (popFilms) {
    page = props.popFilms.map(popFilm => {
      console.log(popFilm);

      return (
        <FilmBlock
          clicked={handlePickedFilm}
          key={popFilm.id}
          title={popFilm.title}
          id={popFilm.id}
          backdrop={popFilm.backdrop_path}
        ></FilmBlock>
      );
    });

    popularFilms = (
      <React.Fragment>
        <ul>{page}</ul>
        <Pagination currPath={"/popular/"} />
      </React.Fragment>
    );
  }

  return <div className={classes.PopFilms}>{popularFilms}</div>;
};

const mapStateToProps = state => {
  return {
    popFilms: state.film.popFilms,
    film: state.film.film
  };
};

export default connect(mapStateToProps)(PopFilms);
