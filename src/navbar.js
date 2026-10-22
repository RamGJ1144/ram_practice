
import React from "react";
import "./Navbar.css";
import "./kumar";
import "./home";
import "./about"
import "./gopi"
function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">MyWebsite</h2>

            <ul className="nav-links">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/raj">Raju</a></li>
                <li><a href="/gopi">Gopi</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
