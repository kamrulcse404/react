import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
    render() { 
        const { total, pageCount, activePage, onChangePage  } = this.props;
        const totalPage = Math.ceil(total/pageCount);
        const pages = _.range(1, totalPage+1, 1);
        return (
            <nav>
                <ul class="pagination">
                    <li onClick={ () => activePage > 1 ? onChangePage(activePage - 1) : null } class="page-item"><a class="page-link" style={{ cursor: 'pointer' }}>Previous</a></li>
                    {
                        pages.map((page) => {
                            return(
                                <li onClick={ () => onChangePage(page) } class={ activePage === page ? "page-item active" : "page-item" }><a class="page-link" style={{ cursor: 'pointer' }}>{ page }</a></li>
                            );
                        })
                    }
                    <li class="page-item" onClick={ () => activePage + 1 <= totalPage ? onChangePage(activePage + 1) : null }><a class="page-link" style={{ cursor: 'pointer' }}>Next</a></li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;