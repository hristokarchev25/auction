import React from 'react'
import { Link } from 'react-router-dom';
import "./ErrorTwo.css";

function ErrorTwo() {
    return (
        <div className="err__container">
            <h1>4</h1>
            <h1>0</h1>
            <h1>4</h1>
            <Link to="/">
                <span className="error__caption">Click to Return Home</span>
            </Link>

        </div>
    )
}

export default ErrorTwo
