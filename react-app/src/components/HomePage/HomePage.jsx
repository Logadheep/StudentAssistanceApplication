// CSS imports
import s from './home.module.css';

// React imports
import React from 'react';
import { Link } from 'react-router-dom';

// Home page for NIIT University Student Assistance Portal
const HomePage = () => {

    return (
        <div className={s.homePage}>
            <div className={s.banner}>
                <h1>Welcome to Student Assistance Portal</h1>
                <p>
                    Our portal provides a comprehensive suite of tools and resources to assist students in their academic journey.
                </p>
            </div>

            {/*<div>
                <h2>Featured Content</h2>
                <ul>
                    <p>Dummy courses and data</p>
                    <ul>
                        <li>Course 1</li>
                        <li>Course 2</li>
                        <li>Course 3</li>
                    </ul>
                    <li><Link to="/Guides">Guides</Link></li>
                    <li><Link to="/enquiries">Enquiries</Link></li>
                </ul>
            </div>

            <div>
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/student">Student Registration</Link></li>
                    <li><Link to="/courses">Course Enrollment</Link></li>
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
    </footer> */}
        </div>
    );
};

export default HomePage;
