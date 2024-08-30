import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';

const AdminJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/user/jobs');
                if (!response.ok) {
                    throw new Error('Failed to fetch jobs');
                }
                const data = await response.json();
                setJobs(data.jobs);
            } catch (error) {
                console.error('Error fetching jobs:', error.message);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div className="flex">
            <AdminNavbar />
            <div className="flex-1 p-4 overflow-x-auto bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="py-3 px-4 border-b text-left">Title</th>
                                <th className="py-3 px-4 border-b text-left">Company</th>
                                <th className="py-3 px-4 border-b text-left">Posted By</th>
                                <th className="py-3 px-4 border-b text-left">Email</th>
                                <th className="py-3 px-4 border-b text-left">Phone Number</th>
                                <th className="py-3 px-4 border-b text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job) => (
                                <tr key={job._id}>
                                    <td className="py-3 px-4 border-b text-left">{job.title}</td>
                                    <td className="py-3 px-4 border-b text-left">{job.company}</td>
                                    <td className="py-3 px-4 border-b text-left">
                                        {job.userId.firstName}
                                    </td>
                                    <td className="py-3 px-4 border-b text-left">{job.userId.email}</td>
                                    <td className="py-3 px-4 border-b text-left">{job.userId.phoneNumber}</td>
                                    <td className="py-3 px-4 border-b text-left">
                                        <a
                                            href={`/applied-students/${job._id}`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            View Applied Students
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminJobs;
