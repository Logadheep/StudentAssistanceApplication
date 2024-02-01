import React from 'react';

import s from './dashboard.module.css';

const FacultyDashboard = () => {
    // Function to handle student management
    const handleStudentManagement = () => {
        // Add your logic for student management here
    };

    // Function to handle course management
    const handleCourseManagement = () => {
        // Add your logic for course management here
    };

    // Sample data for students and courses
    const students = [
        { id: 1, name: 'John Doe', courses: 'Mathematics'},
        { id: 2, name: 'Jane Smith', courses: 'English'},
        { id: 3, name: 'Bob Johnson', courses: 'Science'},
    ];

    const courses = [
        { id: 1, name: 'Mathematics', number: 0 },
        { id: 2, name: 'English', number: 0 },
        { id: 3, name: 'Science', number: 0 },
    ];

    return (
        <div className={s.dashboard}>
            <header>
                <h1>Faculty Dashboard</h1>
                {/* Add your dashboard content here */}
                <p>Welcome to the Faculty Dashboard!</p>
                <button onClick={handleStudentManagement}>Manage Students</button>
                <button onClick={handleCourseManagement}>Manage Courses</button>
            </header>
            <div className={s.studentManagement}>
                <h2>Students</h2>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course Enrolled</th>
                            <th>Manage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.course}</td>
                                <td><button>Dismiss</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={s.courseSection}>
            <h2>Courses</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Number of Students</th>
                        <th> Manage </th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.id}</td>
                            <td>{course.name}</td>
                            <td>{course.number}</td>
                            <td><button>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default FacultyDashboard;
