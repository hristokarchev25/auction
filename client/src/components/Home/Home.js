import React, { useEffect, useState } from 'react';
import "./Home.css"
import axios from '../../axios';
import Product from './Product/Product';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/product/all");

            setProducts(req.data);
        }

        fetchData();
    }, []);

    return (
        <div className="home" >
            <div className="home__container">
                <img className="home__image" src="/home.jpg" alt="home" />
                <div className="home__row" >
                    {products.map((product) => (
                        <Product key={product._id} id={product._id} title={product.name} price={product.price} image={product.imageUrl} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;
