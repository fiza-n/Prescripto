import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';
import Signin from './pages/auth/Signin';
import Signup from './pages/auth/Signup';
import Doctors from './pages/Doctors';
import Contacts from './pages/Contacts';
import About from './pages/About';
import MyAppointments from './pages/user/MyAppointments';
import MyProfile from './pages/user/MyProfile';
import Appointment from './pages/doctor/Appointment';
import Navbar from './components/Navbar';


const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors/:specialty" element={<Doctors />} />
      <Route path="/contact" element={<Contacts />} />
      <Route path="/about" element={<About />} />
      <Route path="/my-appointments" element={<MyAppointments />} />
      <Route path="/appointments" element={<Appointment />} />
      <Route path="/my-profile" element={<MyProfile />} />
      {/* <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} /> */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
    </div>
  );
}

export default App;