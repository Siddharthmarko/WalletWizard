import { useState } from 'react'
import './App.css'
import Home from './component/home'
import ContextProvider from './context/context'

function App() {

  return (
    <div style={{ background: "#f4f5ff", width: "100vw", height: "100vh" }}>
      <ContextProvider>
          <Home/>
      </ContextProvider>
    </div>
  )
}

export default App
