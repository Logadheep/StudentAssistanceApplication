import React, { useState, useEffect} from 'react';

const Enquiry = () => {
    const [enquiries, setEnquiries] = useState([]);

    // Function to handle form submission
    useEffect(() => {
        // Fetch enquiries from the server
        fetch('http://localhost:8080/admin/getAllEnquries')
            .then((response) => response.json())
            .then((data) => setEnquiries(data));
    }, []);
    return (
        <div>
            <h1>Enquiries</h1>

            <table>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Course ID</th>
                        <th>Request Description</th>
                        <th>Reply</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map over the enquiries array and render table rows */}
                    {enquiries.map((enquiry, index) => (
                        <tr key={index}>
                            <td>{enquiry.email}</td>
                            <td>{enquiry.courseId}</td>
                            <td>{enquiry.description}</td>
                            <td>{enquiry.reply}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Enquiry;