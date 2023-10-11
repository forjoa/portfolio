import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// components
import Home from './components/Home.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
