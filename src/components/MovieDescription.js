import { useState, useEffect } from "react";

export default function MovieDescription({ movie }) {
  const apiKey = "308b11e2";
  const [item, setItem] = useState(movie);

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${movie.imdbID}`
      );
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Movie Details</h2>
        <div className="description-item">
          <span className="description">Plot:</span> {item.Plot}
        </div>
        <div className="description-item">
          <span className="description">Director:</span> {item.Director}
        </div>
        <div className="description-item">
          <span className="description">Actors:</span> {item.Actors}
        </div>
        <div className="description-item">
          <span className="description">Rating:</span> {item.imdbRating}
        </div>
      </div>
    </div>
  );
}