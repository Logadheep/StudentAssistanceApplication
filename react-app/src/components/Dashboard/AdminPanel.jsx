import React, { useState, useEffect } from 'react';

import s from './dashboard.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UpdateCourse from '../Forms/UpdateCourse';

const AdminPanel = () => {
	const navigate = useNavigate();
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		
		const fetchData = async () => {
			try {
			const response = await fetch('http://localhost:8080/getAllCourses');
			const jsonData = await response.json();
            setCourses(jsonData);
            console.log(courses);
			} catch (error) {
			console.log(error);
			}
		};
		fetchData();
	}, []);

	const [users, setUsers] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:8080/admin/getAllSignIn');
				const jsonData = await response.json();
				setUsers(jsonData);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);


	// const getAllCourses = () => {
	// 	// Fetch course details for the given course id
	// 	axios.get(`http://localhost:8080/getAllCourses`)
	// 		.then((response) => {
	// 			setCourses(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error fetching course details', error);
	// 		});
	// }

	const addUser = (event) => {
		event.preventDefault();
		const id = users.length + 1;
		setUsers([...users, {id: id, ...newUser}]);
		setNewUser({
			username: '',
			role: ''
		});
	}

	// const deleteCourse = (id) => {
	// 	console.log(id);
	// 	try {
	// 		await axios.delete(`http://localhost:8080/admin/deleteCourses/${id}`);
	// 		console.log('Course deleted successfully');
	// 	} catch (error) {
	// 		console.error('Error deleting course details', error);
	// 	}
	// 	window.location.reload();
	// 	// axios.delete(`http://localhost:8080/admin/deleteCourses/${id}`)
	// 	// 	.then((response) => {
	// 	// 		console.log(response.data);
	// 	// 	})
	// 	// 	.catch((error) => {
	// 	// 		console.error('Error deleting course details', error);
	// 	// 	});
	// 	// window.location.reload();
	// }

	const deleteCourse = async (id) => {
		try {
			await axios.delete(`http://localhost:8080/admin/deleteCourses/${id}`);
			console.log('Course deleted successfully');
		} catch (error) {
			console.error('Error deleting course details', error);
		}
		// window.location.reload();
	}

	const dismissMember = (id) => {
		axios.delete(`http://localhost:8080/admin/deleteSignIn?id=${id}`)
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error('Error dismissing member', error);
			});
	}
	return ( 
		<div className={s.dashboard}>
			<h2>Admin Dashboard</h2>
			<button onClick={()=>{navigate('/enquiries')}}>View Enquiries</button>
			<div className={s.userManagement}>
				<h3>User Management</h3>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Email</th>
							<th>Dismiss</th>
						</tr>
					</thead>
					<tbody>
						{users.map(user => (
							<tr key={user.admin_id}>
								<td>{user.admin_id}</td>
								<td>{user.admin_name}</td>
								<td>{user.email}</td>
								<td><button onClick={() => { dismissMember(user.id) }}>Dismiss</button></td>
							</tr>
						))}
					</tbody>
				</table>
				<button type="submit">Add User</button>
			</div>

			<div className={s.courseManagement}>
			
				<h3>Course Management</h3>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Teacher</th>
							<td>Fees</td>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{courses.map(course => (
							<tr key={course.course_id}>
								<td>{course.course_id}</td>
								<td>{course.course_name}</td>
								<td>{course.instructor}</td>
								<td>{course.fees}</td>
								<td>
									<button onClick={() => { deleteCourse(course.course_id) }}>Delete</button>
									<button onClick={() => { navigate(`/updateCourse?id=${course.course_id}`) }}>Update</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button onClick={()=>{navigate('/addCourse')}}>Add Course</button>
			</div>
		</div>
	);
};

export default AdminPanel;
