import React,  {useState, useEffect} from 'react';
import axios from 'axios';

import s from './home.module.css'; 
const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/getAllCourses');
                const jsonData = await response.json();
                setCourses(jsonData);
                console.log(courses);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleApply = (courseId) => {
        // Handle apply button click for the given course id
        alert(`Applying for course ${courseId}`);
        // redirect to form
    };

    return (
        <div className={s.courses}>
        <h1>Courses</h1>
        <div className={s.coursesList}>
            {courses.map((course) => (
                <div key={course.course_id} className={`${s.courseCard} ${s.course}`}>
                    <h2>{course.course_name}</h2>
                    <p>{course.description}</p>
                    <p>{course.duration}</p>
                    <p>{course.instructor}</p>
                    <button onClick={() => handleApply(course.id)}>Apply</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Courses;
