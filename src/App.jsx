import React from 'react';
import LoginPage from './components/LoginPage/LoginPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const location = useLocation()
  const showNavbar = location.pathname !== '/'
  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}
export default App;