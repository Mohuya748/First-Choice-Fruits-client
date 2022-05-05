import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, _id, img, price, description, Supplier, Quantity } = product;
    const navigate = useNavigate();

    const navigateToItemDetail = id => {
        navigate(`/inventory/${_id}`);
    }
   


    return (
        <div className="col col-sm-12 col-lg-4 g-4">

            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}BDT/kg</p>
                    <p className="card-text">Description: {description}</p>
                    <p className="card-text">Supplier: {Supplier}</p>
                    <p className="card-text">Quantity: {Quantity} kg</p>
                    <button onClick={() => navigateToItemDetail(_id)} className='bg-primary m-2 p-2'>Update</button>

                </div>

            </div>
        </div>
    );
};

export default Product;