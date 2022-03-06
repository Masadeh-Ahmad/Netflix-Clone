import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import swal from "sweetalert";

export default function Movie({ movie, show, handleClose, addToFavList }) {
  function handelFormSubmit(e) {
    e.preventDefault();
    let comment = e.target.comment.value;

    addToFavList(movie, comment);
  }

  async function addToFavList(movie, comment) {
    const url = `${process.env.REACT_APP_SERVER}/addMovie`;

    const data = {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      overview: movie.overview,
      comment: comment,
    };
    // Use Fetch to send POST request
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    swal("Favorite Movie", "You added a new movie", "success");
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{movie.overview}</Modal.Body>
      <Form onSubmit={handelFormSubmit} style={{ margin: "0 10px" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            name="comment"
            type="text"
            placeholder="Enter Comment"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
