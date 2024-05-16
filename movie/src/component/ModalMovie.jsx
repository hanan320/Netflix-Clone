import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalMovie = ({ movie, show, handleClose, comment, handleCommentChange, handleAddComment }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} alt={movie.title} />
                <Form.Group controlId="formComment">
                    <Form.Label>Add a comment</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your comment"
                        value={comment}
                        onChange={handleCommentChange}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
                <Button onClick={handleAddComment}>Add Comment</Button> {/* Button to add comment */}
            </Modal.Footer>
        </Modal>
    );
};

export default ModalMovie;
