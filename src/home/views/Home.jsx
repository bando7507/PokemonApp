import React from 'react';
import Categories from '../categories/Categories';
import ContentHome from '../content/ContentHome';
import Heading from '../heading/Heading';
import Hero from '../hero/Hero';
import Productitems from '../productitems/Productitems';
import SlidesItem from '../slides/SlidesItem';


const Home = () => {
    return (
        <>
        <Hero />  
        <Productitems />
        <Heading title='Explorez les catégories de pokemon que vous aimer' desc='Découvrez le contenu populaire sur PRO et enrichiser vos connaissance sur les Pokemon.' />
        <Categories />
        <SlidesItem />
        <ContentHome />
        </>
    );
};

export default Home;