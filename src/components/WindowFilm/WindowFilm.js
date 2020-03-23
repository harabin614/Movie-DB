import React from "react";
import classes from "./WindowFilm.module.css";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";

const WindowFilm = props => {
  const dispatch = useDispatch();
  const addFilm = film => dispatch(actions.addFilm(film));

  let style = {
    left: props.left + "%"
  };
  const imgUrl =
    "https://image.tmdb.org/t/p/original/" + props.film.poster_path;
  return (
    <div className={classes.Window} style={style}>
      <div className={classes.Img}>
        <img src={imgUrl} alt="" onClick={() => addFilm(props.film)}></img>
      </div>
      <p onClick={() => addFilm(props.film)}>{props.film.title}</p>
    </div>
  );
};

export default WindowFilm;
