/**
 * Global Routes
 */
import Home from './views/global/home';
import About from './views/global/about';
import SignUp from './views/global/signup';
import Login from './views/global/login';
import ForgotPassword from './views/global/forgotPassword';
import ChangePassword from './views/global/changePassword';

/**
 * Tutor Routes
 */
import ViewTutorProfile from './views/tutor/profile/viewTutorProfile';
import UpdateTutorProfile from './views/tutor/profile/updateTutorProfile';
import CreateTutorAdvertisement from './views/tutor/advertisements/createTutorAdvertisement';
import ListTutorAdvertisements from './views/tutor/advertisements/listTutorAdvertisements';
import ViewTutorAdvertisement from './views/tutor/advertisements/viewTutorAdvertisement';
import CreateTutorSchedule from './views/tutor/schedule/createTutorSchedule';
import ViewTutorSchedule from './views/tutor/schedule/viewTutorSchedule';
import ViewTutoringRequests from './views/tutor/tutoringRequests/viewTutoringRequest';
import TutorDashboard from './views/tutor/dashboard';

/**
 * Student Routes
 */
import UpdateStudentProfile from './views/student/profile/updateStudentProfile';
import ViewStudentProfile from './views/student/profile/viewStudentProfile';

/**
 * Imports
 */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faSearch, faTimes, faSort, faEllipsisV, faTimesCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

library.add(faStar, faSearch, faTimes, faSort, faEllipsisV, faTimesCircle, faPlusCircle);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Global Routes */}
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/update-password" element={<ChangePassword/>} />


          {/* Tutor Routes */}
          <Route path="/tutor/signup" element={<SignUp/>} />
          <Route path="/tutor/login" element={<Login/>} />
          <Route path="/tutor/dashboard" element={<TutorDashboard/>} />
          <Route path="/tutor/profile/view" element={<ViewTutorProfile/>} />
          <Route path="/tutor/profile/update" element={<UpdateTutorProfile/>} />
          <Route path="/tutor/advertisements/list" element={<ListTutorAdvertisements/>} />
          <Route path="/tutor/advertisements/create" element={<CreateTutorAdvertisement/>} />
          <Route path="/tutor/advertisements/view" element={<ViewTutorAdvertisement/>} />
          <Route path="/tutor/requests/view" element={<ViewTutoringRequests/>} />
          <Route path="/tutor/schedule/view" element={<ViewTutorSchedule/>} />
          <Route path="/tutor/schedule/create/:dayId" element={<CreateTutorSchedule/>} />
          


          {/* Student Routes */}
          <Route path="/student/profile/update" element={<UpdateStudentProfile/>} />
          <Route path="/student/profile/view" element={<ViewStudentProfile/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
