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
                    <li><Link to="/UseEff">Details</Link></li>
                    <li><Link to="/UseEff2">Details2</Link></li>
                    <li><Link to="/UseRef">Ref</Link></li>
                    <li><Link to="/UseContext">Context</Link></li>
                    <li><Link to="/UseRef2">Ref2</Link></li>
                    <li><Link to="/UseMemo">Memo</Link></li>
                    <li><Link to="/Signup">Signup</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;