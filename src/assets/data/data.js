import { AiFillStar, AiOutlineDownload, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineForum } from 'react-icons/md'
import { BiSupport } from 'react-icons/bi'

export const navlist = [
    {
        id: 1,
      text: "Home",
      path: "/",
      icon: <AiOutlineHome className='pap' />
    },
    {
        id: 2,
      text: "Pokedex",
      path: "/pokedex",
      icon: <AiOutlineDownload className='pap' />
    },
    {
        id: 3,
      text: "Raking",
      path: "/",
      icon: <AiFillStar className='pap' />
    },
    {
        id: 4,
      text: "Forum",
      path: "/",
      icon: <MdOutlineForum className='pap' />
    },
    {
        id: 5,
      text: "Support",
      path: "/",
      icon: <BiSupport className='pap' />
    },
  ]

  export const productItem = [
    {
      id: 1,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
      name: 'clefairy',
      type:"fairy"
    },
    {
      id: 3,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
      name: 'clefairy',
      type:"fairy"
    },
    {
      id: 4,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
      name: 'clefairy',
      type:"fairy"
    },
    {
      id: 5,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png',
      name: 'clefairy',
      type:"fairy"
    },

  ]

 export const slideItem = [
  {
    id: 1,
    name: 'froslass',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/478.svg',
  },
  {
    id: 2,
    name: 'lucario',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/448.svg'
  },

  {
    id: 3,
    name: 'charizard',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg',
  },
  {
    id: 4,
    name: 'scizor',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/212.svg',
  },
  {
    id: 5,
    name: 'zapdos',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/145.svg',
  },
 ]