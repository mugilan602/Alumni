import React, { useState, useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Campus } from '../Campus/Campus';
import JobCard from '../../Components/JobCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedDomain, setSelectedDomain] = useState('');

  useEffect(() => {
    // Fetch jobs from API based on selected domain
    const fetchJobs = async () => {
      try {
        let url = 'http://localhost:3000/api/user/jobs';
        if (selectedDomain) {
          url += `?domain=${selectedDomain}`; // Append domain as query parameter
        }

        const response = await fetch(url);
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
  }, [selectedDomain]); // Re-run when selectedDomain changes

  const handleDomainChange = (event) => {
    setSelectedDomain(event.target.value);
  };

  return (
    <>
    <div className="bg-white">
      <Navbar2 />
      <Campus />
      <div className="lg:w-[85%] sm:w-[85%] container mx-auto px-4 bg-white">
        <div className="flex flex-col items-center mt-4">
          <a
            href="/create-job"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-2"
            target='_top'
          >
            Post Job
          </a>
          <div className="relative">
            <select
              className="bg-white border border-gray-300 text-gray-700 p-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={selectedDomain}
              onChange={handleDomainChange}
            >
              <option value="">Select Domain</option>
              {['Business Development', 'Design', 'Healthcare', 'Information Technology', 'Manufacturing', 'Marketing', 'Other', 'Software', 'Technology', 'Telecommunications'].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Jobs;
