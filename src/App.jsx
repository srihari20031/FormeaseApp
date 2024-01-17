import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ExamDetails from './pages/ExamDetails'

function App() {
  

  return (
    <>
     <Router>
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/exam/:id" element={<ExamDetails />}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
