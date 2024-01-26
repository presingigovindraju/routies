import React from "react";
import {useNavigate} from "react-router-dom";




const Contact =({count})=>{

    let navigate = useNavigate()


    return (
        <div>
            <h1>{count}</h1>
            <p>This is Contact Page</p>
            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(1)}>Next</button>
            {/* <button onClick={()=>navigate("Blog")}>Go to blog 2</button> */}
        </div>
    )
}


export default Contact