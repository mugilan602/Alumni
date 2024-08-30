import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AppliedStudents = () => {
  const { jobId } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/job/${jobId}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStudents(data.job.appliedBy || []);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchStudents();
  }, [jobId]);

  const handleDownload = (resumeUrl) => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('target', '_blank'); // Opens the link in a new tab
    link.click();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex-1 p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Applied Students</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="py-3 px-4 border-b text-left">Name</th>
              <th className="py-3 px-4 border-b text-left">Email</th>
              <th className="py-3 px-4 border-b text-left">Phone Number</th>
              <th className="py-3 px-4 border-b text-left">Resume</th>
            </tr>
          </thead>
          <tbody>
            {students.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-3 px-4 text-center">No students found.</td>
              </tr>
            ) : (
              students.map((student) => (
                <tr key={student._id}>
                  <td className="py-3 px-4 border-b text-left">{student.name}</td>
                  <td className="py-3 px-4 border-b text-left">{student.email}</td>
                  <td className="py-3 px-4 border-b text-left">{student.phoneNumber}</td>
                  <td className="py-3 px-4 border-b text-left">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => handleDownload(student.resume)}
                    >
                      Download Resume
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppliedStudents;
