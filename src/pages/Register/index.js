import React from "react";
import { Link } from "react-router-dom";

import registerSVG from "../../assets/images/register.svg";
import useRegister from "../../hooks/useRegister";

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

    const registerUser = () => {
        console.log("VALID", validateRegistrationForm());

        console.log(firstName, lastName, email, dob, password, confirmPassword);
    };

    const clearForm = () => {
        resetForm();
    };

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
                        <input type="text" className="form-control" value={firstName} onChange={(ev) => setFirstName(ev.target.value)} />
                        <span className="text-danger">{errorMessage.firstName}</span>
                    </div>

                    <div className="form-group">
                        <label>
                            Last Name <span className="text-danger">*</span>
                        </label>
                        <input type="text" className="form-control" value={lastName} onChange={(ev) => setLastName(ev.target.value)} />
                        <span className="text-danger">{errorMessage.lastName}</span>
                    </div>

                    <div className="form-group">
                        <label>
                            Email <span className="text-danger">*</span>
                        </label>
                        <input type="email" className="form-control" value={email} onChange={(ev) => setEmail(ev.target.value)} />
                        <span className="text-danger">{errorMessage.email}</span>
                    </div>

                    <div className="form-group">
                        <label>DOB</label>
                        <input type="date" className="form-control" value={dob} onChange={(ev) => setDob(ev.target.value)} />
                        <span className="text-danger">{errorMessage.dob}</span>
                    </div>

                    <div className="form-group">
                        <label>
                            Password <span className="text-danger">*</span>
                        </label>
                        <input type="password" className="form-control" value={password} onChange={(ev) => setPassword(ev.target.value)} />
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
                        />
                        <span className="text-danger">{errorMessage.confirmPassword}</span>
                    </div>

                    <div className="text-right">
                        <button className="btn btn-danger mr-5" onClick={clearForm}>
                            Reset
                        </button>
                        <button className="btn btn-success" onClick={registerUser}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
