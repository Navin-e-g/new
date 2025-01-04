import React from "react";
var Login=()=>{
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
            <h1>Login</h1>
            <form>
                <label>Email:</label>
                <input type="email"></input><br/><br/>
                <label>Password:</label>
                <input type="password"></input><br/><br/>
            </form>
        </div>
    )
}
export default Login;