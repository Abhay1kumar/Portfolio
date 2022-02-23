import './pages/Contact.css';
import { Link } from 'react-router-dom';
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Navbar() {
  return (
    <>
     <header className="nav center">
       <div className="header_left">
    <Link to="/"><p className="home">Home</p></Link>
    </div>
      <div className="header_center">
      <ol className="center">
        <Link to="/about"><li>About</li></Link>
        <Link to="/education"><li>Education</li></Link>
        <Link to="/experience"><li>Experience</li></Link>
        <Link to="/projects"><li>Projects</li></Link>
        <Link to="contact"><li>Contact</li></Link>
      </ol>
      </div>
      <div className="header_right">
    <LinkedInIcon />
      </div>
    </header>
    </>
  )
}
