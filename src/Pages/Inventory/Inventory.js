import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [])
    return (
        <div className="col col-sm-12 col-lg-4 container g-4 mt-5">
            <div className="card h-100">
                <img src={inventory.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{inventory.name}</h5>
                    <p className="card-text">Price:{inventory.price}BDT/kg</p>
                    <p className="card-text">Description: {inventory.description}</p>
                    <p className="card-text">Supplier: {inventory.Supplier}</p>
                    <p className="card-text">Quantity: {inventory.Quantity} kg</p>
                </div>
            </div>
        </div>
    );
};

export default Inventory;