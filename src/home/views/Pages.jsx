import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../../components/Header';
import Category from './Category';
import Home from './Home';
import Pokedex from './Pokedex';

const Pages = () => {
    return (
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='/' element={ <Home />} />
                <Route path='/category/:id' element={<Category />} />
                <Route path='/pokedex' element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Pages;