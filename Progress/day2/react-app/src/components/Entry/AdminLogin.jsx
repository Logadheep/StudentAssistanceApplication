import React, { useState } from 'react';

import s from './entry.module.css';
import { useNavigate } from 'react-router-dom';

const credentials = {
	'admin': 'password',
};
const AdminLogin = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = () => {
		// Add your login logic here
		if (credentials[username] === password) {
			// Redirect to admin dashboard
			alert('Login successful');
			navigate('/adminpanel')

		} else {
			// Show error message
			console.log('Invalid credentials');
		}
	};

	return (
		<div className={s.form}>
			<h2>Admin Login</h2>
			<form onSubmit={handleSubmit} className={s.formfields}>
				<label>
					Username
					<input type="text" value={username} onChange={handleUsernameChange} />
				</label>
				<br />
				<label>
					Password
					<input type="password" value={password} onChange={handlePasswordChange} />
				</label>
				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default AdminLogin;
