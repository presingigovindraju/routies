import React from "react";
import {Link,NavLink} from "react-router-dom"


const NavBar =()=>{


    return (
        <div className="navBar">
           <NavLink  to="/" >Home</NavLink>
           <NavLink  to="/Blog" >Blog</NavLink>
           <NavLink  to="/About" >About</NavLink>
           <NavLink  to="/Contact" >Contact</NavLink>
        </div>
    )
} 


export default NavBar 

{/* <a href="/" >Home</a>
           <a href="/Blog" >Blog</a>
           <a href="/About" >About</a>
           <a href="/Contact" >Contact</a> */}