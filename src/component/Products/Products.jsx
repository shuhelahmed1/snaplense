// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=> res.json())
        .then(data=> setProducts(data))

    },[])
    const params = useParams();
    return (
        <div>
            <h1>Products no {params.id}</h1>
            <p>total products {products.length}</p>
        </div>
    );
};

export default Products;