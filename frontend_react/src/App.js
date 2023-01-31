import React from 'react'
import { Header, Work, About, Contact } from './container';
import './App.scss'

const App = () => {
  return (
    <div>
        <Header />
        <Work />
        <About />
        <Contact />
    </div>
  )
}

export default App