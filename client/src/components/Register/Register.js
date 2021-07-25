import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./Register.css";
import { registerUser } from "../_actions/user_actions";
import { useDispatch } from "react-redux";


function Register({
    history
}) {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            let dataToSubmit = {
                name: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            };

            dispatch(registerUser(dataToSubmit))
                .then((res) => {
                    if (res.payload.success) {
                        console.log(res);
                        history.push("/login");
                    } else {
                        console.log("Email is already in use, please choose a different Email Address");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    const validateForm = () => {
        const errors = {};

        let isValid = true;

        if (!username.trim()) {
            errors.rec = "Username is  required";
            isValid = false;
        }
        if (!email.trim()) {
            errors.recEmail = "Email is required";
            isValid = false;
        }
        if (!password.trim()) {
            errors.recPw = "Password is  required";
            isValid = false;
        }
        if (!rePassword.trim()) {
            errors.recRp = "Confirm password is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    return (
        <div className="register">
            <div className="register__container">
                <h1>Registration</h1>

                <form onSubmit={createUser} >
                    <h5>Username</h5>
                    <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} name="username" placeholder="At least 5 characters!" />

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Must be in aaa@aaa.aaa format!" />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="At least 5 characters!" />

                    <h5>Repeat Password</h5>
                    <input type="password" value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} name="rePassword" placeholder="Must be same as password!" />

                    {Object.keys(errors).map((key) => {
                        return <div className="error__container">{errors[key]}</div>
                    })}

                    <button className="register__registerBtn">Create your account</button>
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

export default Register;