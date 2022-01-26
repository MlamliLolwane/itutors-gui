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
import UpdateTutorProfile from './views/tutor/profile/updateTutorProfile';
import CreateTutorAdvertisement from './views/tutor/advertisements/createTutorAdvertisement';
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
import { faStar, faSearch, faTimes, faSort } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

library.add(faStar, faSearch, faTimes, faSort)

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
          <Route path="/tutor/dashboard" element={<TutorDashboard/>} />
          <Route path="/tutor/profile/update" element={<UpdateTutorProfile/>} />
          <Route path="/tutor/signup" element={<SignUp/>} />
          <Route path="/tutor/login" element={<Login/>} />
          <Route path="/tutor/advertisements/create" element={<CreateTutorAdvertisement/>} />


          {/* Student Routes */}
          <Route path="/student/profile/update" element={<UpdateStudentProfile/>} />
          <Route path="/student/profile/view" element={<ViewStudentProfile/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
