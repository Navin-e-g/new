import React, { useState} from "react";
import axios from "axios";
var Signup=()=>{
    var styling = {
        display:"flex",
        height:"600px",
        paddingTop:"10px",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    }
    var [firstName,setFName] = useState("");
    var [lastName,setLName] = useState("");
    var [email,setEmail] = useState("");
    var [password,setPassword] = useState("");
    //const navigate = useNavigate();

    var signup = async (event) => {
        event.preventDefault();
        var req = axios.post("http://localhost:3001/signup", {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password
        });
        console.log(req);
      };

    return(
        <div style={styling}>
            <h1>Sign Up</h1>
            <form onSubmit={signup}>
                <label>First Name:</label>
                <input type="text"
                id="fName"
                onChange={(e)=>{
                    setFName(e.target.value)
                }}
                /><br/><br/>
                <label>Last Name:</label>
                <input type="text"
                id="lName"
                onChange={(e)=>{
                    setLName(e.target.value)
                }}
                /><br/><br/>
                <label>Email:</label>
                <input type="email"
                id="email"
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                /><br/><br/>
                <label>Password:</label>
                <input type="password"
                id="pass"
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                /><br/><br/>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}
export default Signup;