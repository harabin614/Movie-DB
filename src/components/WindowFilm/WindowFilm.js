import React from "react";
import classes from "./WindowFilm.module.css";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import { useHistory } from "react-router-dom";

const WindowFilm = props => {
  const dispatch = useDispatch();
  const addFilm = id => dispatch(actions.addFilm(id));

  let style = {
    left: props.left + "%"
  };
  const actualPath = useHistory();
  const handleAddFilm = id => {
    addFilm(id);
    actualPath.push("/");
  };
  const imgUrl =
    "https://image.tmdb.org/t/p/original/" + props.film.poster_path;
  return (
    <div className={classes.Window} style={style}>
      <div className={classes.Img}>
        <img src={imgUrl} alt="" onClick={() => addFilm(props.id)}></img>
      </div>
      <p onClick={() => handleAddFilm(props.id)}>{props.film.title}</p>
    </div>
  );
};

export default WindowFilm;
