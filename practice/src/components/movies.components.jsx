import React, { Component } from 'react';
import Pagination from './pagination.components';
import { getMovies } from '../services/movies.service';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { map } from 'lodash';

class MovieLists extends Component {
    state = { 
        movies: getMovies(),
        activePage: 1,
        pageCount: 10,
    }

    handleChangePage = (page) => {
        this.setState({ ...this.state, activePage: page });
    }

    handleRating = (id) => {
        const newMovies = this.state.movies.map((movie) => {
            return { ...movie }
        });

        const newState = { ...this.state, movies: newMovies };
        const updatedMovies = newState.movies.map((movie) => {
            if(movie.id === id){
                movie.myRating = !(movie.myRating)
            }
            return movie;
        });
        const updatedState = { ...newState, movies:updatedMovies }

        this.setState({ ...updatedState });
    }

    paginateMovies = () => {
        const { movies, activePage, pageCount } = this.state;
        const start = (activePage-1) * pageCount;
        const paginatedMovies = movies.slice(start, start + pageCount);

        return paginatedMovies; 
    }

    render() { 
        const movies = this.paginateMovies();

        return (
            <>
                <h4>Showing { movies.length } Movies</h4> <br />
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Rank</th>
                            <th scope="col">Title</th>
                            <th scope="col">MyRating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            movies.map((movie) => {
                                return (
                                    <tr>
                                        <th scope="row">{ movie.id }</th>
                                        <td>{ movie.rank }</td>
                                        <td>{ movie.title }</td>
                                        <td onClick = { () => this.handleRating(movie.id) }>
                                            { movie.myRating ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i> }
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
                <Pagination 
                    total = { this.state.movies.length }
                    pageCount = { this.state.pageCount }
                    activePage = { this.state.activePage }
                    onChangePage = { this.handleChangePage }
                />
            </>
        );
    }
}

export default MovieLists;