import React, { useState } from "react";
import {NavLink} from "react-router-dom";

const Navbar=()=>{
    return(
        <>
        <NavLink exact activeClassName="active_class" to="/"> About us </NavLink>
        <NavLink exact activeClassName="active_class" to="/contact"> Contact us </NavLink>
        <NavLink exact activeClassName="active_class" to="/services"> Services </NavLink>
        <NavLink exact activeClassName="active_class" to="/search"> Search </NavLink>
        <br/>
            <a href="/">About Us</a>
            <a href="/contact">Contact Us</a>
        </>
    );
};

export default Navbar;