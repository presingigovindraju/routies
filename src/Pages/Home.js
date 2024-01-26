import React from "react";
import {useNavigate} from "react-router-dom";


const Home =()=>{
    let navigate = useNavigate()



    return (
        <div>
            <h1>Home</h1>
            <p>This is Home Page</p>
            <button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(1)}>Next</button>
        </div>
    )
}


export default Home