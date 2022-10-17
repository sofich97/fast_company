import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/">
                        <span className="nav-link">Main</span>
                    </Link>
                </li>
                <li>
                    <Link to="/login">
                        <span className="nav-link">Login</span>
                    </Link>
                </li>
                <li>
                    <Link to="/users">
                        <span className="nav-link">Users</span>
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default NavBar;
