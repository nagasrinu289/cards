import React from 'react'
import Home from './Home/Home'
import { BrowserRouter as Router , Routes, Route, BrowserRouter } from 'react-router-dom'
import "./App.css"
import Question from './Questions/Question'

const App = () => {
  return (
    <div className='Container'>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/test/:name' element={<Question />}/>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
