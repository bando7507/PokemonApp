import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Home from './Home';

const Pages = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Pages;