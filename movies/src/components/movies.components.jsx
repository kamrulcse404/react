import React, { Component } from 'react';
import Pagination from './pagination.components';
import { getGenres, getMovies } from '../services/movies.service';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Filter from './filtering.components';
import MoviesTable from './movies-table.component';
import _ from "lodash";

class MovieLists extends Component {
    state = { 
        movies: getMovies(),
        // genres: getGenres(),
        genres: [ { name: 'All Genres' }, ...getGenres() ],
        activePage: 1,
        pageCount: 10,
        selectedGenre: 'All Genres',
        sortColumn: { path: 'title', order: 'asc' }
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

    sortMovies = (movies) => {        
        const { sortColumn } = this.state;
        const sortedMovies = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
        return sortedMovies;
    }

    handleSort = sortColumn => {
        this.setState({ ...this.state, sortColumn});
    }

    render() { 
        const filtered = this.filterMovies();
        const sorted = this.sortMovies(filtered);
        const movies = this.paginateMovies(sorted);

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
                        <MoviesTable 
                            movies={ movies }
                            onClickRating = { this.handleRating }
                            onSort = { this.handleSort }
                            sortColumn = { this.state.sortColumn }
                        />
                        <Pagination 
                            total = { filtered.length }
                            pageCount = { this.state.pageCount }
                            activePage = { this.state.activePage }
                            onChangePage = { this.handleChangePage }
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default MovieLists;