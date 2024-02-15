import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './navbar.module.css';
const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Replace with your logic to determine if the user is logged in or not
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const toggleDropdown = () => {
        window.location.href='/';
    };

    const handleLogout = () => {
        // Add your logout logic here
        toggleDropdown();
        setIsLoggedIn(false);
    };

    return (
        <div className={s.dropdownButton}>
            <button className={s.toggleButton} onClick={toggleDropdown}>
                Logout
            </button>
        </div>
    );
};

export default Profile;
