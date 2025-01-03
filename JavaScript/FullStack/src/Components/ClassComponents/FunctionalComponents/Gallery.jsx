/* Example for State Concept*/
import React, { useState } from "react";
var Gallery=()=>{
    var styling={
        height:"600px",
    };
    var year = 2024
    var [number,setCount]=useState(0);
    function Increment(){
        setCount(number*2)
    }
    function Decrement(){
        setCount(number/2)
    }
    function Reset(){
        setCount(1)
    }
    return(
        <div style={styling}>
            <h1>welcome  to {year} Gallery</h1>
            <h2>Number of photos taken is {number}</h2>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}
export default Gallery;