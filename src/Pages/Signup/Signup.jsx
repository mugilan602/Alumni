import React, { useState } from "react";
import Navbar2 from "../Navbar/Navbar2";
import { useSignup } from "../../hooks/useSignup";
import { Campus } from "../Campus/Campus";

const Signup = () => {
  const { signup, loading, error, successMessage } = useSignup();
  const [formData, setFormData] = useState({
    profileImage: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    employeeType: "",
    position: "",
    companyName: "",
    location: "",
    batch: "",
    department: "",
    password: "",
    linkedIn: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "profileImage") {
      setFormData({ ...formData, profileImage: e.target.files[0] });
    } else {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
    } catch (error) {
      console.error("Error in handleSignup:", error);
    }
  };

  const handleOkClick = () => {
    // Close the success message box
    // This could involve setting state to hide the message, redirecting, etc.
    // For example:
    window.location.href = "/"; // Redirect after OK button click
  };

  return (
    <div>
      <Navbar2 />
      <Campus />
      <div className="full container mx-auto px-4 py-8 bg-gray-50">
        <div className="w-[60%] mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="font-bold text-2xl mb-4">Alumni Registration</h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.email}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.password}
                  required
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className="block mb-1">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  required
                />
              </div>
              <div>
                <label htmlFor="employeeType" className="block mb-1">
                  Employment Type:
                </label>
                <select
                  name="employeeType"
                  id="employeeType"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.employeeType}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                </select>
              </div>
              <div>
                <label htmlFor="position" className="block mb-1">
                  Position:
                </label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.position}
                  required
                />
              </div>
              <div>
                <label htmlFor="companyName" className="block mb-1">
                  Company Name:
                </label>
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.companyName}
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block mb-1">
                  Location:
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.location}
                  required
                />
              </div>

              <div>
                <label htmlFor="batch" className="block mb-1">
                  Batch:
                </label>
                <select
                  name="batch"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.batch}
                  required
                >
                  <option value="">Select Batch</option>
                  {[...Array(31)].map((_, index) => (
                    <option key={index} value={1999 + index}>
                      {1999 + index}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="department" className="block mb-1">
                  Department:
                </label>
                <select
                  name="department"
                  id="department"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.department}
                  required
                >
                  <option value="">Select Department</option>
                  {[
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
                  ].map((department, index) => (
                    <option key={index} value={department}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="linkedIn" className="block mb-1">
                  LinkedIn Profile:
                </label>
                <input
                  type="linkedIn"
                  name="linkedIn"
                  id="linkedIn"
                  className="w-full px-4 py-2 border rounded-md"
                  onChange={handleChange}
                  value={formData.linkedIn}
                  required
                />
              </div>
            </div>


            <div className="flex items-center mt-4">
              <label htmlFor="profileImage" className="block mb-1 mr-2">
                Profile Image:
              </label>
              <input
                type="file"
                name="profileImage"
                id="profileImage"
                onChange={handleChange}
                accept="image/*"
                className=" px-3 py-2 rounded-md"
              />
            </div>
            <button
              type="submit"
              className="block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 cursor-pointer ml-auto w-[17%]"
              disabled={loading}
            >
              Register
            </button>

            <div className="items-center mb-6">
              {loading && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                  <img src="https://i.giphy.com/3oEjI6SIIHBdRxXI40.webp" alt="Loading..." className="w-16 h-16" />
                </div>
              )}
            </div>
            {/* Error Message */}
            {!loading && error && (
              <p className="text-red-500 text-center text-md">{error}</p>
            )}
          </form>
        </div>
      </div>

      {/* Success Message Modal */}
      {successMessage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4">Success</h2>
            <p className="text-gray-700 mb-4">{successMessage}</p>
            <button
              onClick={handleOkClick}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}


    </div>
  );
};

export default Signup;