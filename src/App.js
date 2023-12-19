import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Courses from "./components/Courses";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
         </Routes>
      
    </div>
  );
}

export default App;
