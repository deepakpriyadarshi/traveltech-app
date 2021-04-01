import { API_URL } from "../constants";
import { getUserAuthToken } from "../localstorage";

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

export const getUserDetails = async () => {
    const res = await fetch(API_URL + "/user/getDetails", {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8", Authorization: `Bearer ${getUserAuthToken()}` },
    });

    return res.json();
};
