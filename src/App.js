import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import { authGuard } from "./utils/helpers";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/dashboard" render={authGuard(Dashboard)} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
