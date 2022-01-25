import React from "react";
import Hello from "./Router";
import styles from "/styles/Home.module.css";
const IMAGE_POSTER = "http://image.tmdb.org/t/p/w185";
const IMAGE_BACKDROP = "http://image.tmdb.org/t/p/w780";
const IMAGE_BIASA = "http://image.tmdb.org/t/p/w1280";
const DETAIL_URL = "http://api.themoviedb.org/3/movie/";

const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  id,
  release_date
}) => {
  return (
    <div className={styles.card}>
      <div className="movie" align="center">
        <img src={IMAGE_BACKDROP + poster_path} height="150px" />
        <br />

        <a href={DETAIL_URL + id + "?api_key=1b0b39b7699af0ca010cd87d9e6de6c8"}>
          {title}
        </a>
        <br />
        <br />
        <span>{release_date}</span>
        <br />
        <span>{"Rating: " + vote_average}</span>
      </div>
    </div>
  );
};

export default Movie;
