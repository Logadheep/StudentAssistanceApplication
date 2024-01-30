import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminRegistration from './AdminRegistration';
import StudentLogin from './StudentLogin';
import StudentRegistration from './StudentRegistration';

const Admin = () => {
    const [showAdminLogin, setShowAdminLogin] = useState(true);
    const [showStudentLogin, setShowStudentLogin] = useState(true);

    const toggleAdminComponent = () => {
        setShowAdminLogin(!showAdminLogin);
    };

    const toggleStudentComponent = () => {
        setShowStudentLogin(!showStudentLogin);
    };

    return (
        <div>
            <button onClick={toggleAdminComponent}>
                {showAdminLogin ? 'Switch to Admin Registration' : 'Switch to Admin Login'}
            </button>
            {showAdminLogin ? <AdminLogin /> : <AdminRegistration />}
            
            <button onClick={toggleStudentComponent}>
                {showStudentLogin ? 'Switch to Student Registration' : 'Switch to Student Login'}
            </button>
            {showStudentLogin ? <StudentLogin /> : <StudentRegistration />}
        </div>
    );
};

export default Admin;
