<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
=======
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./layouts/home-layout/HomeLayout";
import Home from "./pages/home/Home";
import About from "./pages/home/About";
import Contact from "./pages/home/Contact";
import Services from "./pages/home/Services";
import Faqs from "./pages/home/Faqs";

>>>>>>> b3bbc6976257fd61eaa86d28b6446199b529a2af
function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path='/' element={<Landingpage/>} />
        <Route path='/home' element={<Landingpage/>} />
=======
        {/* Home routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="faqs" element={<Faqs />} />
        </Route>
>>>>>>> b3bbc6976257fd61eaa86d28b6446199b529a2af
      </Routes>
    </>
  );
}

export default App;
