import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './navbar.module.css';
const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);
    // Replace with your logic to determine if the user is logged in or not
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        // Add your logout logic here
        toggleDropdown();
        setIsLoggedIn(false);
    };

    return (
        <div className={s.dropdownButton}>
            <button className={s.toggleButton} onClick={toggleDropdown}>
                Profile
            </button>
            {isOpen && (
            <ul className={s.dropdown}>
                <li className={s.dropdownItem}>
                    <Link className={s.dropdownLink} to="/profile" onClick={toggleDropdown}>View Profile</Link>
                </li>
                <li className={s.dropdownItem}>
                    <Link className={s.dropdownLink} to="/editprofile" onClick={toggleDropdown}>Edit Profile</Link>
                </li>
                <li className={s.dropdownItem}>
                    <Link className={s.dropdownLink} to="/" onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
            )}
        </div>
    );
};

export default Profile;
