import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import registerSVG from "../../assets/images/register.svg";
import useRegister from "../../hooks/useRegister";
import { registerUser } from "../../utils/api/user";
import { saveUserAuthToken } from "../../utils/localstorage";

import "./index.css";

function Register() {
    const [
        firstName,
        lastName,
        email,
        dob,
        password,
        confirmPassword,
        errorMessage,
        setFirstName,
        setLastName,
        setEmail,
        setDob,
        setPassword,
        setConfirmPassword,
        validateRegistrationForm,
        resetForm,
    ] = useRegister();

    const [message, setMessage] = useState("");
    const [regStatus, setStatus] = useState(0);

    const handleRegistration = () => {
        if (validateRegistrationForm()) {
            setMessage("Please wait while we register you...");
            setStatus(1);

            registerUser({ firstName, lastName, email, dob, password, confirmPassword })
                .then((response) => {
                    if (response.status === "exists") {
                        setMessage("Email Already Registered");
                    } else if (response.status === "success") {
                        setMessage("Registered Successfully! Please wait while we redirect to your dashboard");

                        saveUserAuthToken(response.token);

                        setTimeout(() => {
                            setStatus(2);
                        }, 2000);
                    } else {
                        setMessage("Failed To Register");
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

    if (regStatus === 2) {
        return (
            <Redirect
                to={{
                    pathname: "/dashboard",
                    state: { referrer: "register" },
                }}
            />
        );
    }

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
                        <input
                            type="text"
                            className="form-control"
                            value={firstName}
                            onChange={(ev) => setFirstName(ev.target.value)}
                            disabled={regStatus}
                        />
                        <span className="text-danger">{errorMessage.firstName}</span>
                    </div>

                    <div className="form-group">
                        <label>
                            Last Name <span className="text-danger">*</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={lastName}
                            onChange={(ev) => setLastName(ev.target.value)}
                            disabled={regStatus}
                        />
                        <span className="text-danger">{errorMessage.lastName}</span>
                    </div>

                    <div className="form-group">
                        <label>
                            Email <span className="text-danger">*</span>
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(ev) => setEmail(ev.target.value)}
                            disabled={regStatus}
                        />
                        <span className="text-danger">{errorMessage.email}</span>
                    </div>

                    <div className="form-group">
                        <label>DOB</label>
                        <input
                            type="date"
                            className="form-control"
                            value={dob}
                            onChange={(ev) => setDob(ev.target.value)}
                            disabled={regStatus}
                        />
                        <span className="text-danger">{errorMessage.dob}</span>
                    </div>

                    <div className="form-group">
                        <label>
                            Password <span className="text-danger">*</span>
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(ev) => setPassword(ev.target.value)}
                            disabled={regStatus}
                        />
                        <span className="text-danger">{errorMessage.password}</span>
                    </div>

                    <div className="form-group">
                        <label>
                            Confirm Password <span className="text-danger">*</span>
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(ev) => setConfirmPassword(ev.target.value)}
                            disabled={regStatus}
                        />
                        <span className="text-danger">{errorMessage.confirmPassword}</span>
                    </div>

                    <div className="text-center text-danger mt-4 mb-4">{message}</div>

                    {!regStatus && (
                        <div className="text-right">
                            <button className="btn btn-danger mr-5" onClick={clearForm}>
                                Reset
                            </button>
                            <button className="btn btn-success" onClick={handleRegistration}>
                                Register
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Register;
