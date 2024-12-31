import React from "react";
import '../../../assets/Css/Home.css'
import Footer from "./Footer";
function Home() {
    var Stylin = {
        color: "red",
        textAlign: "center",
        fontFamily: "sans-seriff",
        textDecoration: "underline",
    }
    return (
        <div className="home">
            <header>
                <h1 style={Stylin}>This is HomePage</h1>
                <h3 className="nav">External Styling</h3>
            </header>
        </div>
    )
}
export default Home;