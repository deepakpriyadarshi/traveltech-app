import { API_URL } from "../constants";

export const registerUser = async ({ firstName, lastName, email, dob, password, confirmPassword }) => {
    const res = await fetch(API_URL + "/user/registerUser", {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            dob: dob,
            password: password,
            confirmPassword: confirmPassword,
        }),
    });

    return res.json();
};
