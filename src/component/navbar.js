import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import { Navbar, Navitem } from "./styles"

export default withRouter(props => <Nav path={props.location.pathname} />)

function Nav({ path }) {
    return (
        <Navbar>
            <Navitem match={path === "/"}>
                <Link to="/">Home</Link>
            </Navitem>
            <Navitem match={path === "/about"}>    
                <Link to="/about">About</Link>
            </Navitem>
            <Navitem match={path === "/contact"}>    
                <Link to="/contact">Contact</Link>
            </Navitem>
        </Navbar>
    )
};