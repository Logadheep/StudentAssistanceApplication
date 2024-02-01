import React, { useState } from 'react'

import s from './entry.module.css'

import StudentLogin from './StudentLogin'
import StudentRegistration from './StudentRegistration'

const Student = () => {
	const [showStudentLogin, setShowStudentLogin] = useState(true)

	const toggleStudentComponent = () => {
		setShowStudentLogin(!showStudentLogin)
	}

	return (
		<div className={s.formContainer}>
			{showStudentLogin ? <StudentLogin /> : <StudentRegistration />}
			<button onClick={toggleStudentComponent}>
				{showStudentLogin ? 'New user?' : 'Already have an account?'}
			</button>
		</div>
	)
}

export default Student