import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import Satu from './pages/Satu'
import Dua from './pages/Dua'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Satu />} />
        <Route path='/2' element={<Dua />} />
      </Routes>
      <ul>
        <li><Link to='/'>Satu</Link></li>
        <li><Link to='/2'>Dua</Link></li>
      </ul>
    </BrowserRouter>
  )
}

export default App
