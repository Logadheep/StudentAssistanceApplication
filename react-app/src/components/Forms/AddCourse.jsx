import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './forms.module.css'; // Import css module styles

const AddCourse = () => {
    const navigate = useNavigate();
    const [course, setCourse] = useState({
        course_name: '',
        instructor: '',
        duration: '',
    });

    const handleChange = (e) => {
        setCourse({ ...course, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        try{
            e.preventDefault();
            // Add your logic here to handle the form submission
            axios.post('http://localhost:8080/admin/postCourses', course);
            console.log(course);
            navigate('/adminpanel');     
        }   
        catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
        <h2>Add Course</h2>
            <label className={styles.formLabel}>
                Course Name:
                <input
                    type="text"
                    name="course_name"
                    value={course.course_name}
                    onChange={handleChange}
                    className={styles.formInput} // Apply css module styles
                    placeholder='Enter Course Name Here...'
                />
            </label>
            <br />
            <label className={styles.formLabel}>
                Instructor:
                <input
                    type="text"
                    name="instructor"
                    value={course.instructor}
                    onChange={handleChange}
                    className={styles.formInput} // Apply css module styles
                    placeholder='Enter Instructor Name Here...'
                />
            </label>
            <br />
            <label className={styles.formLabel}>
                Description:
                
                    {// <input
                //     type="text"
                //     name="description"
                //     value={course.description}
                //     onChange={handleChange}
                //     className={styles.formInput} // Apply css module styles
                //     placeholder='Enter Course Description Here...'
                // />
                    }
                
                <textarea 
                    type="text"
                    name="description"
                    value={course.description}
                    onChange={handleChange}
                    className={styles.formInput} // Apply css module styles
                    placeholder='Enter Course Description Here...'
                />
            </label>
            <br />
            <label className={styles.formLabel}>
                Duration:
                <input
                    type="text"
                    name="duration"
                    value={course.duration}
                    onChange={handleChange}
                    className={styles.formInput} // Apply css module styles
                    placeholder='Enter Course Duration Here...'
                />
            </label>
            <br />
            <label className={styles.formLabel}>
                Fees:
                <input
                    type="number"
                    name="fees"
                    value={course.fees}
                    onChange={handleChange}
                    className={styles.formInput} // Apply css module styles
                />
            </label>
            <br />
            <label className={styles.formLabel}>
                Level:
                <input
                    type="text"
                    name="level"
                    value={course.level}
                    onChange={handleChange}
                    placeholder='Beginner, Intermediate, Advanced'
                    className={styles.formInput} // Apply css module styles
                />
            </label>
            <br />
            <button type="submit" className={styles.formButton}>Add Course</button> 
        </form>
    );
};

export default AddCourse;
