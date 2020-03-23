import React, { useEffect } from "react";
import Filter from "../../components/Filter/Filter";
import CurrentFilm from "../../components/CurrentFilm/CurrentFilm";
import classes from "./FilmDetail.module.css";
import FilmOptions from "../../components/UserInterface/FilmOptions/FilmOptions";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";

const MainPage = () => {
  console.log("mainpage did render");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.initFilm());
  }, [dispatch]);
  return (
    <React.Fragment>
      <div className={classes.Wrapper}>
        <Filter />
        <CurrentFilm detail={true}>
          <FilmOptions />
        </CurrentFilm>
      </div>
    </React.Fragment>
  );
};

export default React.memo(MainPage);
