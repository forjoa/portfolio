import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<></>} />
      </Routes>
    </Router>
  )
}

export default App
