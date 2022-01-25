import React, { useEffect, useState } from "react";

import Movie from ".components/Movie";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1b0b39b7699af0ca010cd87d9e6de6c8";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?&api_key=1b0b39b7699af0ca010cd87d9e6de6c8&query=";
const IMAGE_POSTER = "http://image.tmdb.org/t/p/w185";
const IMAGE_BACKDROP = "http://image.tmdb.org/t/p/w780";

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(async () => {
    fetch(FEATURED_API)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);
  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}
export default App;
