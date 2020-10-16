import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Styles.css";

export default function MoviePage() {
  const params = useParams();
  const [movieData, set_movieData] = useState({ status: "idle", data: null });

  console.log("this is params", params.imdbID);

  useEffect(() => {
    async function fetchData() {
      set_movieData({ status: "Loading", data: null });
      const response = await axios.get(
        `https://omdbapi.com/?i=${params.imdbID}&apikey=2a5b9544`
      );
      console.log(response);
      set_movieData({ status: "done", data: response.data });
    }
    fetchData();
  }, [params.imdbID]);

  console.log(movieData.data);

  console.log("hello");

  return (
    <div className="Parent">
      <div className="details">
        <h1>{movieData.data?.Title}</h1>
        <h2>{`${movieData.data?.Production} ${movieData.data?.Year}`}</h2>
        <p>{movieData.data?.Plot}</p>
        {movieData.data?.Ratings.map((rating, index) => {
          return (
            <div key={index}>
              <p>{`${rating.Source}: ${rating.Value}`}</p>
            </div>
          );
        })}
      </div>

      <img src={movieData.data?.Poster} alt="movie poster" />
    </div>
  );
}
