import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import AboutUs from './pages/AboutUs';
import FAQ from './pages/FAQ';
import SupportForm from './pages/ContactUs';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Footer from './components/Footer';
import SignUpPage from './components/SignUp';
import LoginPage from './components/Login';
import { AboutUsBox, WithdrawCard } from './components/Cards';
import ScrollToTop from './components/ScrollToTop';
import ForgetPassword from './components/ForgetPassword';
import ProtectedRoute from './pages/ProtectedRoute';
import AdmminPanel from './pages/AdminPanel';

function App() {
  const location = useLocation();
  const hide = location.pathname === '/dashboard' || location.pathname === '/adminPanel' || location.pathname === '/forgetPassword' ;

  return (
    <div className='overflow-x-hidden w-full h-full relative'>
      {!hide && <NavBar />}
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/support' element={<SupportForm/>} />
        <Route path='/FAQ' element={<FAQ/>} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signup' element={<SignUpPage/>} />
        <Route path='/forgetPassword' element={<ForgetPassword/>} />
        <Route path='/adminPanel' element={<AdmminPanel/>} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
      {!hide && <Footer />}
    </div>
  );
}

export default App;
