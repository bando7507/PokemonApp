import React from 'react';
import bgdeo from '../../assets/bg/bg-deo.mp4'
import Zoom from 'react-reveal/Zoom';

const Hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted plays-playsInline className='bg-deo'>
                <source src={bgdeo} type='video/mp4'/>
            </video>
            <Zoom left>
            <div className="hero__text">
                <div className="hero__title">Pekomon Revolution Online</div>
                <p className="hero__desc">The best app for check your favorite poke...n</p>
                <button className='hero__btn'>More</button>
            </div>
            </Zoom>
        </div>
    );
};

export default Hero;