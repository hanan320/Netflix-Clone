
import React from 'react';
import axios from 'axios';
import { Modal, Button, Card, Form } from 'react-bootstrap';


const ModalMovie = (props) => {


    const handleAddComment = async (e) => {
        e.preventDefault();
        const commentText = e.target.comment.value || "";

        const obj = {
            title: props.clickedMovie.title,
            release_date: props.clickedMovie.release_date,
            poster_path: props.clickedMovie.poster_path,
            overview: props.clickedMovie.overview,
            comment: commentText
        };

        try {
            const response = await axios.post("https://movie-library-2.onrender.com/addMovie", obj);
            console.log(response);
            console.log('success');

            props.setFavoriteMovies(prevMovies => [...prevMovies, { ...obj, id: response.data.id }]);
            props.handleClose();
        } catch (error) {
            console.log(error);
        }
    };

    const updateComment = (e) => {


        const url = `https://movie-library-2.onrender.com/viewMovies/update/${props.clickedMovie.id}`;
        e.preventDefault();

        const comment = e.target.comment.value || "";

        console.log("Updated Comment:", comment);

        const obj = {
            title: props.clickedMovie.title,
            release_date: props.clickedMovie.release_date,
            poster_path: props.clickedMovie.poster_path,
            overview: props.clickedMovie.overview,
            comment: comment
        };


        axios.put(url, obj).then(response => {

            console.log('PUT request successful');
            const updatedMovie = response.data.updatedMovie;
            const updatedMovies = props?.moviesFavorite?.map(movie => {
                if (movie.id === updatedMovie.id) {
                    return updatedMovie;
                }
                return movie;
            });
            props.updateFavoriteMovies(updatedMovies);
            window.location.reload();

        }).catch(error => {
            console.error('Error:', error);
        });




    };

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Movie Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Card.Img
                    variant="top"
                    src={`https://image.tmdb.org/t/p/w185${props.clickedMovie.posterpath}`}
                    width='100%'
                    style={{
                        width: "100%",
                        height: "400px"
                    }}
                />
                <h3 style={{ textAlign: "center" }}>{props.clickedMovie.title}</h3>
                {props.clickedMovie.comment && (
                    <p><strong>Comment:</strong> {props.clickedMovie.comment}</p>
                )}
                <Form onSubmit={handleAddComment}>
                    <Form.Group className="mb-3">
                        <Form.Label>Add a comment</Form.Label>
                        <Form.Control name='comment' placeholder="Enter your comment" />
                    </Form.Group>
                    <Button variant="primary" type='submit'>
                        Submit and add to Favorite Page
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalMovie;
