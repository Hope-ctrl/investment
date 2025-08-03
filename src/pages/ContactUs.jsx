import React, { useEffect, useState } from "react";
import { ScaleLoader } from "react-spinners";

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with actual submit logic
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      {loading && (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <ScaleLoader
            height="20"
            width="10"
            className="rounded-[50%]"
            color="white"
            visible={loading}
          />
        </div>
      )}
      <div className={`${loading ? "hidden" : "block"}`}>
        <p className="w-full h-[200px] capitalize text-3xl lg:text-4xl flex font-bold  items-center heading px-[40px] text-[#F29C37]">
          Contact us
        </p>
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg mx-auto">
          <h2 className="text-xl font-semibold text-[#0D3B2A] mb-4">
            Contact Us Form
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#237255] placeholder-gray-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#237255] placeholder-gray-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#237255] placeholder-gray-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 text-white font-medium rounded-full bg-gradient-to-r from-black focus:ring-[#237255] to-[#0D3B2A] hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SupportForm;
