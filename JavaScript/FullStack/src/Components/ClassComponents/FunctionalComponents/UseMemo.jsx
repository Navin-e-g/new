import React, { useMemo, useState } from "react";
var slowFunction=(number)=>{
    for(let i = 1;i<10000000000;i++){}
    return number*2
}
var UseMemo=()=>{
    var [num,setNum]=useState(0);
    var [theme,updateTheme] = useState(true);
    var darkLight= {
        backgroundColor:(theme)?"black":"white",
        color:(theme)?"white":"black",
    };
    var doublingANumber =useMemo((num)=>{
        return slowFunction(num)
    },[])
    return(
        <section>
            <h1>This is useMemo Example</h1> 
            <input type="number" value={num} onChange={(e)=>setNum(e.target.value)}/>
            <button onClick={()=>updateTheme(theme = !theme)}>Toggle Theme</button>
            <h2 style={darkLight}>Hello</h2>
        </section>
    )
}
/* useMemo should not be a function*/
export default UseMemo;