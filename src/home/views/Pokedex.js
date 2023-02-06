import React, { useEffect } from 'react';
import { useState } from 'react';
import Heading from '../heading/Heading';
import { AiOutlineClose} from 'react-icons/ai';


const Pokedex = () => {
    const [loadPokemon, setLoadPokemon] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=0&offset=20`)
    const [poke, setPoke] = useState([])
    const [pokes, setPokes] = useState([])
    const [pokesFilter, setPokesFilter] = useState([])

    const [visibleModal, setVisibleModal] = useState(false)

    const arr = []
      const getApiPoke = async (el) =>{
        const dataApi = await fetch(loadPokemon)
        const api = await dataApi.json()
        arr.push(api)
        setPoke(arr)
        getAllPokek(api.results)
    };

    const getAllPokek = (res) =>{
        res.map(async(el) =>{
            const api = await fetch(el.url)
            const apiData = await api.json()
            setPokes(state => [...state, apiData])
        })
    }

    let curentEl = ''
    const handlePageClick = async () =>{
        poke.map((el) => curentEl = el.next)
        setLoadPokemon(curentEl);
    }

    const getOnlyPoke = (id) =>{
        const lolo = []
        lolo.push(pokes.find((e) => e.id === id))
        setPokesFilter(lolo)
    }

    const showModal = () =>{
        setVisibleModal(true)
    }

    const hiddenModal = () =>{
        setVisibleModal(false)
    }

    useEffect(() =>{
        getApiPoke()
    }, [loadPokemon])
  


    return (
        <section>
            <div className='pokedex'>
                <Heading title='Search your favorites Pokemon' desc='Lorem, ipsum dolor sit amet consectetur adipisi praesentium ratione culpa fugit eligendi saepe tempora facilis ipsa.' />
            </div>

            <div className='poke_Items'>
                {pokes.map((el, id) =>(
                    <div className='pokeItems_box'
                        key={id}
                        onClick={() => {
                            getOnlyPoke(el.id)
                            showModal()
                        }}
                        >
                            <img src={el.sprites.other.dream_world.front_default} alt="" />
                            <h2 className="pokeItems_box-name">
                                {el.name}
                            </h2>
                            <div className="pokeItems_box-btn">
                                <span className='btn_1'>{el.types[0].type.name}</span>
                            </div>
                        </div>    
                    ))}
            </div>
                <div onClick={() => handlePageClick()} className="more">
                    <span>Plus</span> 
                </div>

                {visibleModal && 
                <div className='poke_card'>
                    {pokesFilter.map((el) => (
                        <div className='onClickImage' key={el.id}>
                           <div className='onClickImage_box'>
                            <img src={el.sprites.other.dream_world.front_default} alt="" />
                                <span>#{el.id}</span>
                                <h2 className="name">{el.name}</h2>
                                <span className='btn'>{el.types[0].type.name}</span>
                                <h3 className="entry">
                                    Pokedex Entry
                                </h3>

                                <p className="pokemon_desc">
                                    Lorem ipsum dolor 
                                </p>

                                <h3 className="ability">
                                    Abiliies
                                </h3>

                                {el.abilities && el.abilities.length === 1 &&
                                <div className='abilities'>
                                    {el.abilities[0].ability.name}
                                </div>
                                }
                                {el.abilities && el.abilities.length === 2 &&
                                <div className='abilities'>
                                    {el.abilities[0].ability.name}, {el.abilities[1].ability.name}
                                </div>
                                }
                                {el.abilities && el.abilities.length === 3 &&
                                <div className='abilities'>
                                    {el.abilities[0].ability.name}, {el.abilities[1].ability.name}, {el.abilities[2].ability.name}
                                </div>
                                }
                                <div className='abilities_flex'>
                                    <h3>Height</h3>
                                    <h3>Weight</h3>
                                </div>
                                
                                <div className='abilities_flex-content'>
                                    <div className='height'>{el.height}m</div>
                                    <div className='weight'>{el.weight}Kg</div>
                                </div>

                                <AiOutlineClose onClick={() => hiddenModal()} />
                           </div>
                        </div>
                    ))}
                </div>
                }
        </section>
    );
};

export default Pokedex;

 