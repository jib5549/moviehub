import { useState } from "react";
import "../styles.css";

export default function Form({ getMovie }) {
  const [formData, setFormData] = useState({
    searchTerm: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovie(formData.searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="black-nav">
        <div className="title">
          <span style={{ color: "#3369e8" }}>M</span>
          <span style={{ color: "#Ea4335" }}>o</span>
          <span style={{ color: "#eeb211" }}>v</span>
          <span style={{ color: "#3369e8" }}>i</span>
          <span style={{ color: "#009925" }}>e</span>
          <span style={{ color: "#Ea4335" }}>H</span>
          <span style={{ color: "#eeb211" }}>u</span>
          <span style={{ color: "#3369e8" }}>b</span> 🎬
        </div>
      </div>
      <div className="secondNav">
        <ul className="navCss">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#comingSoon">COMING SOON</a>
          </li>
          <li>
            <a href="#nowPlaying">NOW PLAYING</a>
          </li>
          <li>
            <a href="#news">NEWS</a>
          </li>
          <li>
            <a href="#social">SOCIAL</a>
          </li>
        </ul>
      </div>
      <input
        className="searchContainer"
        placeholder="search anything"
        name="searchTerm"
        type="text"
        onChange={handleChange}
        value={formData.searchTerm}
      />
      <input className="submitButton" type="submit" value="" />
    </form>
  );
}
