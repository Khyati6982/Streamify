import './App.css'
import React, { useState, useEffect } from "react";
import { getMovies } from "./MovieService.jsx";
import MovieList from "./MovieList.jsx";
import Navbar from "./NavBar.jsx"

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genres, setGenres] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const movieData = await getMovies();

        setTimeout(() => {
          setMovies(movieData);
          setFilteredMovies(movieData);
          setGenres([...new Set(movieData.map((movie) => movie.genre))]);
          setLoading(false);
        }, 1000)
      } catch(err) {
          setError("Failed to fetch movies.");
      } 
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      // Define rating ranges explicitly for each star category
      let minRating = 0;
      let maxRating = 5;
  
      if (selectedRating) {
        switch (parseInt(selectedRating)) {
          case 5:
            minRating = 4.5;
            maxRating = 5;
            break;
          case 4:
            minRating = 3.5;
            maxRating = 4.4;
            break;
          case 3:
            minRating = 2.5;
            maxRating = 3.4;
            break;
          case 2:
            minRating = 1.5;
            maxRating = 2.4;
            break;
          case 1:
            minRating = 0;
            maxRating = 1.4;
            break;
          default:
            break;
        }
      }
  
      // Apply the refined filtering logic
      return (
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedGenre === "" || movie.genre === selectedGenre) &&
        (selectedRating === "" || (movie.rating >= minRating && movie.rating <= maxRating))
      );
    });
    setFilteredMovies(filtered);
  }, [searchQuery, selectedGenre, selectedRating, movies]);
  

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "auto";
  }, [loading]);

  return (
    <div>
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
        genres={genres}
        setSelectedRating={setSelectedRating}
      />

      <div>
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="movie-container">
            <MovieList movies={filteredMovies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;