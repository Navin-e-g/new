import React,{useState,useRef,useEffect} from "react";
var UseRef2 = () =>{
    var styling={
        height:"600px",
    }
    var [number,setCount]=useState(0);
    var prevNum = useRef(0);
    useEffect(()=>{
        prevNum.current=number
    },[number])
    return(
        <section style={styling}>
            <h1>This is an example of useRef</h1>
            <input type="text" value={number} onChange={(e)=>{setCount(e.target.value)}}/>
            <h2>My Current Render is {number}</h2>
            <h3>My Previous Render is {prevNum.current}</h3>
        </section>
    )
}
export default UseRef2;