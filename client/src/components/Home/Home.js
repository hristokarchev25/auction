import React, { useEffect, useState } from 'react';
import "./Home.css"
import axios from '../../axios';
import Product from './Product/Product';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/product/card");

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
                        <Product key={product._id} title={product.name} price={product.price} image={product.imageUrl} />
                    ))}
                   {/*  <Product id="1213221" title="Mitshubisi Carisma" price={1029.99} image="https://cdn3.focus.bg/autodata/i/mitsubishi/carisma/carisma/large/2ad867da7cb9dedbedd099fceeadcd28.jpg" /> */}
                    {/* <Product id="1212312" title="Byron Statics Vinyl Record Player" price={199.89} image="https://images-na.ssl-images-amazon.com/images/I/61aCWupmRrL._AC_SL1394_.jpg" />
                    <Product id="1224421" title="Kobe Bryant Signed Jersey" price={300} image="https://s3.amazonaws.com/charitycdn/cache/resizedcrop-a007895a2e6db30f4bb58e5e46ba2b0f-800x800.jpg" /> */}
                </div>
            </div>
        </div>
    )
}

export default Home;
