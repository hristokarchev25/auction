import React from 'react';
import "./Details.css";
function Details() {
    return (
        <div className="details">
            <div className="details__row">
                <div className="product__details">
                    <div className="details__info">
                        <p>aaaaa</p>
                        <p className="details__price">
                            <small>$</small>
                            <strong>1111</strong>
                        </p>
                    </div>

                    <img src="https://cdn3.focus.bg/autodata/i/mitsubishi/carisma/carisma/large/2ad867da7cb9dedbedd099fceeadcd28.jpg" alt="product" />
                    
                    <button>Add a Bid</button>

                </div>

            </div>
        </div>
    )
}

export default Details;
