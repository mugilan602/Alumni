import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';

const AuthorizedAlumni = () => {
    const [alumni, setAlumni] = useState([]);

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                // Fetch department from localStorage
                const department = localStorage.getItem('selectedDepartment');

                // Construct the URL with the department filter if it exists
                const url = department
                    ? `http://localhost:3000/api/admin/authorized-users?department=${department}`
                    : 'http://localhost:3000/api/admin/authorized-users';

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch authorized alumni');
                }
                const data = await response.json();
                setAlumni(data.users);
            } catch (error) {
                console.error('Error fetching authorized alumni:', error.message);
            }
        };

        fetchAlumni();
    }, []);

    return (
        <div className="flex">
            <AdminNavbar />
            <div className="flex-1 p-4 overflow-x-auto">
                <h1 className="text-2xl font-bold mb-4">Authorized Alumni:</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                        <thead className="bg-gray-200 text-gray-700">
                            <tr>
                                <th className="py-3 px-4 border-b text-left">First Name</th>
                                <th className="py-3 px-4 border-b text-left">Last Name</th>
                                <th className="py-3 px-4 border-b text-left">Email</th>
                                <th className="py-3 px-4 border-b text-left">Phone Number</th>
                                <th className="py-3 px-4 border-b text-left">Department</th>
                                <th className="py-3 px-4 border-b text-left">Batch</th>
                                <th className="py-3 px-4 border-b text-left">LinkedIn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumni.map((alumnus) => (
                                <tr key={alumnus._id}>
                                    <td className="py-3 px-4 border-b text-left">{alumnus.firstName}</td>
                                    <td className="py-3 px-4 border-b text-left">{alumnus.lastName}</td>
                                    <td className="py-3 px-4 border-b text-left">{alumnus.email}</td>
                                    <td className="py-3 px-4 border-b text-left">{alumnus.phoneNumber}</td>
                                    <td className="py-3 px-4 border-b text-left">{alumnus.department}</td>
                                    <td className="py-3 px-4 border-b text-left">{alumnus.batch}</td>
                                    <td className="py-3 px-4 border-b text-left">
                                        <a
                                            href={alumnus.linkedIn}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            LinkedIn Profile
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

export default AuthorizedAlumni;
