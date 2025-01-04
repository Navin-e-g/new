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
import UseEffect from './Components/ClassComponents/FunctionalComponents/UseEffect'
import UseEffect2 from './Components/ClassComponents/FunctionalComponents/UseEffect2'
import UseRef from './Components/ClassComponents/FunctionalComponents/UseRef'
import UseContext from './Components/ClassComponents/FunctionalComponents/UseContext'
import UseRef2 from './Components/ClassComponents/FunctionalComponents/UseRef2'
import UseMemo from './Components/ClassComponents/FunctionalComponents/UseMemo'
import Signup from './Components/ClassComponents/FunctionalComponents/Signup'
import Login from './Components/ClassComponents/FunctionalComponents/Login'
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
          <Route path='/UseEff' element={<UseEffect/>}/>
          <Route path='/UseEff2' element={<UseEffect2/>}/>
          <Route path='/UseRef' element={<UseRef/>}/>
          <Route path='/UseContext' element={<UseContext/>}/>
          <Route path='/UseRef2' element={<UseRef2/>}/>
          <Route path='/UseMemo' element={<UseMemo/>}/>
          <Route path='/Signup' element={<Signup/>}/>
          <Route path='/Login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}

export default App