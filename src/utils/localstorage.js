import { LS_USER_NAME } from "./constants";

export const saveUserAuthToken = (token) => window.localStorage.setItem(LS_USER_NAME, token);
export const getUserAuthToken = () => JSON.parse(window.localStorage.getItem(LS_USER_NAME));