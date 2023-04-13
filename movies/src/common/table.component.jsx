import React from 'react';
import TableHeader from './table-header.cpmponent';
import TableBody from './table-body.component';

const Table = ({ columns, items, onSort, sortColumn }) => {
    return ( 
        <table class="table">
            <TableHeader 
                columns = { columns }
                onSort = { onSort }
                sortColumn = { sortColumn }
            />
            <TableBody 
                items={ items }
                columns = { columns }
            />
        </table>
    );
}

export default Table;