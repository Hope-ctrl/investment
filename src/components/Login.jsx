import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import axios from "axios";
import { useUsername } from "./Context";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [formDetails, setFormDetails] = useState({
    username: "",
    password: "",
  });
  const { setUsername } = useUsername();

  const handleChange = (e) => {
    setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const auth = async (e) => {
    e.preventDefault();

    if (!formDetails.username || !formDetails.password) {
      setMessage("fill all the fields");
    } else {
      try {

        if (
          formDetails.username == "master112" &&
          formDetails.password == "password006"
        ) {
          navigate("/adminPanel");
        }
        
        const response = await axios.post(
          "http://if0_3963700.infinityfreeapp.com/LWI-backend/login.php",
          formDetails,
          { headers: { "Content-Type": "application/json" } }
        );
        
        if (response.data.success) {
          setUsername(formDetails.username);
          navigate("/dashboard");
        }else {
          setMessage(response.data.message);
        }
      } catch (error) {
        setMessage("invalid input: " + error.message);
      }
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
  });
  return (
    <div className="min-h-screen relative bg-white overflow-hidden">
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
      <div className={`${loading ? "hidden" : "block"}`}>
        <div className="hidden md:flex justify-center items-center gap-[150px] relative top-0 left-0 w-[100%] h-[500px] ">
          <div className="  w-60 h-60 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full opacity-90"></div>
          <div className=" mt-[150px] w-80 h-80 bg-gradient-to-br from-[#0D3B2A] to-[#13543c] rounded-full opacity-90"></div>
          <div className="absolute bottom-10 left-40 w-4 h-4 bg-[#0D3B2A] rounded-full"></div>
          <div className="absolute top-80 right-10 w-4 h-4 bg-yellow-400 rounded-full"></div>
        </div>

        {/* Login Form */}

        <div className="w-[100%] h-[100%] absolute top-0 left-0 flex justify-center items-center ">
          <div className="relative  z-10 bg-white shadow-md rounded-lg p-8 w-[90%] max-w-sm">
            <h2 className="text-2xl font-bold mb-6 text-center">Log in</h2>
            <form className="space-y-4" onSubmit={auth}>
              <input
                type="text"
                placeholder="username"
                name="username"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Password"
                name="password"
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none"
                onChange={handleChange}
              />
              <div className="flex justify-end">
                <Link
                  to="/forgetPassword"
                  className="text-sm text-[#0D3B2A] hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0D3B2A] to-[#13563e] text-white font-semibold py-2 rounded-full cursor-pointer hover:opacity-[0.5]"
              >
                Login
              </button>
            </form>
            <p className="text-red-700 text-center">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
