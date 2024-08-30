import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';
const Students = () => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/admin/getAllAppliedStudents'); // Adjust the endpoint as needed
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setStudents(data.students);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchStudents();
    }, []);



    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <div className="flex">
                <AdminNavbar />
                <div className="flex-1 p-4 overflow-x-auto bg-gray-100">
                    <h1 className="text-2xl font-bold mb-4">Students and Job Details</h1>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="py-3 px-4 border-b text-left">Name</th>
                                    <th className="py-3 px-4 border-b text-left">Email</th>
                                    <th className="py-3 px-4 border-b text-left">Phone Number</th>
                                    <th className="py-3 px-4 border-b text-left">Resume</th>
                                    <th className="py-3 px-4 border-b text-left">Job Title</th>
                                    <th className="py-3 px-4 border-b text-left">Alumni Name</th>
                                    <th className="py-3 px-4 border-b text-left">Alumni Email</th>
                                    <th className="py-3 px-4 border-b text-left">Alumni Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    student.jobIds.map((job) => (
                                        <tr key={student._id + job._id}>
                                            <td className="py-3 px-4 border-b text-left">{student.name}</td>
                                            <td className="py-3 px-4 border-b text-left">{student.email}</td>
                                            <td className="py-3 px-4 border-b text-left">{student.phoneNumber}</td>
                                            <td className="py-3 px-4 border-b text-left">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    onClick={() => window.open(student.resume, '_blank')}
                                                >
                                                    Resume
                                                </button>
                                            </td>
                                            <td className="py-3 px-4 border-b text-left">{job.title}</td>
                                            <td className="py-3 px-4 border-b text-left">{job.userId?.firstName || 'N/A'}</td>
                                            <td className="py-3 px-4 border-b text-left">{job.userId?.email || 'N/A'}</td>
                                            <td className="py-3 px-4 border-b text-left">{job.userId?.phoneNumber || 'N/A'}</td>
                                        </tr>
                                    ))
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Students;
