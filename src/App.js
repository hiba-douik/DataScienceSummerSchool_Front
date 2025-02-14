import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Programme from "./components/Programme";
import FAQ from "./components/FAQ";
import Sessions from "./components/Sessions";
<<<<<<< HEAD
import Sponsors from "./components/Sponsors";
=======
import Posters from "./components/posters";
>>>>>>> 86a99dac2bcab1087923c548bebeb45a7e7876c4
import Applications from "./components/Applications";
import Form from "./components/Form";
import Organizers from "./components/Organizers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from "react-router-dom";
import Speakers from "./components/Speakers";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posters" element={<Posters />} />
        <Route path="/" element={<Home />} />
        <Route path="/keyApp" element={<Applications />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/form" element={<Form />} />
<<<<<<< HEAD
        <Route path="/sponsors" element={<Sponsors />} />
=======
        <Route path="/speakers" element={<Speakers />} />
>>>>>>> 86a99dac2bcab1087923c548bebeb45a7e7876c4
      </Routes>
    </div>
  );
}

export default App;
