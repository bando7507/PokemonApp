import React from 'react';

import { SiPokemon } from 'react-icons/si'
import { BiJoystickButton } from 'react-icons/bi'
import { GiPokerHand } from 'react-icons/gi'
import { MdOutlineFitScreen, MdCatchingPokemon } from 'react-icons/md'
import { TfiCup } from 'react-icons/tfi'
import { HiOutlineNewspaper } from 'react-icons/hi'


const Categoryhead = () => {
  



    return (
        <section className='categoryhead'>
            <div className='categoryhead_box'>
                <ul className='categoryhead_list'>
                    <li className='categoryhead_item'>
                        <SiPokemon className='categoryhead_item_home' />
                        {/* Home */}
                    </li>
                    <li className='categoryhead_item'>
                        <MdCatchingPokemon />
                        Pokedex
                    </li>
                    <li className='categoryhead_item'>
                        <BiJoystickButton />
                        Videogames
                    </li>
                    <li className='categoryhead_item'>
                        <GiPokerHand />
                        GCC Pokemon
                    </li>
                    <li className='categoryhead_item'>
                        <MdOutlineFitScreen />
                        TV Pokemon
                    </li>
                    <li className='categoryhead_item'>
                        <TfiCup />
                        Play! Pokemon
                    </li>
                    <li className='categoryhead_item'>
                        <HiOutlineNewspaper />
                        News
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Categoryhead;