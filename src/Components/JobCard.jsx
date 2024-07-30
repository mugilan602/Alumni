import React from 'react';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
  const { _id, title, company, pay, experience, location } = job;
  const jobId = _id;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 lg:m-3">
      <div className="bg-blue-500 text-white p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{company}</p>
      </div>
      <div className="p-4">
        {location && (
          <p className="mb-2 text-gray-700">
            <strong>Location:</strong> {location}
          </p>
        )}
        <p className="mb-2 text-gray-700">
          <strong>Salary:</strong> {pay}
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Experience:</strong> {experience}
        </p>
        <Link
          to={`/apply/${jobId}`}
          className="block bg-blue-500 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Apply
        </Link>
      </div>
    </div>
  );
}

export default JobCard;
