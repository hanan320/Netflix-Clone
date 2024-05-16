
import React from 'react';
import MovieList from './MovieList';
import { useState, useEffect } from "react";
import axios from 'axios';


const FavList = () => {
    const [moviesData, setMoviesData] = useState([]);

    const getAllMovies = () => {

        const serURL = `https://movie-library-2.onrender.com/viewMovies`;

        axios.get(serURL)

            .then(response => {
                //console.log(response.data);
                setMoviesData(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        getAllMovies();
    }, []);

    return (
        <div>
            <h2>Favorite Movies</h2>
            <MovieList moviesData={moviesData} isFavPage={true} />
        </div>
    );
}

export default FavList;