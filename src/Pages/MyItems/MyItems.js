import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    
    useEffect( () => {
      
        const myItems  = async() =>{
            const email = user.email;
            const url = `https://enigmatic-tundra-16228.herokuapp.com/additem?email=${email}`;
            try{
                const {data} = await axiosPrivate.get(url);
                setItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        myItems();

    }, [user])
    return (
        <div>
            <h2>this is my items:{items.length}</h2>
        </div>
    );
};

export default MyItems;