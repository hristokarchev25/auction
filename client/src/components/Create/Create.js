import React from 'react'
import './Create.css'
function Create() {
    return (
        <div className="create">
            <div className="create__container">
                <h1>Start an auction by adding a product</h1>

                <form>
                    <h5>Name of product</h5>
                    <input type="text" />

                    <h5>Description</h5>
                    <input type="textarea" />

                    <h5>Price</h5>
                    <input type="text" />

                    <h5>Image</h5>
                    <input type="text" />

                    <button className="create__btn">Create product</button>
                </form>

            </div>
        </div>
    )
}

export default Create
