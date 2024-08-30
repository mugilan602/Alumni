import { Link } from "react-router-dom";
import { useAdminLogout } from '../../hooks/useAdminLogout';

const AdminNavbar = () => {
  const { logout } = useAdminLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col h-full w-64 bg-[#005D99] text-white shadow-lg">
        <div className="flex flex-col items-center py-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        <ul className="flex flex-col h-full space-y-4 p-4">
          {/* Navigation links */}
          <li className="w-full">
            <Link className="text-white flex items-center py-2 px-4 rounded hover:bg-[#FFCB29] hover:text-[#005D99]" to="/adminpage">
              HOME
            </Link>
          </li>
          <li className="w-full">
            <Link className="text-white flex items-center py-2 px-4 rounded hover:bg-[#FFCB29] hover:text-[#005D99]" to="/getJobs">
              JOBS
            </Link>
          </li>
          <li className="w-full">
            <Link className="text-white flex items-center py-2 px-4 rounded hover:bg-[#FFCB29] hover:text-[#005D99]" to="/authorizedAlumni">
              AUTHORIZED ALUMNI
            </Link>
          </li>
          <li className="w-full">
            <Link className="text-white flex items-center py-2 px-4 rounded hover:bg-[#FFCB29] hover:text-[#005D99]" to="/unauthorizedAlumni">
              UNAUTHORIZED ALUMNI
            </Link>
          </li>
          <li className="w-full">
            <Link className="text-white flex items-center py-2 px-4 rounded hover:bg-[#FFCB29] hover:text-[#005D99]" to="/students">
              STUDENTS
            </Link>
          </li>
          <li className="w-full">
            <button
              onClick={handleLogout}
              className="text-white flex items-center py-2 px-4 rounded hover:bg-[#FFCB29] hover:text-[#005D99] w-full text-left"
            >
              LOGOUT
            </button>
          </li>
        </ul>
      </div>
      {/* The content will go here */}
    </div>
  );
};

export default AdminNavbar;
