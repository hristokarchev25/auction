import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios';
import "./Details.css";

function Details({ match, history }) {
    const [price, setPrice] = useState("");
    const [errors, setErrors] = useState({});

    const [details, setDetails] = useState([]);
    let id = match.params.productId;
    useEffect(() => {
        async function fetchData() {

            const req = await axios.get(`/product/${id}`);

            setDetails(req.data);
        }

        fetchData();
    }, [id]);

    const addBid = (e) => {
        e.preventDefault();
        const isValid = validateForm();

        if (isValid) {
            const dataToSubmit = {
                price: e.target.price.value,
            };
            console.log(dataToSubmit);
            axios.post(`/product/update/${id}`, dataToSubmit)
                .then((res) => {
                    console.log(res);
                    history.push("/")
                    history.push(`/details/product/${id}`);
                })
                .catch(err => console.log(err));
        };
    };

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!price.trim()) {
            errors.recPr = "Price is  required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="/home.jpg" alt="home" />

                <div className="home__row" >
                    <div className="product">
                        <div className="product__info">
                            <p>{details.name}</p>
                            <p className="details__description">{details.description}</p>
                            <p className="details__date">Active until: {details.date}</p>
                            <p className="product__price">
                                <small>$</small>
                                <strong>{details.price}</strong>
                            </p>
                        </div>
                        <img src={details.imageUrl} alt="product" />

                        <form onSubmit={addBid}>
                            <h5>Price</h5>
                            <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name="price" placeholder="Must be a number" />

                            <button>Add a Bid</button>

                        </form>
                        {Object.keys(errors).map((key) => {
                            return <div className="error__container">{errors[key]}</div>
                        })}
                        <Link to="/"><button className="link__btn">Back</button></Link>
                    </div>

                    <div className="product">
                        <div className="product__info">
                            <p className="more__photos">More photos</p>
                            <hr />
                        </div>
                        <img className="details__img" src={details.imageUrlTwo} alt="product" />

                    </div>

                    <div className="product">
                        <img className="details__img" src={details.imageUrlThree} alt="product" />
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Details;
