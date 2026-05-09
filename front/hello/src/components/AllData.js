import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";

function AllData() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/health/checkup"
        );

        // Adjust based on your response structure
        setDirectors(res.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "10px" , border:'2px solid black', borderRadius:'10px', color:'green',backgroundColor:'yellowgreen'}}>
<h1>list of driectord</h1>

      {directors.map((director, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{director.name}</h2>

          <ul>
            {director.movies.map((movie, i) => (
              <li key={i}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AllData;