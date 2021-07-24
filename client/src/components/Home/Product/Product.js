import React from 'react';
import "./Product.css";
import { Link } from 'react-router-dom';

function Product({ id, title, image, price }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image} alt="product" />
            <button>Add a Bid</button>
            <Link to={`/details/product/${id}`}><button className="link__btn">Details</button></Link>
        </div>
    );
}

export default Product;
