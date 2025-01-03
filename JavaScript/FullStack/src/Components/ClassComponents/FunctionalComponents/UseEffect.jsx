import React, { useState, useEffect } from "react";
var UseEffect = () => {
    var [text, setText] = useState("Kongu");
    useEffect(() => {
        console.log(text);
        setText("Hello")
    },[])
    return (
        <div>
            <h3>Use effect example</h3>
            <input type="text" placeholder="Enter city name" value={text} onChange={(e) => { setText(e.target.value) }}></input>
            <h3>The text is {text}</h3>
        </div>
    )
}
export default UseEffect;