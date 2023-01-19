import React from 'react';

const Heading = ({ title, desc }) => {
    return (
        <section className='heading'>
            <h1 className="heading__title">
                {title}
            </h1>
            <p className="heading__desc">
                {desc}
            </p>
        </section>
    );
};

export default Heading;