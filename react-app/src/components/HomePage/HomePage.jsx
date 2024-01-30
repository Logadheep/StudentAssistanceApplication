// CSS imports
import s from './home.module.css';

// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Home page for NIIT University Student Assistance Portal
const HomePage = () => {

    return (
        <div className='homePage'>
            <div className={s.banner}>
                <h1>Welcome to Student Assistance Portal</h1>

                <p>
                    Our portal provides a comprehensive suite of tools and resources to assist students in their academic journey.
                </p>
            </div>

            <div>
                <h2>Featured Content</h2>
            </div>

            <div>
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/registration">Student Registration</Link></li>
                    <li><Link to="/courses">Course Enrollment</Link></li>
                    <li><Link to="/grades">Grade Tracking</Link></li>
                </ul>
            </div>

            <div>
                <h2>Announcements</h2>
            </div>

            <div>
                <h2>Testimonials</h2>
            </div>

            <footer>
                <p>Contact Us: support@example.com</p>
            </footer>
        </div>
    );
};

export default HomePage;
