import React from 'react';

const TableBody = ({ columns, items }) => {
    return ( 
        <tbody>
            {
                items.map(item => {
                    return (
                        <tr>
                            {
                                columns.map(column => column.content(item))
                            }
                        </tr>
                    );
                })
            }
        </tbody>
    );
}

export default TableBody;