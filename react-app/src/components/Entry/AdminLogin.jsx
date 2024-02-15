import React, { useState } from 'react';

import s from './entry.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AdminLogin = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			// const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
			// 	email: email,
			// 	password: password,
			// });
			// let token = response.data.token;
			// let user = response.data.id;
			// // let logged = Date.now() + 3600000; // Set expiration time to 1 hour from now
			// localStorage.setItem('token', token);
			// localStorage.setItem('user', JSON.stringify(user));
			// localStorage.setItem('logged', true);

			// // Check if the cache has expired

			// console.log(response.data);
			if(email==="admin123@gmail.com"&&password==="admin123")
			window.location.href = '/adminpanel';
		} catch (error) {
			console.error('Error: ', error);
		}
	};

	return (
		<div className={s.form}>
			<h2>Admin Login</h2>
			<form className={s.formfields}>
				<label>
					Email
					<input type="text" value={email} onChange={handleEmailChange} />
				</label>
				<br />
				<label>
					Password
					<input type="password" value={password} onChange={handlePasswordChange} />
				</label>
				<br />
				<button type="submit" onClick={handleSubmit}>Login</button>
			</form>
		</div>
	);
};

export default AdminLogin;
