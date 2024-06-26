import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Blue from './Components/Blue'
import Red from './Components/Red'
import Home from './Components/Home'

function App() {


  return (
    <>
      <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">
        <Link to="/"></Link>
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blue" element={<Blue/>}></Route>
          <Route path="/red" element={<Red/>}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
