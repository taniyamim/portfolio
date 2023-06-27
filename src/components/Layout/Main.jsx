import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import { Helmet } from 'react-helmet';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Helmet>
            <title>Taniya || Portfolio</title>
                
            </Helmet>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;