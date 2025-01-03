import React, { createContext } from "react";
import Component2 from "./ContextComponents/Component2";
export var ThemeProvider = React.createContext();
var UseContext = () => {
    return (

        <div>
            <ThemeProvider.Provider value={{sgpa :"9.99",cgpa:"9.88"}}>
                <h2>This is the Usecontext Page</h2>
                <Component2 />
            </ThemeProvider.Provider>
        </div>
    )
}
export default UseContext;