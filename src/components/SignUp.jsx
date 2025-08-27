import React, { useEffect, useState } from "react";
import { FaRegFileAlt, FaUserShield, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import axios from 'axios';


const SignUpPage = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [usernameMessage, setUsernameMessage] = useState(null);
  const [passwordMessage, setPasswordMessage] = useState(null);
  const [formDetails, setFormDetails] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    username: "",
    secretQuestion: "",
    secretAnswer: "",
  });
  const navigate = useNavigate();
  const [confirmPassword, setConfrimPassword] = useState("");

  const handleInput = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    if(e.target.name === 'username' && e.target.value.length < 6 ){
      setUsernameMessage('username needs to be at least 6 characters')
    }else{
      setUsernameMessage(null)
    }
    if(e.target.name === 'password' && e.target.value.length < 8){
      setPasswordMessage('password needs to be at least 8 characters')
    }else{
      setPasswordMessage(null)
    }
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    if (formDetails.password === confirmPassword) {
      console.log('sending request');
      try {
        const response = await axios.post(
          "http://localhost/LWI-backend/signUp.php",
          formDetails,
          { headers: { "Content-Type": "application/json" } }
        );
        setMessage(response.data.message);
        if(response.data.success){

          navigate("/login");
        }
      } catch (error) {
        setMessage("signup failed");
      }
    } else {
      setMessage("password mismatch");
    }
  };

  useEffect(() => {
   setTimeout(()=>{
    if(document.readyState === "complete"){
            setLoading(false);
        }else{
            const handleLoad = () => setLoading(false);
            window.addEventListener("load", handleLoad);

            return () => window.removeEventListener("load", handleLoad);
        }
  }, 2000)
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[white]">
      {loading && (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <ScaleLoader
            height="20"
            width="10"
            className="rounded-[50%]"
            color="black"
            visible={loading}
          />
        </div>
      )}
      <div className={`${loading ? "hidden" : "flex"}`}>
        <div className="md:w-1/2 bg-gray-100 p-8 hidden md:flex justify-center flex-col">
          <h2 className="text-2xl font-bold mb-6">
            Connect with millions of investors on the world’s leading social
            trading platform.
          </h2>

          <ul className="space-y-5">
            <li className="flex items-start space-x-4">
              <FaRegFileAlt className="text-[#F29C37] text-2xl" />
              <p>We're authorised by top European regulators.</p>
            </li>
            <li className="flex items-start space-x-4">
              <FaUserShield className="text-[#F29C37] text-2xl" />
              <p>We value and respect your privacy.</p>
            </li>
            <li className="flex items-start space-x-4">
              <FaLock className="text-[#F29C37] text-2xl" />
              <p>Your funds are kept safe at reputable banks.</p>
            </li>
          </ul>

          <p className="text-sm mt-8">
            By signing up you will receive marketing emails, which you may
            unsubscribe from via account settings.
          </p>
          <p className="text-sm mt-2">
            All trading involves risk. Only risk capital you're prepared to
            lose.
          </p>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="md:w-1/2 flex flex-col justify-center items-center p-8">
          <form className="w-full max-w-md space-y-4" onSubmit={handlesubmit}>
            <h2 className="text-2xl font-bold mb-4">Sign up</h2>

            <div className="flex space-x-2 ">
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                className="border p-2 flex-1 rounded w-[100px]"
                required
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="last Name"
                name="lastName"
                className="border p-2 flex-1 rounded w-[100px]"
                required
                onChange={handleInput}
              />
            </div>
           
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Define Password"
                name="password"
                className="border p-2 flex-1 rounded w-[100px]"
                required
                onChange={handleInput}
              />
              <input
                type="text"
                placeholder="Retype Password"
                name="confirmPassword"
                className="border p-2 flex-1 rounded w-[100px]"
                required
                onChange={(e) => setConfrimPassword(e.target.value)}
              />
            </div>
             {
             <p className={`text-red-600 text-sm transition-all duration-300 ease-in-out transform ${
    passwordMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 h-0 overflow-hidden'}`}>{passwordMessage}</p>
           }
           
            <input
              type="email"
              placeholder="Your E-mail Address"
              name="email"
              className="border p-2 w-full rounded"
              required
              onChange={handleInput}
            />
             <input
              type="text"
              placeholder="username"
              name="username"
              className="border p-2 w-full rounded"
              required
              onChange={handleInput}
            />
            {
             <p className={`text-red-600 text-sm transition-all duration-300 ease-in-out transform ${
    usernameMessage ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 h-0 overflow-hidden'}`}>{usernameMessage}</p>
           }
           
            <input
              type="text"
              placeholder="Secret question"
              name="secretQuestion"
              className="border p-2 w-full rounded"
              required
              onChange={handleInput}
            />
            <input
              type="text"
              placeholder="Secret answer"
              name="secretAnswer"
              className="border p-2 w-full rounded"
              required
              onChange={handleInput}
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="text-sm">
                I agree with Terms and conditions
              </label>
              </div>
              <Link to='/login' className="hover:opacity-[0.5]">
              Have an account? login
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0D3B2A] to-[#1b694c] text-white py-2 rounded cursor-pointer hover:opacity-[0.5]"
            >
              Register
            </button>
            <p className="text-red-600 text-center">
              {message}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
