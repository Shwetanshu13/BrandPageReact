import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Advertisement from './components/Advertisement'

function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Advertisement/>
    </div>
  )
}

export default App
