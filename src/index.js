import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
