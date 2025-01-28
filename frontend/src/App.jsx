import { useState } from 'react'
import Navbarr from "./components/home/Navbarr";
import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Features from "./components/home/Features";
import Footer from "./components/home/Footer";

function App() {
   return(
    <div className="font-sans">
     <Navbarr/>
     <Hero/>
     <About/>
     <Features/>
     <Footer/>
    </div>
   )
}

export default App
