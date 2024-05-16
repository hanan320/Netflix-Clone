import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";

const Home = () => {
    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("http://localhost:8080/trending");
                console.log("Response from /trending:", response.data);
                if (Array.isArray(response.data)) {
                    setMoviesData(response.data);
                } else {
                    console.error("Invalid data format:", response.data);
                    // Optionally, handle the error or display a message to the user
                }
            } catch (error) {
                console.error("Error fetching movies:", error);
                // Optionally, handle the error or display a message to the user
            }
        };

        fetchMovies();
    }, []);

    return (
        <>
            <h1>Now Trending</h1>
            <MovieList moviesData={moviesData} />;
        </>
    )
};

export default Home;
