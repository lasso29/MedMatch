import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import SignUp from './pages/component/SignUp'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/register' element={<SignUp/>} />
      </Routes>
    </>
  )
}

export default App
