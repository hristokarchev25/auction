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
    const [errors, setErrors] = useState("");

    const logUser = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            let dataToSubmit = {
                email: e.target.email.value,
                password: e.target.password.value
            };

            dispatch(loginUser(dataToSubmit))
                .then((res) => {
                    if (res.payload.loginSuccess) {
                        window.localStorage.setItem("userId", res.payload.userId);
                        console.log(res);
                        history.push("/");
                    } else {
                        console.log("Unable to proceed, please check your Account and Password again");
                    }
                })
                .catch((err) => console.log("Please check your Input Fields and Password again"));
        };
    };

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!email.trim()) {
            errors.recEmail = "Email is required";
            isValid = false;
        }
        if (!password.trim()) {
            errors.recPw = "Password is  required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div className="login">

            <div className="login__container">
                <h1>Sign-in</h1>

                <form onSubmit={logUser}>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Type your E-mail!" />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Type your password!" />

                    {Object.keys(errors).map((key) => {
                        return <div className="error__container">{errors[key]}</div>
                    })}

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
