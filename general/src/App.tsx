import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Home from './components/Home.tsx'
import About from './components/About.tsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
