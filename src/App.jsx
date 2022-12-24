import React from 'react'
import './App.css'
import Contact from './components/Contact'
import Create from './components/Create'
import Edit from './components/Edit'
import {Route,Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className='container mx-auto'>
      <Routes>
        <Route path="/" element={<Contact/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/edit/:id" element={<Edit/>}/>
      </Routes>
    </div>
  )
}

export default App
