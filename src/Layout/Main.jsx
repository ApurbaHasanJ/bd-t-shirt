import React from 'react';
import './main.css'
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div className='main'>
            <Header></Header>
            <Outlet/>
            <Toaster></Toaster>
        </div>
    );
};

export default Main;