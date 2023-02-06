import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css'
import { slideItem } from '../../assets/data/data';
import './style.css'

const SlidesItem = () => {
    return (
        <section className='slideitem'>
            <div className='slideitemHead'>
            <h1 className='slideitemHead-title'>Laissez parler le créateur qui est en vous</h1>
            <p className='slideitemHead-desc'>Trouvez l’inspiration dont vous avez besoin avec ces collections soigneusement sélectionnées pour booster l’engagement de votre projet.</p>
            </div>

            <Swiper
            spaceBetween={30}                           
            slidesPerView={4.2}
            >
                {slideItem.map((el) => (
                    <SwiperSlide key={el.id}>
                        <div className='slider-box'>
                            <img src={el.image} alt="" />
                            <h1>{el.name}</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default SlidesItem;