import React, { Component } from 'react';
import Pagination from './pagination.components';

class MovieLists extends Component {
    state = { 
        movies: [
            {
                "title": "The Shawshank Redemption",
                "rank": "1",
                "id": "tt0111161",
                "myRating": true
            },
            {
                "title": "The Godfather",
                "rank": "2",
                "id": "tt0068646",
                "myRating": true
            },
            {
                "title": "The Godfather: Part II",
                "rank": "3",
                "id": "tt0071562",
                "myRating": false
            },
            {
                "title": "Pulp Fiction",
                "rank": "4",
                "id": "tt0110912",
                "myRating": false
            },
            {
                "title": "The Good, the Bad and the Ugly",
                "rank": "5",
                "id": "tt0060196",
                "myRating": true
            },
            {
                "title": "The Dark Knight",
                "rank": "6",
                "id": "tt0468569",
                "myRating": true
            },
            {
                "title": "12 Angry Men",
                "rank": "7",
                "id": "tt0050083",
                "myRating": false
            },
            {
                "title": "Schindler's List",
                "rank": "8",
                "id": "tt0108052",
                "myRating": false
            },
            {
                "title": "The Lord of the Rings: The Return of the King",
                "rank": "9",
                "id": "tt0167260",
                "myRating": false
            },
            {
                "title": "Fight Club",
                "rank": "10",
                "id": "tt0137523",
                "myRating": false
            },
            {
                "title": "Star Wars: Episode V - The Empire Strikes Back",
                "rank": "11",
                "id": "tt0080684",
                "myRating": true
            },
            {
                "title": "The Lord of the Rings: The Fellowship of the Ring",
                "rank": "12",
                "id": "tt0120737",
                "myRating": true
            },
            {
                "title": "One Flew Over the Cuckoo's Nest",
                "rank": "13",
                "id": "tt0073486",
                "myRating": false
            },
            {
                "title": "Inception",
                "rank": "14",
                "id": "tt1375666",
                "myRating": true
            },
            {
                "title": "Goodfellas",
                "rank": "15",
                "id": "tt0099685",
                "myRating": false
            },
            {
                "title": "Star Wars",
                "rank": "16",
                "id": "tt0076759",
                "myRating": false
            },
            {
                "title": "Seven Samurai",
                "rank": "17",
                "id": "tt0047478",
                "myRating": true
            },
        ],
        activePage: 1,
        pageCount: 5,
    }

    handleChangePage = (page) => {
        this.setState({ ...this.state, activePage: page });
    }

    render() { 
        const { movies, activePage, pageCount } = this.state;
        const start = (activePage-1) * pageCount;
        const updatedMovies = movies.slice(start, start + pageCount);

        return (
            <>
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
                            updatedMovies.map((movie) => {
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
                    total = { movies.length }
                    pageCount = { pageCount }
                    activePage = { activePage }
                    onChangePage = { this.handleChangePage }
                />
            </>
        );
    }
}

export default MovieLists;