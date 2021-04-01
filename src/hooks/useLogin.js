import { useState } from "react";
import validator from "validator";

function useLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const initialErrorMessage = {
        email: "",
        password: "",
    };

    const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

    const validateLoginForm = () => {
        let valid = true;

        if (validator.isEmpty(email)) {
            setErrorMessage({ ...errorMessage, email: "Please Enter Email" });
            valid = false;
        } else if (!validator.isEmail(email)) {
            setErrorMessage({ ...errorMessage, email: "Please Enter A Valid Email" });
            valid = false;
        } else if (validator.isEmpty(password)) {
            setErrorMessage({ ...errorMessage, password: "Please Enter Password" });
            valid = false;
        }

        if (valid) setErrorMessage(initialErrorMessage);

        return valid;
    };

    const resetForm = () => {
        setEmail("");
        setPassword("");

        setErrorMessage(initialErrorMessage);
    };

    return [email, password, errorMessage, setEmail, setPassword, validateLoginForm, resetForm];
}

export default useLogin;
