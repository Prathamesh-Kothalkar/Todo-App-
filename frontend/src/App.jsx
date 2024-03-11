
import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Form from './Component/Form'
import Login from './Component/Login';
import Signup from './Component/Signup';
import Unauthorization from './Component/Unauthorized';

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path='/error' element={<Unauthorization/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
