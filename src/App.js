
import './App.css';
import React from 'react'
import Navbar from './Navbar'
import Home from './Main'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Routes } from "react-router";
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} exact></Route>
          <Route path="/contact" element={<Contact/>} exact></Route>
          <Route path="/about" element={<About/>} exact></Route>
          <Route path="/education" element={<Education/>} exact></Route>
          <Route path="/experience" element={<Experience/>} exact></Route>
          <Route path="/projects" element={<Projects/>} exact></Route>
        </Routes>
      </Router>
    </>
  )
}
