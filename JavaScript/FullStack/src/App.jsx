import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/ClassComponents/FunctionalComponents/Navbar'
import TaskDef from './Components/ClassComponents/FunctionalComponents/Day3task3'
import Home from './Components/ClassComponents/FunctionalComponents/Home'
import About from './Components/ClassComponents/FunctionalComponents/About'
import Gallery from './Components/ClassComponents/FunctionalComponents/Gallery'
import Contact from './Components/ClassComponents/FunctionalComponents/ContactPage'
import Footer from './Components/ClassComponents/FunctionalComponents/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About College="Kec" course="Aiml"/>}/>
          <Route path='/ContactPage' element={<Contact/>}/>
          <Route path='/Gallery' element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App