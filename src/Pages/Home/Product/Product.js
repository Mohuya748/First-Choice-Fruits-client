import React from 'react';

const Product = ({ product }) => {
    const { name, img, price, description, Supplier, Quantity } = product;
    return (
        <div className="col col-sm-12 col-lg-4 g-4">
            <div className="col">
                <div className="card h-100">
                    <img src={img}className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">Price: {price}</p>
                            <p className="card-text">Description: {description}</p>
                            <p className="card-text">Supplier: {Supplier}</p>
                            <p className="card-text">Quantity: {Quantity}</p>
                        </div>
                </div>
            </div>
            </div>
            );
};

            export default Product;