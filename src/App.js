import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Sessions from "./components/Sessions";
import {Routes,Route} from 'react-router-dom'
import Posters from "./components/posters";

function App() {
  return (
    <div className="App">
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sessions" element={<Sessions/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posters" element={<Posters/>}/>
         </Routes>
      
    </div>
  );
}

export default App;
