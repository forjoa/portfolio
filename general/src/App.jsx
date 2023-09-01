import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import About from './About.jsx'
import Notes from './Notes.jsx'

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/notes' element={<Notes />} />
      </Routes>
    </Router>
  )
}

export default App
