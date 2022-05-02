import React, { useEffect, useState } from 'react';
import ManageInventory from '../../ManageInventory/ManageInventory';


const ManageInventories = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    })
    return (
        <div className='container'>
            <h1 className='text-center'>Manage Inventories</h1>
            <div className='row text-center'>
                {
                   products.map(product => <ManageInventory key={product.id} product={product}></ManageInventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;