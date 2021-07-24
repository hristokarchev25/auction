import React, { useEffect, useState } from 'react';
import axios from '../../axios';
import "./Details.css";

function Details({ match }) {
    const [details, setDetails] = useState([]);
    let id = match.params.productId;
    useEffect(() => {
        async function fetchData() {

            const req = await axios.get(`/product/${id}`);

            setDetails(req.data);
        }

        fetchData();
    }, [id]);

    return (
        <div className="details">
            <div className="details__row">
                <div className="product__details">
                    <div className="details__info">
                        <p>{details.name}</p>
                        <p className="details__price">
                            <small>$</small>
                            <strong>{details.price}</strong>
                        </p>
                    </div>

                    <img src={details.imageUrl} alt="product" />

                    <button>Add a Bid</button>

                </div>

            </div>
        </div>
    )
}

export default Details;
