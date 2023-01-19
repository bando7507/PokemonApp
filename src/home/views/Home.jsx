import React from 'react';
import Categories from '../categories/Categories';
import Heading from '../heading/Heading';
import Hero from '../hero/Hero';
import Productitems from '../productitems/Productitems';

const Home = () => {
    return (
        <>
        <Hero />  
        <Productitems />
        <Heading title='Explorez les catégories de pokemon que vous aimer' desc='Découvrez le contenu populaire sur PRO et enrichiser vos connaissance sur les Pokemon.' />
        <Categories />
        </>
    );
};

export default Home;