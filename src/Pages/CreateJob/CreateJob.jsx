import React, { useState } from "react";
import Navbar2 from "../Navbar/Navbar2";
import { Campus } from "../Campus/Campus";
import useCreateJob from "../../hooks/useCreateJob";
import styles from "./CreateJob.module.css";

const CreateJob = () => {
  const { createJob, loading, error, jobId } = useCreateJob();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [pay, setPay] = useState("");
  const [location, setlocation] = useState("");
  const [domain, setDomain] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const jobDetails = {
      title,
      company,
      pay,
      location,
      domain
    };
    createJob(jobDetails);
    // Optionally reset form fields or perform other actions after job creation
    setTitle("");
    setCompany("");
    setPay("");
    setlocation("");
    setDomain("");
  };

  return (
    <>
      <Navbar2 />
      <Campus />
      <div className="w-4/5 mx-auto flex mb-5 shadow-lg mt-3">
        <div className="w-1/2 p-4 bg-gray-100">
          <h1 className="text-3xl mt-8 mb-5">Dear Alumni,</h1>
          <p className="text-gray-700 leading-relaxed mb-5">
            We extend heartfelt thanks for sharing the exciting new job
            opportunity with our students. Your ongoing support and commitment
            to our community are invaluable in helping us navigate the
            professional landscape. Your contributions truly make a difference
            in shaping our students' careers, and we look forward to continuing
            to benefit from your expertise and guidance.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            <a href="mailto:mugilan7778@gmail.com">Contact Admin</a>
          </button>
        </div>
        <div className="w-1/2 bg-white">
          <div className="container mx-auto px-4 m-10">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Publish a New Job
            </h2>
            <form
              onSubmit={handleSubmit}
              className={`max-w-lg mx-auto ${styles[("form-group", ["form"])]}`}
            >
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className={`mt-1 block w-[85%] mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                <label htmlFor="title">Title</label>
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  required
                  className={`mt-1 block w-[85%] mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                <label htmlFor="company">Company</label>
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="pay"
                  value={pay}
                  onChange={(e) => setPay(e.target.value)}
                  required
                  className={`mt-1 block w-[85%] mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                <label htmlFor="pay">Pay</label>
              </div>
              <div className={styles["form-group"]}>
                <input
                  type="text"
                  id="location"
                  value={location}
                  onChange={(e) => setlocation(e.target.value)}
                  required
                  className={`mt-1 block w-[85%] mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                <label htmlFor="location">Location</label>
              </div>
              <div className={styles["form-group"]}>
                <select
                  id="domain"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  required
                  className="mt-1 block w-[85%] mx-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Domain</option>
                  {['Business Development', 'Design', 'Healthcare', 'Information Technology', 'Manufacturing', 'Marketing', 'Other', 'Software', 'Technology', 'Telecommunications'].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <label htmlFor="domain"></label>
              </div>

              <button
                type="submit"
                className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline ${styles["form-button"]}`}
                disabled={loading}
              >
                {loading ? "Creating..." : "Publish Job"}
              </button>
              {error && (
                <p className="text-red-500 mt-2 text-center">
                  You must be Signed In to post the Job
                </p>
              )}
              {jobId && (
                <p className="text-green-500 mt-2 text-center">
                  Job created successfully
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateJob;
