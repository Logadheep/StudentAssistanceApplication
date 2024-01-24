import React from 'react';
import s from './navbar.module.css';

const NavBar = () => {
    return (
        <nav className={s.navbar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/courses">Courses</a></li>
                <li><a href="/assignments">Assignments</a></li>
                <li><a href="/grades">Grades</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/guides">Guides</a></li>
                <li className={s.navbarProfileLink}><a href="/enquiries">Enquiries</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
