import React from "react";
import Filter from "../../components/Filter/Filter";
import CurrentFilm from "../../components/CurrentFilm/CurrentFilm";
import classes from "./FilmDetail.module.css";
import FilmOptions from "../../components/UserInterface/FilmOptions/FilmOptions";

const mainPage = () => {
  console.log("mainpage did render");
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

export default React.memo(mainPage);
