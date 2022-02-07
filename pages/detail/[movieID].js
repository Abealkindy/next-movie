import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";
import React, { useState, useEffect } from "react";
import styles from "/styles/Home.module.css";

const DETAIL_URL = "http://api.themoviedb.org/3/movie/";
const IMAGE_POSTER = "http://image.tmdb.org/t/p/w1280";
const IMAGE_BACKDROP = "http://image.tmdb.org/t/p/w780";
const API_KEY = "?api_key=1b0b39b7699af0ca010cd87d9e6de6c8";
export default function MovieDetail() {
  const router = useRouter();
  const { movieID } = router.query;
  const [movies, setMovies] = useState({});
  useEffect(() => {
    hitAPI(DETAIL_URL + movieID + API_KEY);
  }, [{}]);
  function hitAPI(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        // page = data.page;
        // totalPage = data.total_pages;
        setMovies(data);

        console.log(movies);
      });
  }
  return (
    <div align="center">
      <Head>
        <title>{movies.original_title}</title>
      </Head>
      <main>
        <h1>
          {movies.original_title} ({movies.release_date})
        </h1>
        <br />
        <h3>Overview : {movies.overview}</h3>
        <br />
        <br />
        <mark>Rating : {movies.vote_average}/10</mark>
        <br />
        <br />
        <Link href="/">Back</Link>
        <br />
      </main>
    </div>
  );
}
