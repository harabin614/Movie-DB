import React from "react";
import WindowFilm from "../../WindowFilm/WindowFilm";
import classes from "./SimilarFilms.module.css";

const similarFilms = props => {
  let left = -50;
  const recommFilms = props.recomm.map(recFilm => {
    left += 50;
    return (
      <WindowFilm
        left={left}
        film={recFilm}
        key={recFilm.id}
        id={recFilm.id}
      ></WindowFilm>
    );
  });
  return (
    <div className={classes.Recomm}>
      <h2>Recommendations</h2>
      {recommFilms}
    </div>
  );
};

export default similarFilms;
