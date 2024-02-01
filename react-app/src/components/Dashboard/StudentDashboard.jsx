import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './dashboard.module.css';

// { username, courses, grades }
const StudentDashboard = () => {
	const navigate = useNavigate();
	const [courses, setCourses] = useState([
		{ id: 1, name: 'Course 1', teacher: 'Teacher A' },
		{ id: 2, name: 'Course 2', teacher: 'Teacher B' }
	]);
	let grades = [
		{ courseId: 1, courseName: 'Course 1', grade: 'A' },
		{ courseId: 2, courseName: 'Course 2', grade: 'B' }
	];

	const unenrollCourse = (courseId) => {
		setCourses(courses.filter(course => course.id !== courseId));
	}

	const enrollCourse = (courseId) => {
		// navigate(`/student/enroll/${courseId}`);
		navigate('/courses');
	}

	const gotoCourse = (courseId) => {
		navigate(`/student/course/${courseId}`);
	}

    return (
        <div className={s.dashboard}>
            <h2>Welcome, Student!</h2>

            <div className={s.courseSection}>
                <h3>Your Courses</h3>
                <table>
					<thead>
						<tr>
							<th>Course</th>
							<th>Teacher</th>
							<th>Manage</th>
						</tr>
					</thead>
					<tbody>
						{courses.map(course => (
							<tr key={course.id}>
								<td>{course.name}</td>
								<td>{course.teacher}</td>
								<td><button onClick={() => {unenrollCourse(course.id)}}>Unenroll</button></td>
							</tr>
						))}
						<button onClick={enrollCourse}>Enroll New Course</button>
					</tbody>
                </table>
            </div>

            <div className={s.gradeSection}>
                <h3>Your Grades</h3>
                <table>
                    <thead>
                        <tr>
							<th>Course Id</th>
                            <th>Course</th>
                            <th>Grade</th>
							<th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {grades.map(grade => (
                            <tr key={grade.courseId}>
								<td>{grade.courseId}</td>
                                <td>{grade.courseName}</td>
                                <td>{grade.grade}</td>
								<td><button onClick={() => {gotoCourse(grade.courseId)}}>Attend</button></td>
                            </tr>
						))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentDashboard;
