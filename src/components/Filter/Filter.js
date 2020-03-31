import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { useDispatch } from "react-redux";
import * as actions from "../../store/actions/index";
import classes from "./Filter.module.css";
import { FaSearch } from "react-icons/fa";
// import axios from "axios";

const Filter = props => {
  const [keyword, setKeyword] = useState("");
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [openSearcher, setOpenSearcher] = useState(props.close);
  const dispatch = useDispatch();
  useEffect(() => {
    setOpenSearcher(props.close);
  }, [props.close]);
  console.log(openSearcher);
  const onAddFilm = film => dispatch(actions.addFilm(film));

  useEffect(() => {
    if (keyword.length > 0) {
      axios
        .get(
          "search/movie?api_key=8317a8165995bba8acb46fcbe40dfd45&query=" +
            keyword +
            "&page=1"
        )
        .then(response => setFilteredFilms(response.data.results.slice(0, 5)));
    }
  }, [keyword]);

  const addFilmOnClick = idFilm => {
    const film = filteredFilms.filter(film => film.id === idFilm);
    onAddFilm(film[0].id);
    setOpenSearcher(false);
    setKeyword("");
  };

  const filtFilms = filteredFilms.map(film => {
    return (
      <li
        key={film.id}
        onClick={() => {
          addFilmOnClick(film.id);
        }}
      >
        {film.original_title}
      </li>
    );
  });
  const searchHandle = event => {
    setKeyword(event.target.value);
    setOpenSearcher(true);
  };

  return (
    <div className={classes.Filter}>
      <div className={classes.Search}>
        <input
          placeholder="search"
          type="text"
          value={keyword}
          onChange={event => searchHandle(event)}
        ></input>
        <button type="submit">
          <FaSearch />
        </button>
        <ul>{openSearcher && keyword.length > 0 ? filtFilms : null}</ul>
      </div>
    </div>
  );
};

export default React.memo(Filter);
