import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "./components/users";
import NavBar from "./components/navBar";
import Login from "./layouts/login";
import Main from "./layouts/main";

const App = () => {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" component={ Main } exact />
                <Route path="/login" component={ Login } />
                <Route path="/users" component={ Users } />
            </Switch>
        </>
    );
};

export default App;
