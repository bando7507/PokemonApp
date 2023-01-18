import React from 'react';
import { productItem } from '../../assets/data/data';
import { AiFillStar } from 'react-icons/ai'

const Productitems = () => {
    return (
        <section className='product-items'>
            <h1 className="product-items__title">
                Favorite
            </h1>
            <div className='productitems'>
                {productItem.map((item) =>(
                    <div className='productitems__box' key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <div className="productitems__text">
                            <span>{item.name}</span>
                            <span>{item.type}</span>
                        </div>

                        <AiFillStar />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Productitems;