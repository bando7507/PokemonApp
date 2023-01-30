import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                <div className='categorie-box' key={id}>
                        <Link to={`/category/${item.url.slice(31,32)}`}>        
                        <div className="categorie_content">
                            <h1>
                                {item.name}
                            </h1>
                        </div>
                        </Link>
                    </div>
            ))}
        </section>
    );
};

export default Categories;