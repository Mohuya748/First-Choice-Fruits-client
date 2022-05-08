import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://enigmatic-tundra-16228.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setProducts(data));
    })
    const navigate = useNavigate();
    
    const handleItem = () =>{
        const path =`/manageinventory`;
        navigate(path);
    }
  
    return (
        <div className='container'>
            <h1 className='text-center text-success'>Inventory Items</h1>
            <div className='row text-center'>
                {
                    products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <button onClick={handleItem} className='text-green-600 font-bold my-5 p-2 bg-white border border-danger text-danger rounded'>Manage Inventories</button>
        </div>
    );
};

export default Products;