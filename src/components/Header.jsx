import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

import { navlist } from '../assets/data/data';


const Header = () => {
    const [mobile, setMobile] = useState(false)

    const activeLink = (e) =>{
        console.log(e);
    }
    
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header')        
        if(window.scrollY > 10) {
            header.classList.add('active')
        }else{
            header.classList.remove('active')
        }
    })

    

    return (
        <header>
            <div className="logo">
                <div className="toggle" onClick={() => setMobile(true)}>
                    <button>
                        <AiOutlineMenu />
                    </button>
                </div>
                <Link to={"/"}>Pro</Link>
            </div>
            <nav className='header__menu'>
                {/* <ul className="header__list"> */}
                <ul className={!mobile ? 'header__list' : 'mobile-nav'}>
                    {navlist.map((item) =>(
                        <li onClick={() => activeLink(item.id)} key={item.id}>
                        <Link to={item.path}>
                                {item.icon}
                                {item.text}
                            </Link>
                    </li>
                    ))}
                <AiOutlineClose className='svg' onClick={() => setMobile(false)} />
                </ul>
            </nav>

            <div className="fav__btn">
                <button>
                    Fav...
                    <AiFillStar />
                </button>
            </div>
        </header>
    );
};

export default Header;