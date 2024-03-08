
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Form from './Component/Form'
import Navbar from './Component/Navbar'
import Login from './Component/Login';
import Signup from './Component/Signup';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Form/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
