import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';

const UnAuthorizedAlumni = () => {
    const [alumni, setAlumni] = useState([]);

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                // Fetch department from localStorage
                const department = localStorage.getItem('selectedDepartment');

                // Construct the URL with the department filter if it exists
                const url = department
                    ? `http://localhost:3000/api/admin/unauthorized-users?department=${department}`
                    : 'http://localhost:3000/api/admin/unauthorized-users';

                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch unauthorized alumni');
                }
                const data = await response.json();
                setAlumni(data.users);
            } catch (error) {
                console.error('Error fetching unauthorized alumni:', error.message);
            }
        };

        fetchAlumni();
    }, []);

    const authorizeAlumnus = async (userId) => {
        try {
            const response = await fetch('http://localhost:3000/api/admin/authorize', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId }),
            });
            if (!response.ok) {
                throw new Error('Failed to authorize user');
            }
            // Remove the authorized user from the list
            setAlumni((prevAlumni) => prevAlumni.filter((alumnus) => alumnus._id !== userId));
            alert('User authorized successfully!');
        } catch (error) {
            console.error('Error authorizing user:', error.message);
            alert('Failed to authorize user.');
        }
    };

    return (
        <div className="flex">
            <AdminNavbar />
            <div className="flex-1 p-4 overflow-x-auto">
                <h1 className="text-2xl font-bold mb-4">Unauthorized Alumni:</h1>
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
                                <th className="py-3 px-4 border-b text-left">Action</th>
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
                                    <td className="py-3 px-4 border-b text-left">
                                        <button
                                            onClick={() => authorizeAlumnus(alumnus._id)}
                                            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                        >
                                            Authorize
                                        </button>
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

export default UnAuthorizedAlumni;
