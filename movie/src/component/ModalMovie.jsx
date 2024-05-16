import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const ModalMovie = ({ movie, show, handleClose, comment, handleCommentChange }) => {
    const handleUpdateComment = () => {

        const updatedCommentData = {
            movieId: movie.id,
            comment: comment
        };

        axios.put(`https://movie-library-2.onrender.com/update/${movie.id}`, updatedCommentData)
            .then(response => {
                console.log("Comment updated successfully:", response.data);
                handleClose();
            })
            .catch(error => {
                console.error("Error updating comment:", error);
            });
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{movie.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={movie.imgUrl} alt={movie.title} />
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
                <Button onClick={handleUpdateComment}>Update Comment</Button> {/* Button to update comment */}
            </Modal.Footer>
        </Modal>
    );
};

export default ModalMovie;
