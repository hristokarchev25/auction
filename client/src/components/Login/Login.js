import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./Login.css";
import { loginUser } from "../_actions/user_actions";
import { useDispatch } from "react-redux";

function Login({
    history
}) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const logUser = (e) => {
        e.preventDefault();
        let dataToSubmit = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        dispatch(loginUser(dataToSubmit))
            .then((res)=>{
                if (res.payload.loginSuccess) {
                    window.localStorage.setItem("userId", res.payload.userId);
                    history.push("/");
                  } else {
                    console.log("Unable to proceed, please check your Account and Password again");
                  }
            })
            .catch((err)=>console.log("Please check your Input Fields and Password again"));

    }
////////
    return (
        <div className="login">

            <div className="login__container">
                <h1>Sign-in</h1>

                <form onSubmit={logUser}>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Type your E-mail!"/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Type your password!" />

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

export default Login;
