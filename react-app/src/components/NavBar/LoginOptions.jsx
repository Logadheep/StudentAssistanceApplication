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
                    <a className={s.dropdownLink} href="/studentlogin" onClick={toggleDropdown}>Student Login</a>
                </li>
                <li className={s.dropdownItem}>
                    <a className={s.dropdownLink} href="/adminlogin" onClick={toggleDropdown}>Admin Login</a>
                </li>
                <li className={s.dropdownItem}>
                    <a className={s.dropdownLink} href="/facultylogin" onClick={toggleDropdown}>Faculty Login</a>
                </li>
            </ul>
            )}
        </div>
    );
};

export default LoginOptions;
