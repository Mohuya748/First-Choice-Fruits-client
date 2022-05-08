import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    
    const onSubmit = (data,event) => {
        console.log(data);
        const url = `https://enigmatic-tundra-16228.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(result =>{
            console.log(result);
            alert('item added successfully!!!');
            event.target.reset();

            
        } )
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Add your items here!</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='email' value={user.email} type="email" {...register("email")}  />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Supplier' type="text" {...register("Supplier")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("Quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add items" />
            </form>
        </div>
    );
};

export default AddItems;