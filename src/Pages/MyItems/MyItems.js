
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axios from 'axios';

const MyItems = () => {
    const [user] = useAuthState(auth);
     const [myItems, setMyItems] = useState([]);
   
    useEffect( () => {
       const getItems = async()=> {
           const email = user.email;
           console.log(email)
            const url = `https://enigmatic-tundra-16228.herokuapp.com/myitems?email=${email}`;
            const {data} = await axios.get(url);
            setMyItems(data);
            }
            getItems();
    },[user])
            


    // const handleItemDelete = id => {
    //     const proceed = window.confirm('Deleting Items is Permanent! Think twice before pressing OK...');
    //     if (proceed) {
    //         const url = `http://https://enigmatic-tundra-16228.herokuapp.com/inventory0/item/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.deletedCount > 0) {
    //                     const remaining = myItems.filter(item => item._id !== id);
    //                     setMyItems(remaining);
    //                 }
    //             })
    //     }
    // }


      
    
    return (
        <div className='container'>
        <h2 className='fw-bold text-center mt-5'>{myItems.length}</h2>
        <div className='row  mb-5'>{
            myItems.map(item => <div key={myItems._id}>
                <div className="col col-sm-12 col-lg-4 container mb-4">
                    <div className="card h-100">
                        <img src={myItems.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{myItems.name}</h5>
                            <p className="card-text">Price: {myItems.price}BDT/kg</p>
                            <p className="card-text">Description: {myItems.description}</p>
                            <p className="card-text">Supplier: {myItems.Supplier}</p>
                            <p className="card-text">Quantity: {myItems.Quantity} kg</p>
                            {/* <button onClick={() => handleItemDelete(myItems._id)}>DELETE</button> */}
                        </div>
                    </div>
                </div>

            </div>)
        }</div>
    </div>
    );
};

export default MyItems;