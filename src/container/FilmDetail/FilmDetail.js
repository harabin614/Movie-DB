import React from "react";
import CurrentFilm from "../../components/CurrentFilm/CurrentFilm";
import classes from "./FilmDetail.module.css";
import FilmOptions from "../../components/UserInterface/FilmOptions/FilmOptions";

const MainPage = () => {
  console.log("mainpage did render");

  return (
    <div className={classes.Wrapper}>
      <CurrentFilm detail={true}>
        <FilmOptions />
      </CurrentFilm>
    </div>
  );
};

export default React.memo(MainPage);
