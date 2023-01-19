import React, { useEffect, useState } from 'react';

const Categories = () => {

    const [cat, setCat] = useState([])

    useEffect(() =>{
        getData()
    }, [])

    const getData =  async () =>{
        let api = await fetch(` https://pokeapi.co/api/v2/type`)
        let data = await api.json()
        setCat(data.results.slice(0, 9));
    }

    console.log(cat);
    return (
        <section className='categorie'>
            {cat.map((item) =>(
                <div className='categorie-box'>
                    {item.name}
                </div>
            ))}
        </section>
    );
};

export default Categories;