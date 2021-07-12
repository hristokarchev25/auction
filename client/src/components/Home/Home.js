import React from 'react';
import "./Home.css"
import Product from './Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="/home.jpg" alt="home" />
            </div>

            <div className="home__row">
                <Product />
            </div>
        </div>
    )
}

export default Home
