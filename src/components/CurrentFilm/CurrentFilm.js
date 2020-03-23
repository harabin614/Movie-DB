import React, { useEffect, useState } from "react";
import classes from "./CurrentFilm.module.css";
import { FaStar } from "react-icons/fa";
import axiosYoutube from "../../axios-youtube";
import axiosMovieDb from "../../axios";
import SimilarFilms from "./SimilarFilms/SimilarFilms";
import { connect } from "react-redux";

const CurrentFilm = props => {
  console.log("currentFilm did render");
  const { film, genres } = props;

  const [youtubeTrailer, setYoutubeTrailer] = useState("");
  const [recommFilms, setRecommFilms] = useState([]);
  useEffect(() => {
    if (film) {
      const searchFilm = film.original_title + "+trailer";
      axiosYoutube
        .get(`/search`, {
          params: {
            q: searchFilm
          }
        })
        .then(res =>
          setYoutubeTrailer(
            "https://www.youtube.com/watch?v=" + res.data.items[0].id.videoId
          )
        );
      axiosMovieDb
        .get(
          `movie/${film.id}/recommendations?api_key=8317a8165995bba8acb46fcbe40dfd45&language=en-US&page=1`
        )
        .then(res => setRecommFilms(res.data.results.slice(0, 4)));
    }
  }, [film]);

  console.log(recommFilms);

  const usedGenres = [];
  let posterImgUrl = "";
  let Film = null;
  let detailFilm = null;
  if (film && genres) {
    posterImgUrl = "https://image.tmdb.org/t/p/original/" + film.poster_path;
    film.genre_ids.forEach(genreId =>
      genres.forEach(genre => {
        if (genre.id === genreId) {
          usedGenres.push(genre.name);
        }
      })
    );
    Film = (
      <React.Fragment>
        <div className={classes.firstPart}>
          <div className={classes.FilmWithOptions}>
            <img src={posterImgUrl} alt="img"></img>
            {props.children}
          </div>
          <div className={classes.Text}>
            <h1>{film.original_title}</h1>
            <p className={classes.Rating}>
              Rating:
              <FaStar
                style={{
                  color: "gold",
                  paddingRight: "0.5rem",
                  marginLeft: "15px"
                }}
              />
              {film.vote_average}/10
            </p>
            <p>Genres:{" " + usedGenres.join(" ")}</p>
            <p>
              Release date:
              {" " + film.release_date}
            </p>
            <p>
              Original language:
              {" " + film.original_language.toUpperCase()}{" "}
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
  if (film && genres && props.detail) {
    detailFilm = (
      <React.Fragment>
        <div className={classes.secondPart}>
          <h2>Overview</h2>
          <p>{film.overview}</p>
          <a href={youtubeTrailer} target="_blank" rel="noopener noreferrer">
            Watch oficial trailer
          </a>
        </div>
        <div>
          <SimilarFilms recomm={recommFilms} />
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.Film}>
      {Film}
      {detailFilm}
    </div>
  );
};

const mapStateToProps = state => {
  return { film: state.film.film, genres: state.film.genres };
};

export default React.memo(connect(mapStateToProps)(CurrentFilm));
