import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "./Register.css";
import { registerUser } from "../_actions/user_actions";
import { useDispatch } from "react-redux";


function Register({
    history
}) {
    //
    const dispatch = useDispatch();
    //const [errors, setErrors] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
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
                   /*  setErrors("Email is already in use, please choose a different Email Address");
                    setTimeout(() => {
                        setErrors("");
                    }, 5000); */
                    console.log("Email is already in use, please choose a different Email Address");
                }
            })
            .catch((err) => {
               /*  setErrors("Please check your Input Fields and Password again");
                setTimeout(() => {
                    setErrors("");
                }, 3000); */
                console.log(err);
            });

    }
    ///
    return (
        <div className="register">
            <div className="register__container">
                <h1>Registration</h1>

                <form onSubmit={createUser} >
                    <h5>Username</h5>
                    <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} name="username" placeholder="Min. 5 symbols!" />

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} name="email" placeholder="Must be in aaa@aaa.aaa format" />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Min. 5 symbols!" />

                    <h5>Repeat Password</h5>
                    <input type="password" value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} name="rePassword" placeholder="Must be same as password" />

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