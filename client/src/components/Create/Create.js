import React, { useState } from 'react'
import './Create.css'
function Create({
    history
}) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const createProduct = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const description = e.target.description.value;
        const price = e.target.price.value;
        const imageUrl = e.target.imageUrl.value;

        console.log(name, description, price, imageUrl);
    }


    return (
        <div className="create">
            <div className="create__container">
                <h1>Start an auction by adding a product</h1>

                <form onSubmit={createProduct}>
                    <h5>Name of product</h5>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} name="name" />

                    <h5>Description</h5>
                    <input type="textarea" value={description} onChange={(e) => { setDescription(e.target.value) }} name="description"/>

                    <h5>Price</h5>
                    <input type="text" value={price} onChange={(e) => { setPrice(e.target.value) }} name="price" />

                    <h5>Image</h5>
                    <input type="text" value={imageUrl} onChange={(e) => { setImageUrl(e.target.value) }} name="imageUrl" />

                    <button className="create__btn">Create product</button>
                </form>

            </div>
        </div>
    )
}

export default Create
