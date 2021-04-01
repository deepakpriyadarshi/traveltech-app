import { Redirect } from "react-router";
import { getUserAuthToken } from "./localstorage";

export const authGuard = (Component) => () => {
    const userToken = getUserAuthToken();

    return userToken ? <Component /> : <Redirect to="/" />;
};
