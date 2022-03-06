import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import FavMovie from "./FavMovie";

export default function FavRecipes() {
  const [favMovies, setFavMovies] = useState([]);

  async function getFavMovie() {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/getMovies`);
    const data = await response.json();

    setFavMovies(data);
  }

  useEffect(() => {
    getFavMovie();
  }, []);

  return (
    <>
      <h1>From FavMovies Page</h1>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {favMovies &&
          favMovies.map((movie) => {
            return (
              <FavMovie
                key={movie.id}
                getFavMovie={getFavMovie}
                movie={movie}
              />
            );
          })}
      </div>
    </>
  );
}
