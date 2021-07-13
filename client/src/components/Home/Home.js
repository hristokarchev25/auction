import React from 'react';
import "./Home.css"

import Product from './Product/Product';

function Home() {
    return (
        <div className="home" >
            <div className="home__container">
                <img className="home__image" src="/home.jpg" alt="home" />
                <div className="home__row" >
                    <Product />
                    <Product />
                    <Product />
                    
                </div>
            </div>
        </div>
    )
}

export default Home
