import React from "react";
import { Link } from "react-router-dom";

import registerSVG from "../../assets/images/register.svg";

import "./index.css";

function Register() {
    return (
        <div className="container-fluid">
            <div className="row register-section">
                <div className="col-sm-6 col-md-8 register-image-block">
                    <img src={registerSVG} alt="Register" className="register-image" />
                </div>
                <div className="col-sm-6 col-md-4 register-form-block">
                    <h5 className="mt-3 mb-5 pt-2 text-center">
                        Already Registered ? <Link to="/">Login Here</Link>
                    </h5>

                    <div className="form-group">
                        <label>
                            First Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>
                            Last Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>
                            Email <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>DOB</label>
                        <input type="date" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>
                            Password <span className="text-danger">*</span>
                        </label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label>
                            Confirm Password <span className="text-danger">*</span>
                        </label>
                        <input type="password" className="form-control" />
                    </div>

                    <div className="text-right">
                        <button className="btn btn-danger mr-5">Reset</button>
                        <button className="btn btn-success">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
