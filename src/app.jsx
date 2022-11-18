import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";
import Users from "./layouts/users";

const App = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" component={ Main } exact />
                <Route path="/login/:type?" component={ Login } />
                <Route path="/users/:userId?/:edit?" component={ Users } />
                <Redirect to="/" />
            </Switch>
        </div>
    );
};

export default App;
