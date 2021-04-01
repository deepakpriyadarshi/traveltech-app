import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import loginSVG from "../../assets/images/login.svg";
import useLogin from "../../hooks/useLogin";
import { authenticateUser } from "../../utils/api/user";
import { saveUserAuthToken } from "../../utils/localstorage";

import "./index.css";

function Login() {
    const [email, password, errorMessage, setEmail, setPassword, validateLoginForm, resetForm] = useLogin();

    const [message, setMessage] = useState("");
    const [loginStatus, setStatus] = useState(0);

    const handleLogin = () => {
        if (validateLoginForm()) {
            setMessage("Please wait while we authenticate you...");
            setStatus(1);

            authenticateUser({ email, password })
                .then((response) => {
                    if (response.status === "notexists") {
                        setMessage("Email Not Registered");
                        setStatus(0);
                    } else if (response.status === "invalid") {
                        setMessage("Incorrect Password");
                        setStatus(0);
                    } else if (response.status === "success") {
                        setMessage("Authentication Successful! Please wait while we redirect to your dashboard");

                        saveUserAuthToken(response.token);

                        setTimeout(() => {
                            setStatus(2);
                        }, 2000);
                    } else {
                        setMessage("Failed To Authenticate");
                        setStatus(0);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const clearForm = () => {
        resetForm();
        setMessage("");
    };

    if (loginStatus === 2) {
        return (
            <Redirect
                to={{
                    pathname: "/dashboard",
                    state: { referrer: "login" },
                }}
            />
        );
    }

    return (
        <div className="container-fluid">
            <div className="row login-section">
                <div className="col-sm-6 col-md-8 login-image-block">
                    <img src={loginSVG} alt="Login" className="login-image" />
                </div>
                <div className="col-sm-6 col-md-4 login-form-block">
                    <h5 className="mt-3 mb-5 pt-2 text-center">
                        Not Registered ? <Link to="/register">Register Here</Link>
                    </h5>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={email} onChange={(ev) => setEmail(ev.target.value)} />
                        <span className="text-danger">{errorMessage.email}</span>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={password} onChange={(ev) => setPassword(ev.target.value)} />
                        <span className="text-danger">{errorMessage.password}</span>
                    </div>

                    <div className="text-center text-danger mt-4 mb-4">{message}</div>

                    {!loginStatus && (
                        <div className="text-right">
                            <button className="btn btn-danger mr-5" onClick={clearForm}>
                                Reset
                            </button>
                            <button className="btn btn-success" onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;
