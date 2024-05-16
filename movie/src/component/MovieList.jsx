// MovieList.jsx
import React from "react";
import Movie from "./Movie";
import { Container, Row, Col } from "react-bootstrap";

const MovieList = ({ moviesData }) => {
    return (
        <Container>
            <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
                {moviesData.map((movie) => (
                    <Col key={movie.id}>
                        <Movie movie={movie} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default MovieList;
