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
    const [imageUrlTwo, setImageUrlTwo] = useState("");
    const [imageUrlThree, setImageUrlThree] = useState("");

    const [errors, setErrors] = useState({});

    const createProduct = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            const data = {
                name: e.target.name.value,
                description: e.target.description.value,
                price: e.target.price.value,
                imageUrl: e.target.imageUrl.value,
                imageUrlTwo: e.target.imageUrlTwo.value,
                imageUrlThree: e.target.imageUrlThree.value
            };

            axios.post("/product/add", data)
                .then((res) => {
                    console.log(res);
                    history.push('/');
                })
                .catch(err => console.log(err));
        }
    };

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!name.trim()) {
            errors.rec = "Name of product is  required";
            isValid = false;
        }
        if (!description.trim()) {
            errors.recDes = "Description is required";
            isValid = false;
        }
        if (!price.trim()) {
            errors.recPr = "Price is  required";
            isValid = false;
        }
        if (!imageUrl.trim()) {
            errors.recImg = " Main image is required";
            isValid = false;
        }
        if (!imageUrlTwo.trim()) {
            errors.recImgTwo = "Image is required";
            isValid = false;
        }
        if (!imageUrlThree.trim()) {
            errors.recImgThree = "Image is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div className="create">
            <div className="create__container">
                <h1>Start an auction by adding a product</h1>

                <form onSubmit={createProduct}>
                    <h5>Name of product</h5>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" placeholder="At least 5 characters!" />

                    <h5>Description</h5>
                    <input type="textarea" value={description} onChange={(e) => { setDescription(e.target.value) }} name="description" placeholder="At least 5 characters!" />

                    <h5>Price</h5>
                    <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name="price" placeholder="Must be a number" />

                    <h5>Main image</h5>
                    <input type="text" value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} name="imageUrl" placeholder="Must start with http..." />

                    <h5>Second image</h5>
                    <input type="text" value={imageUrlTwo} onChange={(e) => { setImageUrlTwo(e.target.value) }} name="imageUrlTwo" placeholder="Must start with http..." />

                    <h5>Third image</h5>
                    <input type="text" value={imageUrlThree} onChange={(e) => { setImageUrlThree(e.target.value) }} name="imageUrlThree" placeholder="Must start with http..." />

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
