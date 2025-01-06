import axios from "axios";
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
var Login=()=>{
    var styling = {
        display:"flex",
        height:"600px",
        paddingTop:"10px",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
    }
    var navigate = useNavigate();
    var [email, setEmail ]=useState("")
    var [password,setPassword]=useState("")
    var login = async(event) =>{
        event.preventDefault()
        var req = axios.post("http://localhost:3001/Login",{
            email:email,
            password:password,
        }).then((res)=>{
            console.log(res.data.message);
            localStorage.setItem('user',res.data.user);
            if(res.data.isLoggedIn){
                navigate("/")
            }
        }).catch((err)=>console.log(err));
        console.log(req)
    }
    var navi=()=>{
        navigate("/signup")
    }
    return(
        <div style={styling}>
            <h1>Login</h1>
            <form onSubmit={login}>
                <label>Email:</label>
                <input type="email"
                onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
                <label>Password:</label>
                <input type="password"
                onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
                <button type="submit">Login</button>
                <button type="button" onClick={navi}>Sign Up</button>
            </form>
        </div>
    )
}
export default Login;