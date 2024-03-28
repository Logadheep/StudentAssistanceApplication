// CSS imports
import './App.css'

// React imports
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom'

// Component imports
import HomePage from './components/HomePage/HomePage'
import NavBar from './components/NavBar/NavBar'
import Student from './components/Entry/Student'
import Admin from './components/Entry/Admin'
import AdminPanel from './components/Dashboard/AdminPanel'
import StudentDashboard from './components/Dashboard/StudentDashboard'
import Faculty from './components/Entry/Faculty'
import FacultyDashboard from './components/Dashboard/FacultyDashboard'
import Courses from './components/HomePage/Courses'
import About from './components/HomePage/About'
import Guides from './components/HomePage/Guides'
import AddCourse from './components/Forms/AddCourse'
import UpdateCourse from './components/Forms/UpdateCourse'
import EnquiryForm from './components/Forms/EnquiryForm'
// import { withRouter } from 'react-router-dom'

//withRouter(({ location }) 
const App = () => {
	// ignore navbar for login and register page
	const placeNavBarHere = () => {
		if (window.location.pathname === '/studentlogin' || window.location.pathname === '/adminlogin' || window.location.pathname === '/facultylogin') {
			return null
		}
		return <NavBar />
	}

	return (
			<Router >
				{
					placeNavBarHere()
				}
				<Routes>
					<Route exact path="/" element={<HomePage />} />
					<Route exact path="/home" element={<HomePage />} />
					<Route exact path="/courses" element={<Courses />} />
					<Route exact path='/about' element={<About />} />
					<Route exact path="/studentlogin" element={<Student />} />
					<Route exact path="/adminlogin" element={<Admin />} />
					<Route exact path="/facultylogin" element={<Faculty />} />
					<Route exact path="/studentdashboard" element={<StudentDashboard />} />
					<Route exact path="/facultydashboard" element={<FacultyDashboard />} />
					<Route exact path="/adminpanel" element={<AdminPanel />} />
					<Route exact path="/guides" element={<Guides />} />
					<Route exact path="/addCourse" element={<AddCourse />} />
					<Route exact path='/updateCourse/*' element={<UpdateCourse />}/>
					<Route exact path='/enquiry/*' element={<EnquiryForm />}/>
				</Routes>
			</Router>
	)
		
};


export default App
