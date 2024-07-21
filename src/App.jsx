import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landingpage from './components/Landingpage'
import Viewpage from './components/Viewpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Landingpage/>
    {/* <Viewpage/> */}
    </>
  )
}

export default App
