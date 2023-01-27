import React, { useEffect, useState } from 'react';
// import { MdCatchingPokemon } from 'react-icons/md'
import { useParams } from 'react-router-dom';
const CategoryItems = () => {

    const param = useParams()
    const [pokemon, setPokemom] = useState([])
    const [findPokemon, setFindPokemon] = useState([])



    const getData2 = async () =>{
        const api = await fetch(`https://pokeapi.co/api/v2/type/${param.id}`)
        const dataApi = await api.json()
        getPokemon(dataApi.pokemon.slice(0, 10))
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


    const findPoke = (id) =>{
        const lolo = []
        lolo.push(pokemon.find(el => el.id === id))
        setFindPokemon(lolo)
        // console.log(findPokemon);
    }


    return (
        <section className='categoryItems'>
            <div className='categoryItems_content'>
                {/* <div className='categoryItems_form'>
                    <div className="form">
                        <form action="">
                            <input type="text" placeholder='Search your Pokemon' />
                            <MdCatchingPokemon />                            
                        </form>
                    </div>
                </div> */}
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
                    {pokemon.map((item, id) => (        
                            <div className='categoryItems_box' onClick={() => {findPoke(item.id)}}
                            key={id}
                            >
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
                {findPokemon.map((el, id) =>(
                    <div className='categoryItems_content-img' key={id}>
                        <img src={el.sprites.other.dream_world.front_default} alt="" />
                        <span>#{el.id}</span>
                        <h2 className="name">{el.name}</h2>
                        <span className='btn'>{el.types[0].type.name}</span>
                        <h3 className="entry">
                            Pokedex Entry
                        </h3>

                        <p className="pokemon_desc">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi earum minima tempore ipsum. Numquam tempore quod eos 
                        </p>

                        <h3 className="ability">
                            Abiliies
                        </h3>

                        <div className='abilities'>
                            {el.abilities[0].ability.name}, {el.abilities[1].ability.name}, {el.abilities[2].ability.name}
                        </div>

                        <div className='abilities_flex'>
                            <h3>Height</h3>
                            <h3>Weight</h3>
                        </div>
                        
                        <div className='abilities_flex-content'>
                            <div className='height'>{el.height}m</div>
                            <div className='weight'>{el.weight}Kg</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CategoryItems;