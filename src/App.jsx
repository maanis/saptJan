import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { Link, NavLink } from 'react-router'

const App = () => {
  return (
    <>
      <div className='h-screen w-full'>
        {/* <Navbar /> */}

        {/* <NavLink */}
        <Link to={'/'}>Home</Link>

      </div>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App