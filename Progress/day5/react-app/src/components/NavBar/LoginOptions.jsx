import React, { useState } from 'react';

import s from './navbar.module.css';
import { Link } from 'react-router-dom';
const LoginOptions = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={s.dropdownButton}>
            <button className={s.toggleButton} onClick={toggleDropdown}>
                Login
            </button>
            {isOpen && (
            <ul className={s.dropdown}>
                <li className={s.dropdownItem}>
                    <Link className={s.dropdownLink} to="/studentlogin" onClick={toggleDropdown}>Student Login</Link>
                </li>
                <li className={s.dropdownItem}>
                    <Link className={s.dropdownLink} to="/adminlogin" onClick={toggleDropdown}>Admin Login</Link>
                </li>
                <li className={s.dropdownItem}>
                    <Link className={s.dropdownLink} to="/facultylogin" onClick={toggleDropdown}>Faculty Login</Link>
                </li>
            </ul>
            )}
        </div>
    );
};

export default LoginOptions;
