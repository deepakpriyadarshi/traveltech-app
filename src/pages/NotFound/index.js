import React from "react";
import { Link } from "react-router-dom";

import notFoundSVG from "../../assets/images/404.svg";

import "./index.css";

function NotFound() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 notfound-image-block">
                    <img src={notFoundSVG} alt="Not Found" className="notfound-image" />
                    <h6 className="mt-5">
                        Page Not Found, Go Back To <Link to="/">Login</Link>
                    </h6>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
