import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import styles from "/styles/Home.module.css";

const DETAIL_URL = "http://api.themoviedb.org/3/movie/";
const IMAGE_POSTER = "http://image.tmdb.org/t/p/w1280";
const IMAGE_BACKDROP = "http://image.tmdb.org/t/p/w780";
const API_KEY = "?api_key=1b0b39b7699af0ca010cd87d9e6de6c8";
export default function MovieDetail() {
  const router = useRouter();
  const { movieID } = router.query;

  return (
    <div align="center">
      <h1>Hello {movieID}</h1>
      <br />
      <Link href="/">Back</Link>
    </div>
  );
}
