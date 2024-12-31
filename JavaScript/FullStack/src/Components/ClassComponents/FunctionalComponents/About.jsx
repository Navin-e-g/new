/*Example for props*/
import React from "react";
var About = (props) =>{
    var styling={
        height:"600px",
    }
    return(
        <div style={styling}>
            <h1>Welcome to about Page</h1>
            <h2>I am studying in {props.College}</h2>
            <h3>I am pursuing{props.course}</h3>
        </div>
    )
}
export default About;