import React from 'react';
import Table from '../common/table.component';

const MoviesTable = ({ movies, onClickRating, onSort, sortColumn }) => {
    const columns = [
        { path: 'posterurl', label: 'Poster', content: movie => <td>
            <img style={{ width: '40px', height: 'auto' }} src={ movie.posterurl } />
            </td> 
        },
        { path: 'title', label: 'Title', content: movie => <td>{ movie.title }</td>},
        { path: 'year', label: 'Year', content: movie => <td>{ movie.year }</td>},
        { path: 'imdbRating', label: 'IMDBRating', content: movie => <td>{ movie.imdbRating }</td>},
        { path: 'myRating', label: 'MyRating', content: movie => <td onClick = { () => onClickRating(movie.title) }>
            { movie.myRating ? <i class="bi bi-star-fill"></i> : <i class="bi bi-star"></i> }</td>
        },
    ] 
    return ( 
        <Table 
            items={ movies }
            columns={ columns }
            onSort={ onSort }
            sortColumn = { sortColumn }
        />
    );
}

export default MoviesTable;