// CSS imports
import s from './home.module.css';

// React imports
import React from 'react';

// Home page for NIIT University Student Assistance Portal
const HomePage = () => {
    return (
        <div className={s.container}>
            <h1>Home Page</h1>
            <hr />
            <div className='home-page-image-container'>
                <p>Welcome to the NIIT University Student Assistance Portal!</p>
                <p>Here you can find all the information you need about your courses, assignments, grades, and more.</p>
                <p>Use the navigation bar above to get started.</p>
            </div>
        </div>
    );
};

export default HomePage;
