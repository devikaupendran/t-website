import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contactus from './pages/Contactus';

const App = () => {
  return (
    <div>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactus' element={<Contactus />} />
        </Routes>
      </>
    </div>
  )
}

export default App
