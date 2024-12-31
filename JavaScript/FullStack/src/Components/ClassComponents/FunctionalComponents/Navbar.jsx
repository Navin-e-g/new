import React from "react";
import '../../../assets/Css/Navbar.css'
import { Link } from "react-router-dom";
var Navbar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About Us</Link></li>
                    <li><Link to="/ContactPage">Contact</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;