import React, { useState } from 'react';

import s from './entry.module.css';
import { useNavigate } from 'react-router-dom';

let credentials = {
    'student': 'student'
}

const StudentLogin = () => {
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
        // TODO: Implement login logic here
        if(credentials[username] === password) {
            alert('Login successful');
            navigate('/studentdashboard');
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className={s.form}>
            <h2>Student Login</h2>
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

export default StudentLogin;
