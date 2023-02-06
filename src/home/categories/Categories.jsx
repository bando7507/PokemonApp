import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal'

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
            {cat.map((item, id) =>(
                <Link to={`/category/${item.url.slice(31,32)}`} className='categorie-box' key={id}>        
                <Fade left>
                        <div className="categorie_content">
                            <h1>
                                {item.name}
                            </h1>
                        </div>
                </Fade>
                    </Link>
            ))}
        </section>
    );
};

export default Categories;