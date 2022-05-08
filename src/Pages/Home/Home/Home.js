import React from 'react';
import ProductionProcess from '../../ProductionProcess/ProductionProcess';
import UsersInfo from '../../UsersInfo/UsersInfo';
import Banner from '../Banner/Banner'
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ProductionProcess></ProductionProcess>
            <UsersInfo></UsersInfo>
        </div>
    );
};

export default Home;