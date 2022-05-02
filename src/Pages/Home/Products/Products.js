import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    })
    const navigate = useNavigate();
    
    const handleItem = () =>{
        const path =`/manageinventories`;
        navigate(path);
    }
  
    return (
        <div className='container'>
            <h1 className='text-center'>Inventory Items</h1>
            <div className='row text-center'>
                {
                    products.slice(0,6).map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <button onClick={handleItem} className='text-green-600 font-bold m-5'>see more...</button>
        </div>
    );
};

export default Products;