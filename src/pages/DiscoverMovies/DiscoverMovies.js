import React, { useState } from "react";
import axios from "axios";
import "./Style.css";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [Status, setStatus] = useState({ status: "idle", data: [] });

  const search = async () => {
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL
    const queryParam = encodeURIComponent(searchText);
    setStatus({ status: "searching", data: [] });

    // Option B: use the `axios` library like we did on Tuesday
    const response = await axios.get(
      `https://omdbapi.com/?apikey=2a5b9544&s=${queryParam}`
    );

    console.log("Success!", response);
    setStatus({ status: "Done!", data: response.data.Search });
  };

  console.log("this is Status:", Status);

  if (Status.data === undefined) {
    return <h1>Does not excist you MoorHuhn</h1>;
  } else {
    return (
      <div>
        <h1>Find your favourite movie!</h1>
        <p>
          <input
            value={searchText}
            onChange={(e) => set_searchText(e.target.value)}
          />
          <button onClick={search}>Search</button>
        </p>
        <div className="Parent">
          {Status.status === "searching" ? <h1> Loading... </h1> : ""}

          {Status.data.map((movie) => {
            return (
              <Link to={`/discover/${movie.imdbID}`}>
                <div className="flexItem" key={movie.imdbID}>
                  <h1>{movie.Title}</h1>
                  <p>{movie.imdbID}</p>
                  <img src={movie.Poster} alt={movie.imdbID} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}
