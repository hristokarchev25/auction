import React from 'react'
import "./Product.css"
function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>Mitsubishi Carisma</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>1029.99</strong>
                </p>
            </div>
            <img src="https://cdn3.focus.bg/autodata/i/mitsubishi/carisma/carisma/large/2ad867da7cb9dedbedd099fceeadcd28.jpg" alt="product" />
            <button>Add a Bid</button>
        </div>
    )
}

export default Product
