import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './entry.module.css';

const FacultyRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic here
        //validate form data
        if(name.length === 0) {
            alert('Please enter your name');
            return;
        }
        if(email.length === 0) {
            alert('Please enter your email');
            return;
        }
        //check if email is valid
        if(email.search(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
            alert('Please enter a valid email');
            return;
        }
        if(email.search(/@niit.ac.in$/)) {
            alert('Please enter a valid NIIT University email');
            return;
        }
        if(password.length === 0) {
            alert('Please enter your password');
            return;
        }
        if(password.length < 8) {
            alert('Password should be at least 8 characters long');
            return;
        }
        if(password.search(/[0-9]/) === -1) {
            alert('Password should contain at least one digit');
            return;
        }
        if(password.search(/[a-z]/) === -1) {
            alert('Password should contain at least one lowercase letter');
            return;
        }
        if(password.search(/[A-Z]/) === -1) {
            alert('Password should contain at least one uppercase letter');
            return;
        }
        if(password.search(/[!@#$%^&*]/) === -1) {
            alert('Password should contain at least one special character');
            return;
        }
        alert('Registration successful. Wait till admin has approved and login.');
        navigate('/facultylogin');
    };

    return (
        <div className={s.form}>
            <h2>Faculty Registration</h2>
            <form className={s.formfields} onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={handleEmailChange} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={handlePasswordChange} />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default FacultyRegistration;
