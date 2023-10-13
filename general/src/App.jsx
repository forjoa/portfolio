import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Home from './components/Home.jsx'
import About from './components/Header.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
