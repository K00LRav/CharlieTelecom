import { useState } from "react";
import './App.css'
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact/Contact";


function App() {

  return (
    <>
    <BrowserRouter>
 
 
      <Header/>

      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

      <Footer/>


    </BrowserRouter>
    </>
  );
}

export default App;
