// CSS imports
import './App.css'

// React imports
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

// Component imports
import HomePage from './components/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import Student from './components/Entry/Student'

function App() {
  // ignore navbar for login and register page
  const placeNavBarHere = () => {
    if (window.location.pathname === '/studentlogin' || window.location.pathname === '/adminlogin') {
      return null
    }
    return <NavBar />
  }
  return (
    <>
      <Router >
        { placeNavBarHere() }
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/student" element={<Student />} />
          <Route exact path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
