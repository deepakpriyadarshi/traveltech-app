import { useState } from "react";
import validator from "validator";

function useRegister() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const initialErrorMessage = {
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        password: "",
        confirmPassword: "",
    };

    const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

    const validateRegistrationForm = () => {
        let valid = true;

        if (validator.isEmpty(firstName)) {
            setErrorMessage({ ...errorMessage, firstName: "Please Enter First Name" });
            valid = false;
        } else if (validator.isEmpty(lastName)) {
            setErrorMessage({ ...errorMessage, lastName: "Please Enter Last Name" });
            valid = false;
        } else if (validator.isEmpty(email)) {
            setErrorMessage({ ...errorMessage, email: "Please Enter Email" });
            valid = false;
        } else if (!validator.isEmail(email)) {
            setErrorMessage({ ...errorMessage, email: "Please Enter A Valid Email" });
            valid = false;
        } else if (validator.isEmpty(password)) {
            setErrorMessage({ ...errorMessage, password: "Please Enter Password" });
            valid = false;
        } else if (validator.isEmpty(confirmPassword)) {
            setErrorMessage({ ...errorMessage, confirmPassword: "Please Confirm Your Password" });
            valid = false;
        } else if (password.length !== confirmPassword.length || password !== confirmPassword) {
            setErrorMessage({
                ...errorMessage,
                password: "Password Does Not Match With Confirm Password",
                confirmPassword: "Confirm Password Does Not Match With Password",
            });
            valid = false;
        }

        if (valid) setErrorMessage(initialErrorMessage);

        return valid;
    };

    const resetForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setDob("");
        setPassword("");
        setConfirmPassword("");

        setErrorMessage(initialErrorMessage);
    };

    return [
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
    ];
}

export default useRegister;
