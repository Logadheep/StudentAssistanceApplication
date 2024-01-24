// CSS imports
import './App.css'

// React imports
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

// Component imports
import HomePage from './components/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import Login from './components/Entry/Login'

function App() {  
  // ignore navbar for login and register page
  const placeNavBarHere = () => {
    if (window.location.pathname === '/login'|| window.location.pathname === '/register') {
      return null
    }
    return <NavBar />
  }
  return (
    <>
      {placeNavBarHere()}
      <Router >
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
