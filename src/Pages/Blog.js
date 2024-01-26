import React from "react";
import {useNavigate} from "react-router-dom";


const Blog =({count,setCount})=>{
    let navigate = useNavigate()



    return (
        <div>
            <h1>{count}</h1>
            <p>This is Blog Page</p>
            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(1)}>Next</button>
        </div>
    )
}


export default Blog