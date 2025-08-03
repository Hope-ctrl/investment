import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';

const Otp = ({onsubmit, show, }) => {

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [otpValues, setOtpValues] = useState(Array(6).fill(''));

  const inputsRef = useRef([]);
  const navigate = useNavigate();

   

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && otpValues[index] === '' && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const auth = (e) => {
    e.preventDefault();
    const enteredOtp = otpValues.join('');
    if (enteredOtp === user.otp) {
      navigate('/Dashboard');
    } else {
      setMessage('Incorrect OTP');
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

      <div className={`${show ? 'hidden' : 'block'}`}>
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
            <form className="space-y-4" onSubmit={onsubmit}>
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
  );
};

export default Otp;
 