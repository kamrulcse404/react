import React, { Component } from 'react';
import Pagination from './pagination.components';
import { getMovies } from '../services/movies.service';

class MovieLists extends Component {
    state = { 
        movies: getMovies(),
        activePage: 1,
        pageCount: 10,
    }

    handleChangePage = (page) => {
        this.setState({ ...this.state, activePage: page });
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
                                        <td>
                                            { movie.myRating ? 'Rated' : 'unrated' }
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