import React, { useState, useEffect } from "react";
import axios from "axios";
var UseEffect2 = () => {
    var [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then((res) => {
                console.log(res.data);
                setPost(res.data)
            })
            .catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <h1>Fetching data from json  Placeholder API</h1>
            <h2>Posts are</h2>
            <ol>
                {post.map((element) => { return <li key={element.id}>{element.title}</li> })}
            </ol>
        </div>
    )

}
export default UseEffect2;