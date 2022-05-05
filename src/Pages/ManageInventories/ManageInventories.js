import React from 'react';
import useInventory from '../../Hooks/useInventory';
import { useNavigate } from 'react-router-dom';


const ManageInventories = () => {
    const [inventory, setInventory] = useInventory();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete the item?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventory.filter(service => service._id !== id);
                    setInventory(remaining);
                })
        }
    }
    const navigate = useNavigate();

    const handleAddItem = () => {
        const path = `/additem`;
        navigate(path);
    }
    return (
        <div>
            <h1 className='text-center'>Manage Inventories</h1>
            <div className='text-center'>
            <button onClick={handleAddItem} className='text-green-600 font-bold m-5'> Add new Items</button>
            </div>
           

            <div>
                {
                    inventory.map(inventory => <div key={inventory._id}>
                        <div className="col col-sm-12 col-lg-4 container mb-4">
                            <div className="card h-100">
                                <img src={inventory.img} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{inventory.name}</h5>
                                    <p className="card-text">Price: {inventory.price}BDT/kg</p>
                                    <p className="card-text">Description: {inventory.description}</p>
                                    <p className="card-text">Supplier: {inventory.Supplier}</p>
                                    <p className="card-text">Quantity: {inventory.Quantity} kg</p>
                                    <button onClick={() => handleDelete(inventory._id)}>DELETE</button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;