import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import Navbar from './component/Navbar'
import History from './pages/History'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/calculator' element={<Calculator />} />
      <Route path='/history' element={<History />} />
      <Route path='*' element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
