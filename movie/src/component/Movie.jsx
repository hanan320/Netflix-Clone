import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ModalMovie from "./ModalMovie";

const Movie = ({ movie }) => {
    const [showModal, setShowModal] = useState(false);
    const [comment, setComment] = useState("");

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const handleAddComment = () => {
        setShowModal(false); 
    };

    return (
        <>
            <Card>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>comment: {comment}</Card.Text>
                    <Button variant="primary" onClick={handleShowModal}>
                        Add comment
                    </Button>
                </Card.Body>
            </Card>

            <ModalMovie
                show={showModal}
                handleClose={handleCloseModal}
                movie={movie}
                comment={comment}
                handleCommentChange={handleCommentChange}
                handleAddComment={handleAddComment}
            />
        </>
    );
};

export default Movie;
