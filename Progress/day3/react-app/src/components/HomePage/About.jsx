import React from 'react';
import s from './home.module.css';

const About = () => {
    return (
        <div className={s.about}>
            <h1>NIIT Student Assistance Portal</h1>
            <div className={s.aboutContent}>
                <p>
                Welcome to the Student Assistant Portal, your one-stop resource for on-campus student employment opportunities. We are committed to providing students with valuable work experience and essential skills that will benefit their academic and professional growth.
                </p>
                <p>
                As a student employee, you will have the unique opportunity to explore various campus work environments tailored to your personal preferences and capabilities. While working, you will gain invaluable knowledge about workplace culture, including attendance, punctuality, teamwork, effective communication, and customer service skills.
                </p>
                <p>
                
                To be eligible for on-campus student employment during the academic year, you must be enrolled in a minimum of 6 undergraduate units or 4 graduate units. Student employees are appointed into a classification based on specific criteria, including U.S. citizenship or permanent residency, enrollment status, and retirement program participation.
                </p>
                <p>
                
                Here are some key features and resources available on our portal:
                    <ol>
                        <li><strong>Eligibility Requirements:</strong> Learn about the eligibility criteria for becoming a student assistant on campus.</li>
                        <li><strong>Courses:</strong> Explore the available courses and programs offered on campus.</li>
                        <li><strong>Guides:</strong> Access guides and resources to help you navigate your academic journey.</li>
                        <li><strong>Enquiries:</strong> Submit enquiries to the university's student services team.</li>
                        <li><strong>Announcements:</strong> View the latest announcements and updates from the university.</li>
                        <li><strong>Testimonials:</strong> Read testimonials from current and former student employees.</li>
                    </ol>
                </p>
            </div>
        </div>
    );
};

export default About;
