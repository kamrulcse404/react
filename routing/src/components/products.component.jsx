import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {

    const { year, month } = useParams();

    return (
        <>
            <div>Products</div>
            <div>Year : {year}</div>
            <div>Month : {month}</div>
        </>
    );
}

export default Product;