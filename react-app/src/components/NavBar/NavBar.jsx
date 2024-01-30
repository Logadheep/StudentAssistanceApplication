// React Imports
import React from 'react';
import { Link } from 'react-router-dom';

// Component Imports
import LoginOptions from './LoginOptions';

// CSS Imports
import s from './navbar.module.css';

import lock from '../../assets/lock-login.svg';

const NavBar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.navbarList}>
                <li className={s.navbarItem}>
                    <Link to="/" className={s.navbarLink}>Home</Link>
                </li>
                <li className={s.navbarItem}>
                    <Link to="/enquiries" className={s.navbarLink}>Enquiries</Link>
                </li>
                <li className={s.navbarItem}>
                    <Link to="/courses" className={s.navbarLink}>Courses</Link>
                </li>
                <li className={s.navbarItem}>
                    <Link to="/Guides" className={s.navbarLink}>Guides</Link>
                </li>
            </ul>
            <ul className={`${s.navbarList} ${s.navbarProfileLinks}`}>
                <li className={s.navbarItem}>
                    {/*<img src={lock} className={s.lock}/>*/}
                    <LoginOptions />
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
