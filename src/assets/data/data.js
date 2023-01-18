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
      text: "Download",
      path: "/",
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