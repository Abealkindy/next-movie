import React from "react";
import styles from "/styles/Home.module.css";
import Link from 'next/link'
const IMAGE_POSTER = "http://image.tmdb.org/t/p/w1280";
const IMAGE_BACKDROP = "http://image.tmdb.org/t/p/w780";
const IMAGE_BIASA = "http://image.tmdb.org/t/p/w1280";
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
        <img src={IMAGE_BIASA + poster_path} height="150px" />
        <br />

        <Link href={`/detail/${id}`}>
          {title}
        </Link>
        <br />
        <br />
        <span>{release_date}</span>
        <br />
        <span>{vote_average + '/10'}</span>
      </div>
    </div>
  );
};

export default Movie;
