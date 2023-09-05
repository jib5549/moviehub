import { useState } from "react";
import "../styles.css";

export default function Form({ getMovies }) {
  const [formData, setFormData] = useState({
    searchTerm: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(formData.searchTerm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchContainer"
        placeholder="search all related"
        name="searchTerm"
        type="text"
        onChange={handleChange}
        value={formData.searchTerm}
      />
      <input className="submitButton" type="submit" value="" />
    </form>
  );
}
