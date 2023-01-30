import React, { useEffect } from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

import Heading from '../heading/Heading';

const Pokedex = () => {
    const [loadPokemon, setLoadPokemon] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=0&offset=20`)
    const [poke, setPoke] = useState([])


    const arr = []
      const getApiPoke = async (el) =>{
        const dataApi = await fetch(loadPokemon)
        const api = await dataApi.json()
        arr.push(api)
        setPoke(arr)
    };


    let curentEl = ''
    const handlePageClick = async () =>{
        poke.map((el) =>{
            curentEl = el.next
        })
        setLoadPokemon(curentEl);
        console.log(loadPokemon);
    }


    useEffect(() =>{
        getApiPoke()
    }, [loadPokemon])
  


    return (
        <section className='pokedex'>
            <Heading title='Search your favorites Pokemon' desc='Lorem, ipsum dolor sit amet consectetur adipisi praesentium ratione culpa fugit eligendi saepe tempora facilis ipsa.' />
{/* 
            {poke.map((el, id) =>(
                <div>{el.name}</div>
            ))} */}

            <ReactPaginate 
            previousLabel={'prev'}
            pageCount={10}
            marginPagesDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            />
        </section>
    );
};

export default Pokedex;

  // const [poke, setPoke] = useState([])
    // const [pagination, setPagination] = useState([])
    // const [paginationLnk, setPaginationLink] = useState('')
    //     const getLink = async () =>{
    //     const dataApi = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=0&offset=20`)
    //     const api = await dataApi.json()
    //     setPagination(api)
    //     clee(api.next)
        
    // }

    // const clee = (e) =>{
    //     setPaginationLink(e)
    //     console.log(paginationLnk);
    // }

    // const getApiPoke = async () =>{
    //     const dataApi = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=0&offset=20`)
    //     const api = await dataApi.json()
    //     // setPoke(api) 
    //     getApiPokeItem(api.results)
    // }

    // const getApiPokeItem = (res) =>{
    //     res.map( async (el) => {
    //         const res = await fetch(el.url)
    //         const resData = await res.json()
    //         setPoke(state => [...state, resData])
    //     })
    // }