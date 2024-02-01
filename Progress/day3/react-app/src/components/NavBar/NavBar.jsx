// React Imports
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Component Imports
import LoginOptions from './LoginOptions';

// CSS Imports
import s from './navbar.module.css';
import Profile from './Profile';

const NavBar = () => {
    // location.reload();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // Replace with your logic to determine if the user is logged in or not
    const toggleDropdown = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div className={s.navbar}>
            <ul className={s.navbarList}>
                <li className={s.navbarItem}>
                    <Link to="/" className={s.navbarLink}>Home</Link>
                </li>
                {/*<li className={s.navbarItem}>
                    <Link to="/enquiries" className={s.navbarLink}>Enquiries</Link>
                </li>
                */}
                <li className={s.navbarItem}>
                    <Link to="/courses" className={s.navbarLink}>Courses</Link>
                </li>
                <li className={s.navbarItem}>
                    <Link to="/guides" className={s.navbarLink}>Guides</Link>
                </li>
                <li className={s.navbarItem}>
                    <Link to="/about" className={s.navbarLink}>About</Link>
                </li>
            </ul>
            <ul>
                <li className={s.navbarItem}>
                    {isLoggedIn ? <Profile /> : <LoginOptions />}
                </li>
            </ul>
        </div>
    );
}

export default NavBar;

// className={`${s.navbarList} ${s.navbarProfileLinks}`}