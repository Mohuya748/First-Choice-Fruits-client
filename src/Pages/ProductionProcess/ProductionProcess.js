import React from 'react';

const ProductionProcess = () => {
    return (
        <div>
        <h2 className='container text-center text-success'>Production Process</h2>
        <div className=" container d-flex flex-wrap">
            

        <div className="card h-100 m-3">
            <img src='https://media.istockphoto.com/photos/apple-harvest-picture-id517746725?b=1&k=20&m=517746725&s=170667a&w=0&h=Dlw0mah6WOlo50G_ZPfaPdR-_FJv1CkyWU1uZzGpaFU=' className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Raw Fruits</h5>
            </div>
        </div>
        <div className="card h-50 m-3 ">
            <img src='https://media.istockphoto.com/photos/transport-of-freshly-harvested-apples-in-a-food-factory-for-sale-picture-id1250254976?b=1&k=20&m=1250254976&s=170667a&w=0&h=c1C6W0GTTj0ZNEXK9vbxFigHWVRMaNrZIDhFLkmH2vg=' className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Sorting</h5>
            </div>
        </div>
        <div className="card h-100 m-3">
            <img src='https://media.istockphoto.com/photos/acai-fruits-being-sieved-and-prewashed-for-pulp-extraction-picture-id1346006687?b=1&k=20&m=1346006687&s=170667a&w=0&h=HKUHO-KEDccYJjfHzKGmaB4lryPNn6CY84KW0-KafgM=' className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Cleaning</h5>
            </div>
        </div>
        <div className="card h-100 m-3">
            <img src='https://images.unsplash.com/photo-1651525670104-db1d3b13c3d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGZydWl0cyUyMGZhY3Rvcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Encasement</h5>
            </div>
        </div>
    </div>
    </div>
    );
};

export default ProductionProcess;