import React, { Component } from 'react';

class Filter extends Component {

    render() { 
        const { genres, onClickGenre, selectedGenre } = this.props;
        return (
            <div className='col-lg-2'>
                <ul className="list-group">
                {
                    genres.map((genre) => (<li
                        style={{ cursor: 'pointer' }}
                        onClick={ () => onClickGenre(genre.name) }
                        key={ genre.id }
                        className={ selectedGenre === genre.name ?  "list-group-item active" : "list-group-item" }>
                            { genre.name }
                        </li>))
                }
                </ul>
            </div>
        );
    }
}

export default Filter;