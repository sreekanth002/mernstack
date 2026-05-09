 import React, { useEffect, useState } from "react";

const CountriesData = () => {
  const API_URL = "http://localhost:5000/api/countries";

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  // ✅ Fetch countries
  const fetchCountries = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setCountries(data.data || []);
    } catch (err) {
      setError("Failed to fetch countries");
    } finally {
      setLoading(false);
    }
  };

  // ✅ DELETE country
  const deleteCountry = async (name) => {
    try {
      await fetch(`${API_URL}/delete/${name}`, {
        method: "DELETE",
      });

      // ✅ Update UI instantly (no reload)
      setCountries((prev) =>
        prev.filter((country) => country.name !== name)
      );

    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>🌍 Countries</h1>

      <ul>
        {countries.map((country, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {country.name} - {country.capital}

            {/* ✅ Delete button */}
            <button
              onClick={() => deleteCountry(country.name)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountriesData;