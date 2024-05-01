// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
    const params = useParams();
    return (
        <div>
            <h1>Products no {params.id}</h1>
        </div>
    );
};

export default Products;