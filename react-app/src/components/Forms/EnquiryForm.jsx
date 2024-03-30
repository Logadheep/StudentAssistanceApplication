import React, { useState } from 'react';
import styles from './forms.module.css';
import axios from 'axios';

const EnquiryForm = (props) => {
    const [id, setId] = useState();
    const [enquiry, setEnquiry] = useState({
        email: '',
        reply: '',
        course: '',
        description: ''
    });
    const [course, setCourse] = useState({

    })

    const handleSubmit = (e) => {
        changeCourse(id);
        try{
            e.preventDefault();
            // Add your logic here to handle the form submission
            axios.post('http://localhost:8080/user/postEnquiry', enquiry);
            console.log(enquiry);
            navigate('/studentDashboard');     
        }   
        catch (error) {
            console.log(error);
        }
    };

    const changeCourse = (id) => {
        try {
            const response = fetch(`http://localhost:8080/getCoursesById/${id}`);
            const jsonData = response.json();
            setCourse(jsonData);
            setEnquiry({...enquiry, course: course});
            console.log(course);
        }
        catch(e){
            console.log(e);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <br />
            <label className={styles.formLabel}>
                Email:
                <input type="email" value={enquiry.email} onChange={(e) => setEnquiry({...enquiry, email: e.target.value})} className={styles.formInput}/>
            </label>
            <br />
            <label className={styles.formLabel}>
                Course ID:
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} className={styles.formInput}/>
            </label>
            <br />
            <label className={styles.formLabel}>
                Enquiry description:
                <input type="text" value={enquiry.description} onChange={(e) => setEnquiry({...enquiry, description: e.target.value})} className={styles.formInput}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EnquiryForm;