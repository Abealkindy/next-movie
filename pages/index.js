import Head from "next/head";
import styles from "../styles/Home.module.css";
import Movie from "./components/Movie";
import React, { useState, useEffect } from "react";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1b0b39b7699af0ca010cd87d9e6de6c8";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?&api_key=1b0b39b7699af0ca010cd87d9e6de6c8&query=";
const IMAGE_POSTER = "http://image.tmdb.org/t/p/w185";
const IMAGE_BACKDROP = "http://image.tmdb.org/t/p/w780";
let page = 1;
let totalPage;
let hitType = "home";
export default function Home() {
  const [item, setItem] = useState("");
  const [movies, setMovies] = useState([]);

  function hitAPI(url) {
    fetch(url + "&page=" + page)
      .then(res => res.json())
      .then(data => {
        page = data.page;
        totalPage = data.total_pages;
        setMovies(data.results);
      });
  }
  useEffect(() => {
    hitAPI(FEATURED_API);
  }, []);
  const onChanged = e => {
    setItem(e.target.value);
  };
  const onClick = () => {
    hitType = "search";
    page = 1;
    hitAPI(SEARCH_URL + item);
  };
  const onClickHome = () => {
    hitType = "home";
    page = 1;
    hitAPI(FEATURED_API);
  };
  const onClickPrev = () => {
    if (page > 1) {
      page--;
      if (hitType == "search") {
        hitAPI(SEARCH_URL + item);
      } else {
        hitAPI(FEATURED_API);
      }
    }
  };
  const onClickNext = () => {
    if (page < totalPage) {
      page++;
      if (hitType == "search") {
        hitAPI(SEARCH_URL + item);
      } else {
        hitAPI(FEATURED_API);
      }
    }
  };
  return (
    <div className={styles.container} align="center">
      <Head>
        <title>Movie Next App</title>
        <meta name="description" content="Movie next page" />
      </Head>
      <div>
        <h1>MOVIE SEARCH</h1>
      </div>
      <div>
        <button type="submit" onClick={onClickHome}>
          Home
        </button>
        <input
          placeholder="Search something"
          type="text"
          onChange={onChanged}
        />
        <button type="submit" onClick={onClick}>
          Search
        </button>
      </div>
      <div className={styles.grid}>
        {movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
      <div>
        <button type="submit" onClick={onClickPrev}>
          Prev
        </button>
        <button type="submit" onClick={onClickNext}>
          Next
        </button>
      </div>
    </div>
  );
}
