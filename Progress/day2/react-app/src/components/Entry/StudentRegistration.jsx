import React, { useState } from 'react';

import s from './entry.module.css';

const StudentRegistration = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	const [email, setEmail] = useState('');

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleAgeChange = (event) => {
		setAge(event.target.value);
	};

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Perform registration logic here
	};

	return (
		<div className={s.form}>
		<form onSubmit={handleSubmit}>
			<label>
				Name:
				<input type="text" value={name} onChange={handleNameChange} />
			</label>
			<br />
			<label>
				Age:
				<input type="number" value={age} onChange={handleAgeChange} />
			</label>
			<br />
			<label>
				Email:
				<input type="email" value={email} onChange={handleEmailChange} />
			</label>
			<br />
			<button type="submit">Register</button>
		</form>
		</div>
	);
};

export default StudentRegistration