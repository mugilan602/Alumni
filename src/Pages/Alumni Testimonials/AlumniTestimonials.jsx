import React, { useState, useEffect } from 'react';
import Navbar2 from '../Navbar/Navbar2';
import { Campus } from '../Campus/Campus';

// Importing JSON files
import defaultTestimonials from './data/defaultTestimonials.json';
import cseData from './data/cse.json';
import mechanicalData from './data/mechanical.json';
import civilData from './data/civil.json';
import eceData from './data/ece.json';
import eeeData from './data/eee.json';
import eieData from './data/eie.json';
import iceData from './data/ice.json';

const departmentData = {
    "All": defaultTestimonials,
    "CSE": cseData,
    "Mechanical Engineering": mechanicalData,
    "Civil Engineering": civilData,
    "ECE": eceData,
    "EEE": eeeData,
    "EIE": eieData,
    "ICE": iceData
};

const AlumniTestimonials = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('All');
    const [alumni, setAlumni] = useState(defaultTestimonials);

    useEffect(() => {
        setAlumni(departmentData[selectedDepartment]);
    }, [selectedDepartment]);

    const departments = [
        "All",
        "CSE",
        "Mechanical Engineering",
        "Civil Engineering",
        "ECE",
        "EEE",
        "EIE",
        "ICE"
    ];

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };

    return (
        <>
            <Navbar2 />
            <Campus />
            <div className="container mx-auto px-4 py-8 min-h-screen flex items-center flex-col justify-center">
                <div className="w-full max-w-md mb-8">
                    <label htmlFor="department" className="block text-lg font-semibold mb-2">Select Department:</label>
                    <select
                        id="department"
                        value={selectedDepartment}
                        onChange={handleDepartmentChange}
                        className="block w-full border border-gray-300 rounded-md p-2"
                    >
                        {departments.map(dept => (
                            <option key={dept} value={dept}>{dept}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-8 w-[85%]">
                    {alumni.map((alum, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6 flex flex-col lg:flex-row items-center justify-center lg:items-center"
                        >
                            {/* Left Section: Image and Alumni Info */}
                            <div className="flex-shrink-0 lg:w-1/3 text-center lg:text-left">
                                {/* Add a placeholder image if `alum.photo` is not available */}
                                <img
                                    src={alum.photo || 'path/to/placeholder/image.jpg'}
                                    alt={alum.name}
                                    className="w-32 h-32 lg:w-32 lg:h-32 rounded-full object-cover mb-4 lg:mb-0 mx-auto lg:mx-0"
                                />
                                <h2 className="text-xl font-semibold mt-4">{alum.name}</h2>
                                <p className="text-gray-600">{alum.designation} at {alum.company}</p>
                                {alum.batch && <p className="text-gray-500">Batch of {alum.batch}</p>}
                                <p className="text-gray-500">Department of {alum.department}</p> {/* Display department */}
                            </div>

                            {/* Right Section: Testimonial */}
                            <div className="lg:w-2/3 lg:pl-8 flex items-center justify-center lg:justify-start">
                                <p className="text-gray-700 italic text-center lg:text-left">"{alum.testimonial}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AlumniTestimonials;
