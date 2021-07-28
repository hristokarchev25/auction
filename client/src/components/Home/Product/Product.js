import React from 'react';
import "./Product.css";
import { Link } from 'react-router-dom';

function Product({ id, title, image, price, rating }) {
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <p>Current price:</p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                </div>
            </div>
            <img src={image} alt="product" />
            <Link to={`/details/product/${id}`}><button className="link__btn">Details</button></Link>
        </div>
    );
}

export default Product;
