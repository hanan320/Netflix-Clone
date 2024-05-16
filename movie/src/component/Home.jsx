import axios from "axios";
import MovieList from "./MovieList";
import { useState, useEffect } from "react";

function Home() {

    const [moviesData, setMoviesData] = useState([]);

    const getAllMovies = () => {
        const serverURL = `https://movie-library-2.onrender.com/trending`;

        axios.get(serverURL)
            .then(response => {
                setMoviesData(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log("Error fetching movies:", error);
            })
    }


    useEffect(() => {
        getAllMovies();
    }, [])

    return (

        <MovieList moviesData={moviesData} isFavPage={true} />

    )
}

export default Home;
