import React, { useState } from 'react';
import FacultyLogin from './FacultyLogin';
import FacultyRegistration from './FacultyRegistration';

import s from './entry.module.css';

const Faculty = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSwitch = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className={s.formContainer}>
            {isLogin ? (
                <FacultyLogin />
            ) : (
                <FacultyRegistration />
            )}

            <button className={s.formContainer} onClick={handleSwitch}>
                {isLogin ? 'New user?' : 'Already have an account?'}
            </button>
        </div>
    );
};

export default Faculty;
