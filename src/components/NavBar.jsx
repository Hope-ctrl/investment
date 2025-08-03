import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button"; // Assuming you're using this elsewhere

// Navbar Items
const navItems = [
  { tag: 'Home', link: '/' },
  { tag: 'FAQ', link: '/FAQ' },
  { tag: 'About us', link: '/about' },
  { tag: 'Contact us', link: '/support' }
];

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const location = useLocation();

  // Toggle Nav
  const handleShow = () => setOpenNav(prev => !prev);
  useEffect(()=>{
    setOpenNav(false);
  },[location.pathname])

  return (
    <div className="relative z-50">
      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white text-black p-6 shadow-lg transition-transform duration-500 ease-in-out z-20
          ${openNav ? 'translate-x-0' : '-translate-x-full'}
          w-[80vw] max-w-[300px] lg:hidden
        `}
      >
        <button className="text-2xl mb-4" onClick={handleShow}>×</button>
        <ul className="space-y-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} onClick={handleShow} className="text-lg font-medium hover:text-orange-500">
                {item.tag}
              </Link>
            </li>
          ))}
        </ul>

        {/* login and sign up button */}
         <div className="w-[100%] h-[20%] flex items-center gap-[20px]">
          <Link to="/login">
            <button className="bg-[#F29C37] hover:opacity-75 cursor-pointer w-[100px] h-[40px]">Login</button>
          </Link>
          <Link to="/signup">
            <button className="border-[#F29C37] border-2 hover:opacity-75 cursor-pointer w-[100px] h-[40px] text-[#F29C37]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      

      <div className="w-[100vw] h-[80px]">
        {/* Top Bar - Mobile */}
      <div className="flex items-center w-[100vw] justify-between h-[80px] px-4 bg-black text-white lg:hidden fixed z-10">
        <button onClick={handleShow} className="text-2xl">&#9776;</button>
        <Link to="/" className="uppercase font-bold text-center hover:text-[#F29C37]">
          Living Wealth <span className="text-[#F29C37]">Investment</span>
        </Link>
      </div>

      {/* Top Bar - Desktop */}
      <div className="hidden lg:flex w-full h-[70px] justify-between items-center px-[30px] bg-black text-white fixed">
        <Link to="/" className="uppercase font-bold text-white hover:opacity-[0.7]">
          Living Wealth <span className="text-[#F29C37]">Investment</span>
        </Link>
        <ul className="w-[30%] h-full flex justify-evenly items-center">
          {navItems.map((navItem, index) => (
            <li key={index}>
              <Link to={navItem.link} className="hover:text-[#F29C37]">{navItem.tag}</Link>
            </li>
          ))}
        </ul>
        <div className="w-[20%] h-full flex justify-center items-center gap-[20px]">
          <Link to="/login">
            <button className="bg-[#F29C37] hover:opacity-75 cursor-pointer w-[150px] lg:w-[100px] h-[40px]">Login</button>
          </Link>
          <Link to="/signup">
            <button className="border-[#F29C37] border-2 hover:opacity-75 cursor-pointer w-[150px] lg:w-[100px]  h-[40px] text-[#F29C37]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
