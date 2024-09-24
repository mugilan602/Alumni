import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import Profile from "./Pages/Profile/Profile";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import ChaptersPage from "./Pages/Chapters/Chapters";
import CeoMessagePage from "./Pages/CeoMessage/CeoMessage";
import PrincipalMessage from "./Pages/Principle Message/PrincipleMessage";
import Jobs from "./Pages/Jobs/Jobs";
import EventsPage from "./Pages/EventsPage/EventsPage";
import AboutUsPage from "./Pages/AboutUs/AboutUs";
import ContactUsPage from "./Pages/ContactUs/ContactUs";
import CreateJob from "./Pages/CreateJob/CreateJob";
import JobApply from "./Pages/JobApply/JobApply";
import AdminPage from "./Pages/AdminPage/AdminPage";
import AdminJobs from "./Pages/AdminPage/AdminJobs";
import AuthorizedAlumni from "./Pages/AdminPage/AuthorizedAlumni";
import AppliedStudents from "./Pages/AdminPage/AppliedStudents";
import AlumniDirectory from "./Pages/Alumni Directory/AlumniDirectory";
import AdminLogin from "./Pages/Admin Login/AdminLogin";
import Event from "./Pages/Veera Sir Event/Event";
import { useAdminAuthContext } from "./hooks/useAdminAuthContext";
import { useAuthContext } from "./hooks/useAuthContext";
import UnAuthorizedAlumni from "./Pages/AdminPage/UnAuthorizedAlumni";
import Students from "./Pages/AdminPage/Students";
import AlumniTestimonials from "./Pages/Alumni Testimonials/AlumniTestimonials";
import Events from "./Pages/EventsPage/Events";
import EventDetails from "./Pages/EventsPage/EventDetails";
import Achievements from "./Pages/Achievements/Achievements";
function App() {
  const { admin } = useAdminAuthContext();
  const { user } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      {user && <Route path="/profile" element={<Profile />} />}
      <Route path="/chapters" element={<ChaptersPage />} />
      <Route path="/ceomessage" element={<CeoMessagePage />} />
      <Route path="/principalmessage" element={<PrincipalMessage />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/eventspage" element={<Events />} />
      <Route path="/event/:name" element={<EventDetails />} />
      <Route path="/alumniDirectory" element={<AlumniDirectory />} />
      <Route path="/alumniTestimonials" element={<AlumniTestimonials />} />
      <Route path="/achievements" element={<Achievements />} />

      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/contactus" element={<ContactUsPage />} />
      <Route path="/create-job" element={<CreateJob />} />
      <Route path="/apply/:jobId" element={<JobApply />} />
      <Route path="/event1" element={<Event />} />

      {!admin && <Route path="/adminlogin" element={<AdminLogin />} />}
      {admin && <Route path="/adminpage" element={<AdminPage />} />}
      {admin && (
        <Route
          path="/applied-students/:jobId"
          element={<AppliedStudents />}
        />
      )}
      {admin && (
        <Route
          path="/getJobs"
          element={<AdminJobs />}
        />
      )}
      {admin && (
        <Route
          path="/authorizedAlumni"
          element={<AuthorizedAlumni />}
        />
      )}
      {admin && (
        <Route
          path="/unauthorizedAlumni"
          element={<UnAuthorizedAlumni />}
        />
      )}
      {admin && (
        <Route
          path="/students"
          element={<Students />}
        />
      )}
    </Routes>
  );
}

export default App;
