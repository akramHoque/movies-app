import React from 'react';
import  { Route, Routes } from 'react-router-dom'
import Login from './Components/Pages/Login';
import Netflix from './Components/Pages/Netflix';
import SignUp from './Components/Pages/SignUp';


export default function App() {
  return (
    
     <Routes>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/" element={<Netflix />} />
      </Routes>
    
    
  )
}
