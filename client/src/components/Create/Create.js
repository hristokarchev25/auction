import React, { useState } from 'react';
import './Create.css';
import axios from '../../axios';
function Create({
    history
}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [errors, setErrors] = useState({});

    const createProduct = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const data = {
                name: e.target.name.value,
                description: e.target.description.value,
                price: e.target.price.value,
                imageUrl: e.target.imageUrl.value
            };

            axios.post("/product/add", data)
                .then((res) => {
                    console.log(res);
                    history.push('/');
                })
                .catch(err => console.log(err));
        }
    }

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!name.trim()) {
            errors.rec = "Name of product is  required";
            isValid = false;
        }
        if (!description.trim()) {
            errors.recart = "Description is required";
            isValid = false;
        }
        if (!price.trim()) {
            errors.recLyr = "Price is  required";
            isValid = false;
        }
        if (!imageUrl.trim()) {
            errors.recImg = "Image is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    return (
        <div className="create">
            <div className="create__container">
                <h1>Start an auction by adding a product</h1>

                <form onSubmit={createProduct}>
                    <h5>Name of product</h5>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" />

                    <h5>Description</h5>
                    <input type="textarea" value={description} onChange={(e) => { setDescription(e.target.value) }} name="description" />

                    <h5>Price</h5>
                    <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name="price" />

                    <h5>Image</h5>
                    <input type="text" value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} name="imageUrl" />

                    {Object.keys(errors).map((key) => {
                        return <div className="error__container">{errors[key]}</div>
                    })}

                    <button className="create__btn">Create product</button>
                </form>

            </div>
        </div>
    )
}

export default Create;
