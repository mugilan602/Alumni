import React, { useState, useEffect } from 'react';
import AdminNavbar from '../Navbar/AdminNavbar';

const AdminPage = () => {
  const [jobCount, setJobCount] = useState(0);
  const [authorizedAlumniCount, setAuthorizedAlumniCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [selectedDepartment, setSelectedDepartment] = useState(null); // New state for selected department
  const [error, setError] = useState(null);

  const departments = [
    "AI & DS",
    "ECE",
    "MECH",
    "EIE",
    "CSE (IoT)",
    "M.Tech CSE",
    "CSBS",
    "IT",
    "CIVIL",
    "MBA",
    "EEE",
    "CSE",
    "ICE",
    "CSE (AI & ML)",
    "Mechanical and Automation",
  ];

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch job count
        const jobResponse = await fetch('http://localhost:3000/api/admin/getJobCount');
        if (!jobResponse.ok) throw new Error('Failed to fetch job count');
        const jobData = await jobResponse.json();
        setJobCount(jobData.jobCount);

        // Fetch authorized alumni count
        const authorizedResponse = await fetch('http://localhost:3000/api/admin/unauthorized-alumni-count');
        if (!authorizedResponse.ok) throw new Error('Failed to fetch authorized alumni count');
        const authorizedData = await authorizedResponse.json();
        setAuthorizedAlumniCount(authorizedData.unauthorizedCount);

        // Fetch applied students count
        const studentsResponse = await fetch('http://localhost:3000/api/admin/getAppliedStudentsCount');
        if (!studentsResponse.ok) throw new Error('Failed to fetch students count');
        const studentsData = await studentsResponse.json();
        setStudentsCount(studentsData.studentsCount);

      } catch (error) {
        setError(error.message);
      }
    };

    fetchCounts();
  }, []);

  const handleDepartmentClick = (department) => {
    setSelectedDepartment(department); // Set the clicked department as the selected one
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex">
      <AdminNavbar />
      <div className="flex-grow p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <div className="w-24 h-24">
              <img src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png" alt="Job" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Jobs</h2>
            <p className="text-gray-600">Count: {jobCount}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <div className="w-24 h-24">
              <img src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png" alt="Unauthorized Alumni" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Unauthorized Alumni</h2>
            <p className="text-gray-600">Count: {authorizedAlumniCount}</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
            <div className="w-24 h-24">
              <img src="https://militaryhealthinstitute.org/wp-content/uploads/sites/37/2021/08/blank-profile-picture-png.png" alt="Students" />
            </div>
            <h2 className="mt-4 text-lg font-semibold">Students</h2>
            <p className="text-gray-600">Count: {studentsCount}</p>
          </div>
        </div>

        {/* Department Buttons Section */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {departments.map((department, index) => (
            <button
              key={index}
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${selectedDepartment === department ? 'bg-green-500' : ''
                }`} // Add active state styling
              onClick={() => handleDepartmentClick(department)} // Handle button click
            >
              {department}
            </button>
          ))}
        </div>


      </div>
    </div>
  );
};

export default AdminPage;
