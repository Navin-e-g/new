import React from "react";
var Signup=()=>{
    var styling = {
        display:"flex",
        height:"600px",
        paddingTop:"10px",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    }
    return(
        <div style={styling}>
            <h1>Sign Up</h1>
            <form>
                <label>First Name:</label>
                <input type="text"></input><br/><br/>
                <label>Last Name:</label>
                <input type="text"></input><br/><br/>
                <label>Email:</label>
                <input type="email"></input><br/><br/>
                <label>Password:</label>
                <input type="password"></input><br/><br/>
            </form>
        </div>
    )
}
export default Signup;