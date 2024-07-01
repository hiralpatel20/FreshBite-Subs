import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Routes, NavLink, Route, useNavigate} from "react-router-dom";

const Navbar = () => {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    // Below line is to clear authentication data from localStorage
    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    localStorage.removeItem('authToken'); 
    navigate('/');
  };

  return (
   <>
    <div className='navbar'>
         <div className="nav-container">
             <div className="nav-logo">
             {/* Here I fetch the image from assets.js file */}
             {/* I made this logo by myself */}
                 <img src={assets.Logo} alt="Logo" /> 
             </div>
          <nav className="nav-menu">
            {/* Here I used NavLink to link the Pages */}
            {/* Reference: https://reactrouter.com/en/main/components/nav-link */}
            {/* I refer ch-9 for NavLink. Reference: https://conestoga-bookshelf.vitalsource.com/reader/books/9781484243916/epubcfi/6/22[%3Bvnd.vst.idref%3DA426054_2_En_9_Chapter]!/4/8/22[Sec4]/12[Par77]/30[PC29]/4/16/1:7[%C2%A0%C2%A0.%2C..] */}
            <NavLink className="nav-item" to="/"><a>Home</a></NavLink>
            <NavLink className="nav-item" to="/about"><a>About Us</a></NavLink>
            <NavLink className="nav-item" to="/contact"><a>Contact</a></NavLink>
            <NavLink className="nav-item" to="/cart"><a>Cart</a></NavLink>
          </nav>
         </div>
     </div>

    </>
  )
}

export default Navbar