import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MyItems = () => {
    const { myitemsId } = useParams();
    const [items, setItems] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${myitemsId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])
    return (
        <div>
            <h2>this is my items:{items.name}</h2>
        </div>
    );
};

export default MyItems;