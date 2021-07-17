import React from 'react'
import { Link } from 'react-router-dom';
import "./Error.css";
function Error() {
    return (
        <div className="error__container">
            <Link to="/" className="error__text">404</Link>
            <span className="error__caption">Click to Return Home</span>
        </div>
    )
}

export default Error
