// CSS imports
import './Entry.css';

// React imports
import React, { useState } from 'react';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform registration logic here
        console.log(`Username: ${username}`);
    };

    return (
        <div className='container'>
            <form className='login-box' onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>
                    <input type="text" value={username} onChange={handleUsernameChange} placeholder='Username'/>
                </label>
                <br />
                <label>
                    <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Login;
