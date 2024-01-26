import React,{useState} from "react";

// Pages 
import Home from "./Pages/Home";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import {Routes,Route} from "react-router-dom"
import NavBar from "./Components/NavBar";


const App =()=>{

  const [count,setCount] = useState(0)

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Blog" element={<Blog  count={count} setCount={setCount}/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact count={count}/>}/>
      </Routes>
    </div>
  )
}

export default App