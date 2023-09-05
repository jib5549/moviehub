import { useEffect, useState } from "react";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import MovieList from "./components/MovieList";
import "./index.css";
import SearchForm from "./components/SearchForm";

export default function App() {
  const apiKey = "98e3fb1f"; // this would be in .env

  const [movie, setMovie] = useState(null);
  const [movies, setMovies] = useState([]);

  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getMovies = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie("THE OFFICE");
  }, []);

  useEffect(() => {
    getMovies("thor", "movie");
  }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
      <SearchForm getMovies={getMovies} />
      <MovieList movies={movies} />
    </div>
  );
}
