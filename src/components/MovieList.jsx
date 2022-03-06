import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MovieModal from "./ModalMovie";
import { useState } from "react";

let MovieList = ({ movie }) => {
  const [chosenMovie, setChosenMovie] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handelChosenMovie(movie) {
    setChosenMovie(movie);
    handleShow();
  }
  return (
    <>
      {movie.map((movie) => {
        return (
          <div key={movie.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              />
              <Card.Body>
                <Card.Title> Title: {movie.title}</Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handelChosenMovie(movie)}
                >
                  Add to Fav
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      {chosenMovie && (
        <MovieModal movie={chosenMovie} show={show} handleClose={handleClose} />
      )}
    </>
  );
};

export default MovieList;
