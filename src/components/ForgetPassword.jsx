import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import emailjs from "emailjs-com";
import axios from "axios";

const ForgetPassword = () => {

   const generatedOtp = Math.floor(
        100000 + Math.random() * 900000
      ).toString(); // 6-digit OTP

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [details, setDetails] = useState({
    email: null,
    otp: generatedOtp,
    password: null, 
    cPassword: null
  });

   
    const [otpValues, setOtpValues] = useState(Array(6).fill(''));
  
    const inputsRef = useRef([]);
     
  
    const handleKeyDown = (e, index) => {
      if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    };
  const [showForm, setShowForm] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
  const value = e.target.value;

  // Allow only single digit numbers
  if (!/^\d?$/.test(value)) return;

  const newOtp = [...otpValues];
  newOtp[index] = value;
  setOtpValues(newOtp);

  // Auto focus next input
  if (value !== "" && index < otpValues.length - 1) {
    inputsRef.current[index + 1]?.focus();
  }

};


  

  const auth = async (e) => {

    e.preventDefault();

    const response = await axios.post('http://localhost/LWI-backend/forgetPassword.php', details, {headers: {'Content-Type' : 'application/json'}});
    console.log(details.email)
    if (response.data.success) {
      await emailjs
        .send(
          "service_1lfg48i", // your EmailJS service ID
          "template_nw8czl6", // your EmailJS template ID
          {
            email: details.email, 
            passcode: details.otp, // the variable used in your EmailJS template
          },
          "P-Bbo5_RYv0oHd8eD" // your EmailJS user/public key
        )
        .then(
          () => {
            alert("OTP sent successfully!");
            setShowForm(2);
          },
          (error) => {
            alert("Failed to send OTP: " + error.text);
          }
        );
    } else {
      setMessage("Incorrect email");
    }
  };

  const otpAuth = async (e)=>{
    e.preventDefault()
     setDetails((prev) => ({...prev , otp: otpValues.join('')}));
     console.log(details.otp)
    try {
      const otpResponse = await axios.post('http://localhost/LWI-backend/otpAuth.php', details, {headers: {'Content-Type' : 'application/json'}});

    if(otpResponse.data.success){
      setShowForm(3);
    }else{
      alert(otpResponse.data.message);
    }
    } catch (error) {
      console.log('could not send request');
    }
  }

  const newPassAuth = async (e)=>{
     e.preventDefault()
    if(details.cPassword === details.password){
      console.log(details.password)
    try {
      const passwordResponse = await axios.post('http://localhost/LWI-backend/updatePassword.php', details, {headers: {'Content-Type' : 'application/json'}});

    if(passwordResponse.data.success){
      navigate('/login');
    }else{
      alert(passwordResponse.data.message);
    }
    } catch (error) {
      console.log('could not send request');
    }
    }else{
      setMessage('password mismatch')
    }
  }

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
    <div className="min-h-screen relative bg-white overflow-hidden">
      {loading && (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center fixed z-20 bg-white">
          <ScaleLoader
            height="20"
            width="10"
            className="rounded-[50%]"
            color="black"
            visible={loading}
          />
        </div>
      )}
      {
        showForm == 1 && (<div>
        {/* Background Circles */}
        <div className="hidden md:flex justify-center items-center gap-[150px] relative top-0 left-0 w-[100%] h-[500px]">
          <div className="w-60 h-60 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-90"></div>
          <div className="mt-[150px] w-80 h-80 bg-gradient-to-br from-[#0D3B2A] to-[#13543c] rounded-full opacity-90"></div>
          <div className="absolute bottom-10 left-40 w-4 h-4 bg-[#0D3B2A] rounded-full"></div>
          <div className="absolute top-80 right-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Password Retriever Form */}
        <div className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center items-center">
          <div className="relative z-10 bg-white shadow-md rounded-lg p-8 w-[90%] max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Request OTP</h2>
            <form className="space-y-4" onSubmit={auth}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                onChange={(e) => setDetails((prev) => ({...prev, email: e.target.value}))}
              />
              <div className="flex justify-end">
                <Link
                  className="text-sm text-[#0D3B2A] hover:underline"
                  to="/login"
                >
                  Remember password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0D3B2A] to-[#13563e] text-white font-semibold py-2 rounded-full cursor-pointer hover:opacity-[0.5]"
              >
                Send OTP
              </button>
            </form>
            <p className="text-red-700 text-center mt-[10px]">{message}</p>
          </div>
        </div>
      </div>)
      }
      {
        showForm == 2 && (
          <div>
        {/* Background Circles */}
        <div className="hidden md:flex justify-center items-center gap-[150px] relative top-0 left-0 w-[100%] h-[500px]">
          <div className="w-60 h-60 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-90"></div>
          <div className="mt-[150px] w-80 h-80 bg-gradient-to-br from-[#0D3B2A] to-[#13543c] rounded-full opacity-90"></div>
          <div className="absolute bottom-10 left-40 w-4 h-4 bg-[#0D3B2A] rounded-full"></div>
          <div className="absolute top-80 right-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>

        {/* OTP Input Form */}
        <div className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center items-center">
          <div className="relative z-10 bg-white shadow-md rounded-lg p-8 w-[90%] max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Enter OTP</h2>
            <form className="space-y-4" onSubmit={otpAuth}>
              <div className="flex justify-center gap-2">
                {otpValues.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    ref={(el) => (inputsRef.current[index] = el)}
                    className="w-12 h-12 text-center border border-gray-300 rounded-md text-lg focus:outline-none focus:border-blue-500"
                  />
                ))}
              </div>
              <div className="flex justify-end">
                <Link className="text-sm text-[#0D3B2A] hover:underline" to="/login">
                  Remember password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0D3B2A] to-[#13563e] text-white font-semibold py-2 rounded-full cursor-pointer hover:opacity-[0.5]"
              >
                Confirm OTP
              </button>
            </form>
            <p className="text-red-700 text-center mt-[10px]">{message}</p>
          </div>
        </div>
      </div>
        )
      }
      {
        showForm == 3 && (<div>
        {/* Background Circles */}
        <div className="hidden md:flex justify-center items-center gap-[150px] relative top-0 left-0 w-[100%] h-[500px]">
          <div className="w-60 h-60 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-90"></div>
          <div className="mt-[150px] w-80 h-80 bg-gradient-to-br from-[#0D3B2A] to-[#13543c] rounded-full opacity-90"></div>
          <div className="absolute bottom-10 left-40 w-4 h-4 bg-[#0D3B2A] rounded-full"></div>
          <div className="absolute top-80 right-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Password Retriever Form */}
        <div className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center items-center">
          <div className="relative z-10 bg-white shadow-md rounded-lg p-8 w-[90%] max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">New Password</h2>
            <form className="space-y-4" onSubmit={newPassAuth}>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                onChange={(e) => setDetails((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
              <input
                type="text"
                name="cPassword"
                placeholder="confirm password"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                onChange={(e) => setDetails((prev) => ({...prev, [e.target.name]: e.target.value}))}
              />
             
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0D3B2A] to-[#13563e] text-white font-semibold py-2 rounded-full cursor-pointer hover:opacity-[0.5]"
              >
                Update Password
              </button>
            </form>
            <p className="text-red-700 text-center mt-[10px]">{message}</p>
          </div>
        </div>
      </div>)
      }
    </div>
  );
};

export default ForgetPassword;
