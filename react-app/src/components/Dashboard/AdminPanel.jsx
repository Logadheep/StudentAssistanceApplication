import React, { useState } from 'react';

import s from './dashboard.module.css';
const AdminPanel = () => {
	// Dummy data for demonstration
	const [courses, setCourses] = useState([{
		id: 1,
		name: 'IoT',
		teacher: 'John Doe'
	},
	{
		id: 2,
		name: 'Cloud Computing',
		teacher: 'Jane Doe'
	},
	{
		id: 3,
		name: 'BlockChain',
		teacher: 'John Smith'
	}]);

	const [users, setUsers] = useState([{
		id: 1,
		username: 'johndoe',
		role: 'Student'
	},
	{
		id: 2,
		username: 'janedoe',
		role: 'Admin'
	},
	{
		id: 3,
		username: 'johnsmith',
		role: 'Faculty'
	}]);

	const [newCourse, setNewCourse] = useState({
		name: '',
		teacher: ''
	});

	const [newUser, setNewUser] = useState({
		username: '',
		role: ''
	});

	const handleUserChange = (event) => {
		const {name, value} = event.target;
		console.log(name, value);
		setNewUser({...newUser, [name]: value});
	};

	const handleCourseChange = (event) => {
		const { name, value } = event.target;
		setNewCourse({ ...newCourse, [name]: value});
	};

	const addUser = (event) => {
		event.preventDefault();
		const id = users.length + 1;
		setUsers([...users, {id: id, ...newUser}]);
		setNewUser({
			username: '',
			role: ''
		});
	}

	const addCourse = (event) => {
		event.preventDefault();
		const id = courses.length + 1;
		setCourses([...courses, {id: id, ...newCourse}]);
		setNewCourse({
			name: '',
			teacher: ''
		});
	}

	const deleteCourse = (id) => {
		setCourses(courses.filter(course => course.id !== id));
	}

	const dismissMember = (id) => {
		setUsers(users.filter(user => user.id !== id));
	}
	return (
		<div className={s.dashboard}>
			<h2>Admin Dashboard</h2>

			<div className={s.userManagement}>
				<h3>User Management</h3>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Username</th>
							<th>Role</th>
							<th>Dismiss</th>
						</tr>
					</thead>
					<tbody>
						{users.map(user => (
							<tr key={user.id}>
								<td>{user.id}</td>
								<td>{user.username}</td>
								<td>{user.role}</td>
								<td><button onClick={() => { dismissMember(user.id) }}>Dismiss</button></td>
							</tr>
						))}
					</tbody>
				</table>
				<form onSubmit={addUser} className={s.addData}>
					<label> User ID: {users.length}</label>
					<input
						type="text"
						name="username"
						placeholder='Username'
						value={newUser.username}
						onChange={handleUserChange}
					/>
					<input
						type="text"
						name="role"
						placeholder="User Role"
						value={newUser.role}
						onChange={handleUserChange}
					/>
					<button type="submit">Add User</button>
				</form>
			</div>

			<div className={s.courseManagement}>
				<h3>Course Management</h3>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Teacher</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>
						{courses.map(course => (
							<tr key={course.id}>
								<td>{course.id}</td>
								<td>{course.name}</td>
								<td>{course.teacher}</td>
								<td><button onClick={() => { deleteCourse(course.id) }}>Delete</button></td>
							</tr>
						))}
					</tbody>
				</table>
				<form onSubmit={addCourse} className={s.addData}>
					<label> Course ID: {courses.length+1}</label>
					<input
						type="text"
						name="name"
						placeholder='Course Name'
						value={newCourse.name}
						onChange={handleCourseChange}
					/>
					<input
						type="text"
						name="teacher"
						placeholder='Teacher Name'
						value={newCourse.teacher}
						onChange={handleCourseChange}
					/>
					<button type="submit">Add Course</button>
				</form>
			</div>
		</div>
	);
};

export default AdminPanel;
