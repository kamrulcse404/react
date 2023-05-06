import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovies } from "../services/movies.service";

const MovieInfo = () => {

    const movies = getMovies().map((movie, idx) => ({ ...movie, id: `movie-${idx+1}` }));
    const params = useParams();
    const id = params.id;

    const findMovie = (id) => {
        return movies.find(movie => (movie.id === id));
    }
    return <div>Movie Details :- {JSON.stringify(findMovie(id))}</div>;
}

export default MovieInfo;