import { Link } from 'react-router-dom';
import React from 'react'
import "./Login.css"
function Login() {
    return (
        <div className="login">

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" />

                    <h5>Password</h5>
                    <input type="password" />

                    <button className="login__signInBtn">Sign In</button>
                </form>

                <p>
                    By continuing, you agree to Auction System's Conditions of Use and Privacy Notice.
                </p>
                
                <p>
                    New to Auction System? Create an account!
                </p>
                
                <Link to="/register">
                    <button className="login__registerBtn">Create Account</button>
                </Link>

            </div>
        </div>
    )
}

export default Login
