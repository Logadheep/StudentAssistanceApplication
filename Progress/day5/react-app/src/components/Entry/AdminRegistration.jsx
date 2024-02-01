import React, { useState } from 'react';

import s from './entry.module.css';

const AdminRegistration = () => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// TODO: Add logic to handle form submission
		if (username.length === 0) {
			alert('Please enter your name');
			return;
		}
		if (email.length === 0) {
			alert('Please enter your email');
			return;
		}
		//check if email is valid
		if (email.search(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
			alert('Please enter a valid email');
			return;
		}
		if (email.search(/@niit.ac.in$/)) {
			alert('Please enter a valid NIIT University email');
			return;
		}
		if (password.length === 0) {
			alert('Please enter your password');
			return;
		}
		if (password.length < 8) {
			alert('Password should be at least 8 characters long');
			return;
		}
		if (password.search(/[0-9]/) === -1) {
			alert('Password should contain at least one digit');
			return;
		}
		if (password.search(/[a-z]/) === -1) {
			alert('Password should contain at least one lowercase letter');
			return;
		}
		if (password.search(/[A-Z]/) === -1) {
			alert('Password should contain at least one uppercase letter');
			return;
		}
		if (password.search(/[!@#$%^&*]/) === -1) {
			alert('Password should contain at least one special character');
			return;
		}
		alert('Registration successful. Wait till existing admin has approved and then login.');
		navigate('/adminlogin');
	};

	return (
		<div className={s.form}>
			<h2>Admin Registration</h2>
			<form className={s.formfields} onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={handleUsernameChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={handleEmailChange}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={handlePasswordChange}
					/>
				</div>
				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default AdminRegistration;
