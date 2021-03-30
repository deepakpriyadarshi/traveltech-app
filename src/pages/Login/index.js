import React from "react";
import { Link } from "react-router-dom";

import loginSVG from "../../assets/images/login.svg";

import "./index.css";

function Login() {
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
                        <input type="email" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="text-right">
                        <button className="btn btn-danger mr-5">Reset</button>
                        <button className="btn btn-success">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
