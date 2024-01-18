import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Projects from './components/projects/projects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" >
      <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        
      </Route>
    </Routes>
    <App />
  </BrowserRouter>,
)
