import { Link } from 'react-router-dom';
import React from 'react'
import "./Register.css"
function Register() {
    return (
        <div className="register">
            <div className="register__container">
                <h1>Registration</h1>

                <form>
                    <h5>Username</h5>
                    <input type="text" />

                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <h5>Repeat Password</h5>
                    <input type="password" />

                    <button className="register__registerBtn">Sign In</button>
                </form>

                <p>
                    Already have an account?
                </p>

                <Link to="/login">
                    <button className="register__loginBtn">Back to Login Page</button>
                </Link>
            </div>
        </div>
    )
}

export default Register
