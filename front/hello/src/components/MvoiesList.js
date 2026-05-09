 import React, { useEffect, useState } from "react";

const MoviesList = () => {
  const API_URL = "http://localhost:5000/api/movies";

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllMovies();
  }, []);

  const fetchAllMovies = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);

      // ✅ handle HTTP errors
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      console.log("API RESPONSE:", data);

      setMovies(data.data || []);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
      console.log("Fetch completed");
    }
  };

  // ✅ UI states
  if (loading) return <p>Loading movies...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h1>🎬 Movies List</h1>

      {movies.length === 0 ? (
        <p>No movies available</p>
      ) : (
        <ul>
          {movies.map((item, index) => (
            <li key={index}>
              {item.name} {item.surname}
              <img src={item.image} alt={item.name}  width="100"/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MoviesList;