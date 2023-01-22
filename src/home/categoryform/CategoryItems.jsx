import React, { useEffect, useState } from 'react';
import { MdCatchingPokemon } from 'react-icons/md'
import { useParams } from 'react-router-dom';
const CategoryItems = () => {

    const param = useParams()
    // const [poke, setPoke] = useState([])
    const [pokemon, setPokemom] = useState([])



    const getData2 = async () =>{
        const api = await fetch(`https://pokeapi.co/api/v2/type/${param.id}`)

        const dataApi = await api.json()
        // setPoke(dataApi.pokemon.slice(0, 15))
        getPokemon(dataApi.pokemon.slice(0, 35))
    } 

    const getPokemon = (res) =>{
        res.map( async(el) => {
            const res = await fetch(`${el.pokemon.url}`)
            const resData = await res.json()
            setPokemom(state => [...state, resData])
        })
    }



    useEffect(() =>{
        getData2()
    }, [])
    return (
        <section className='categoryItems'>
            <div className='categoryItems_content'>
                <div className='categoryItems_form'>
                    <div className="form">
                        <form action="">
                            <input type="text" placeholder='Search your Pokemon' />
                            <MdCatchingPokemon />                            
                        </form>
                    </div>
                </div>

                <div className="categoryItems_filter">
                    <div className='categoryItems_filter-1'>Ascending</div>
                    <div className='categoryItems_filter-2'>
                        <p>from</p>
                        <span>386</span>
                        <p>to</p>
                        <span>893</span>
                    </div>
                </div>


                <div className='categoryItems_items'>
                    {pokemon.map((item) => (
                        <div className='categoryItems_box'>
                            <img src={item.sprites.other.dream_world.front_default} alt="" />

                            <h2 className="categoryItems_box-name">
                                {item.name}
                            </h2>
                            <div className="categoryItems_box-btn">
                                <span className='btn_1'>{item.types[0].type.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='categoryItems_content'>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg" alt="" />
            </div>
        </section>
    );
};

export default CategoryItems;