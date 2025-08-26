import React from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        navigate('/')
    }
  return (
    <nav>
        <img src='https://image-static.collegedunia.com/public/college_data/images/logos/1473939043fhb.png?h=71.7&w=71.7&mode=stretch' alt="Dr. Krishna College"/>
        <ul>
            <li><NavLink to='/home' className='navlink'>Home</NavLink></li>
            <li><NavLink to='/about' className='navlink'>About</NavLink></li>
            <li><NavLink to='/contact' className='navlink'>Contact</NavLink></li>
        </ul>
        <button className='logout-button' onClick={handleLogout}>Logout</button>
    </nav>
  );
};

export default Navbar