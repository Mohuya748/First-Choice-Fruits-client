import React from 'react';
import useInventory from '../../Hooks/useInventory';


const ManageInventories = () => {
    const [inventory, setInventory] = useInventory();

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete the item?');
        if(proceed){
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
    return (
        <div className='container'>
            <h1 className='text-center'>Manage Inventories</h1>
            <div className='row text-center'>
                {
                   inventory.map(inventory => <div key={inventory._id}>
                    <h5>{inventory.name} <button onClick={() => handleDelete(inventory._id)}>DELETE</button></h5>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageInventories;