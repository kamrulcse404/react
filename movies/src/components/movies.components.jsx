import React, { Component } from 'react';
import Pagination from './pagination.components';
import { getGenres, getMovies } from '../services/movies.service';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { map } from 'lodash';
import Filter from './filtering.components';

class MovieLists extends Component {
    state = { 
        movies: getMovies(),
        // genres: getGenres(),
        genres: [ { name: 'All Genres' }, ...getGenres() ],
        activePage: 1,
        pageCount: 10,
        selectedGenre: 'All Genres',
    }

    handleChangePage = (page) => {
        this.setState({ ...this.state, activePage: page });
    }

    handleRating = (title) => {
        const newMovies = this.state.movies.map((movie) => {
            return { ...movie }
        });

        const newState = { ...this.state, movies: newMovies };
        const updatedMovies = newState.movies.map((movie) => {
            if(movie.title === title){
                movie.myRating = !(movie.myRating)
            }
            return movie;
        });
        const updatedState = { ...newState, movies:updatedMovies }

        this.setState({ ...updatedState });
    }

    paginateMovies = (movies) => {
        const { activePage, pageCount } = this.state;
        const start = (activePage-1) * pageCount;
        const paginatedMovies = movies.slice(start, start + pageCount);

        return paginatedMovies; 
    }

    handleClickGenre = (genreName) => {
        this.setState({ ...this.state, selectedGenre: genreName, activePage: 1 })
    }

    filterMovies = () => {
        const { movies, selectedGenre } = this.state;

        const filteredMovies = movies.filter((movie) => {
            if(selectedGenre === 'All Genres') return true;
            if (movie.genres.includes(selectedGenre)) return true;
            return false;
        });

        return filteredMovies;
    }

    render() { 
        const filtered = this.filterMovies();
        const movies = this.paginateMovies(filtered);

        return (
            <>
                <div className='row'>
                    <Filter 
                        filteredItems = { this.state.genres.map((genre, idx) => ({ _id: idx, name: genre.name })) }
                        onClick = { this.handleClickGenre }
                        selectedItem = { this.state.selectedGenre }
                    />
                    <div className='col-lg-8'>
                        <h4>Showing { filtered.length } Movies</h4> <br />
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Poster</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Year</th>
                                    <th scope="col">IMDB Rating</th>
                                    <th scope="col">MyRating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movies.map(movie => {
                                        return (
                                            <tr>
                                                <td>
                                                    <img style={{ width: '40px', height: 'auto' }} src={ movie.posterurl } />
                                                </td>
                                                <td>{ movie.title }</td>
                                                <td>{ movie.year }</td>
                                                <td><i class="bi bi-star-fill"></i> { movie.imdbRating }</td>
                                                <td onClick = { () => this.handleRating(movie.title) }>
                                                    { movie.myRating ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i> }
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        <Pagination 
                            total = { filtered.length }
                            pageCount = { this.state.pageCount }
                            activePage = { this.state.activePage }
                            onChangePage = { this.handleChangePage }
                        />
                    </div>
                </div>
                
                {/* <Pagination 
                    total = { filtered.length }
                    pageCount = { this.state.pageCount }
                    activePage = { this.state.activePage }
                    onChangePage = { this.handleChangePage }
                /> */}
            </>
        );
    }
}

export default MovieLists;