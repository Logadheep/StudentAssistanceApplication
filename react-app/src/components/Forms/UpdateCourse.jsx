import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import s from './forms.module.css';

const UpdateCourse = (courseId) => {
    courseId = useParams().id;

    const [course, setCourse] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8080/admin/getCourseById/${courseId}`);
                const jsonData = await response.json();
                setCourse(jsonData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [courseId]);


    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.update(`http://localhost:8080/admin/updateCourses/${courseId}`, course);
    };

    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
        <h2>Update Course with ID: {course.course_id}</h2>
            <label className={s.formLabel}>ID: <input 
                type="number"
                name="id"
                value={course.course_id}
                onChange={handleChange}
                className={s.formInput}
            />
            </label>

            <label className={s.formLabel}>
                Title:
                <input
                    type="text"
                    name="title"
                    value={course.course_name}
                    onChange={handleChange}
                    className={s.formInput}
                />
            </label>
            <br />
            <label className={s.formLabel}>
                Instructor:
                <input
                    type="text"
                    name="instructor"
                    value={course.instructor}
                    onChange={handleChange}
                    className={s.formInput}
                />
            </label>
            <br />
            <label className={s.formLabel}>
                Description:
                <input
                    type="text"
                    name="description"
                    value={course.description}
                    onChange={handleChange}
                    className={s.formInput}
                />
            </label>
            <br />
            <label className={s.formLabel}>
                Duration:
                <input
                    type="text"
                    name="duration"
                    value={course.duration}
                    onChange={handleChange}
                    className={s.formInput}
                />
            </label>
            <br />
            <label className={s.formLabel}>
                Fees:
                <input
                    type="number"
                    name="fees"
                    value={course.fees}
                    onChange={handleChange}
                    className={s.formInput}
                />
            </label>
            <br />
            <button type="submit" className={s.formButton}>Update Course</button>
        </form>
    );
};

export default UpdateCourse;
