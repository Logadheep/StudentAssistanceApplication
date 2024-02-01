import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminRegistration from './AdminRegistration';

import s from './entry.module.css';
const Admin = () => {
    const [showAdminLogin, setShowAdminLogin] = useState(true);

    const toggleAdminComponent = () => {
        setShowAdminLogin(!showAdminLogin);
    };

    return (
        <div className={s.formContainer}>
            {showAdminLogin ? <AdminLogin /> : <AdminRegistration />}
            <button onClick={toggleAdminComponent}>
                {showAdminLogin ? 'New user?' : 'Already have an account?'}
            </button>
        </div>
    );
};

export default Admin;
