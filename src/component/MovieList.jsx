import React, { useState, useEffect } from "react";
import ModalMovie from "./ModalMovie";
import Movie from "./Movie";
import { Row, Col } from 'react-bootstrap';
import axios from "axios";

const MovieList = ({ moviesData, isFavPage }) => {


    const [showModal, setShowModal] = useState(false);
    const [clickedMovie, setClickedMovie] = useState({});
    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        const fetchFavoritMovies = async () => {
            try {
                const response = await axios.get("https://movie-library-2.onrender.com/discover");
                setFavoriteMovies(response.data);

            } catch (error) {
                console.log("Error fetching favorite movies:", error);

            }
        }

        fetchFavoritMovies();

    }, []);


    const handleCloseModal = () => setShowModal(false);

    const handleShowModal = (item) => {
        setShowModal(true);
        setClickedMovie(item);
    };


    return (
        <>
            <Row>
                {moviesData.map(item => (
                    <Col key={item.id}>
                        <Movie item={item} showModal={handleShowModal} isFavPage={isFavPage} />
                    </Col>
                ))}
            </Row>
            <ModalMovie
                show={showModal}
                isFavPage={isFavPage}
                handleClose={handleCloseModal}
                clickedMovie={clickedMovie}
                favoriteMovies={favoriteMovies}
                setFavoriteMovies={setFavoriteMovies}
            />
        </>


    );
}

export default MovieList;