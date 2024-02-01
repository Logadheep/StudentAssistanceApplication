import React from 'react';

import s from './home.module.css';
const Guides = () => {
    return (
        <div className={s.guides}>
        <h1>Guides for University Students</h1>
        <div className={s.guidesContent}>

                <p className={s.intro}>Welcome to the Guides page, designed to assist you in navigating your academic journey effectively. Whether you're a new student looking for orientation or a seasoned student seeking study tips, you'll find valuable resources and advice tailored to your needs.</p>

                <h2>New Student Orientation</h2>
                <ul>
                    <li><strong>Welcome to NIIT University</strong>: A comprehensive guide for new students, covering campus facilities, academic programs, and student services.</li>
                    <li><strong>Getting Started</strong>: Step-by-step instructions on how to enroll in courses, access online platforms, and set up your student accounts.</li>
                    <li><strong>Campus Tour</strong>: Virtual or interactive tours of campus facilities, including libraries, labs, and recreational areas.</li>
                </ul>

                <h2>Academic Success</h2>
                <ul>
                    <li><strong>Study Skills</strong>: Strategies for effective note-taking, time management, and exam preparation to enhance your academic performance.</li>
                    <li><strong>Writing Center</strong>: Resources for improving your writing skills, including grammar tips, citation guides, and sample essays.</li>
                    <li><strong>Academic Advising</strong>: Guidance on selecting courses, planning your academic path, and meeting graduation requirements.</li>
                </ul>

                <h2>Student Support Services</h2>
                <ul>
                    <li><strong>Counseling Services</strong>: Information on counseling resources and mental health support available to students.</li>
                    <li><strong>Tutoring Center</strong>: Access to tutoring services for assistance with challenging courses or assignments.</li>
                    <li><strong>Career Services</strong>: Resources for career exploration, resume building, interview preparation, and job search strategies.</li>
                </ul>

                <h2>Campus Life</h2>
                <ul>
                    <li><strong>Student Organizations</strong>: A directory of student clubs, organizations, and extracurricular activities to get involved in.</li>
                    <li><strong>Events Calendar</strong>: Upcoming events, workshops, seminars, and social gatherings happening on campus.</li>
                    <li><strong>Health and Wellness</strong>: Tips for maintaining physical health, managing stress, and staying balanced during your university experience.</li>
                </ul>

                <h2>Technology Resources</h2>
                <ul>
                    <li><strong>Computer Labs</strong>: Locations and hours of operation for on-campus computer labs and access to software applications.</li>
                    <li><strong>Online Learning Platforms</strong>: Guides for using learning management systems (LMS), online libraries, and academic databases.</li>
                    <li><strong>IT Support</strong>: Contact information for technical support services and troubleshooting assistance.</li>
                </ul>

                <h2>Community Resources</h2>
                <ul>
                    <li><strong>Local Resources</strong>: Information on nearby amenities, transportation options, dining services, and off-campus housing.</li>
                    <li><strong>Community Engagement</strong>: Opportunities for community service, volunteer work, and civic engagement initiatives.</li>
                </ul>

                <p>Explore the guides and resources available to you to make the most of your university experience. If you have any questions or need further assistance, don't hesitate to reach out to the university's student services team.</p>
            </div>
        </div>
    );
};

export default Guides;
