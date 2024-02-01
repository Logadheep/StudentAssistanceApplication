import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './entry.module.css';

const credentials = {
    'faculty': 'faculty',
};

const FacultyLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        if(credentials[username] === password) {
            alert('Login successful');
            navigate('/facultydashboard');
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className={s.form}>
            <h2>Faculty Login</h2>
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

export default FacultyLogin;
