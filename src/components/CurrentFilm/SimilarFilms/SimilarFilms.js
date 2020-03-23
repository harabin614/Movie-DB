import React from "react";
import WindowFilm from "../../WindowFilm/WindowFilm";
import classes from "./SimilarFilms.module.css";

const similarFilms = props => {
  let left = -25;
  const recommFilms = props.recomm.map(recFilm => {
    left += 25;
    return (
      <WindowFilm left={left} film={recFilm} key={recFilm.id}></WindowFilm>
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
