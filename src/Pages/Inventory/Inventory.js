import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Inventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    const [reload, setIsReload] = useState(true);


    console.log(inventory)


    useEffect(() => {
        const url = `https://enigmatic-tundra-16228.herokuapp.com/inventory/${id}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));
    }, [reload])


    const handleUpdateUser = (event) => {
        event.preventDefault();
        const quantity = parseInt(event.target.Quantity.value) + parseInt(inventory.Quantity);
        const updateItem = { quantity };

        // sending data for adding quantity
        const url = `https://enigmatic-tundra-16228.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                event.target.reset();
                console.log("success", data);
                alert('user updated successfully!!!');
                window.location.reload();
                console.log(url);
            })

    }
    const quantityLess = event => {
        event.preventDefault();
        const quantity = parseInt(inventory.Quantity) - 1;
        const updateItem = { quantity };

        // sending data for adding quantity
        const url = `https://enigmatic-tundra-16228.herokuapp.com/inventory/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log("success", data);
                alert('user updated successfully!!!');
                window.location.reload();
                console.log(url);
            })
    }
    const navigate = useNavigate();
    const handleItem = () =>{
        const path =`/manageinventory`;
        navigate(path);
    }

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
                    <p></p>

                </div>
            </div >
            <div className='d-flex'>
                <form onSubmit={handleUpdateUser} className='d-flex'>
                    <input type="number" placeholder='restock quantity' name='Quantity' className='m-3 p-2 border border-danger rounded ' required />
                    <br></br>
                    <input type="submit" value="Restock" className='m-3 p-2 bg-danger border border-white text-white rounded' />
                </form>
                <button onClick={quantityLess} className='m-3 p-2 bg-danger border border-white text-white rounded'>Delivered</button>
            </div>
            <div className='text-center'>
            <button onClick={handleItem} className='text-green-600 font-bold my-4 p-2 bg-white border border-danger text-danger rounded'>Manage Inventories</button>
            </div>

        </div>
    );
};

export default Inventory;