import { useEffect, useState } from 'react';

import { FiArrowLeft } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaArrowLeft } from 'react-icons/fa';
import { ScaleLoader } from "react-spinners";

const Profile = () => {
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

  const walletAddress = 'bc1qgv6288m0yfx5n7zplsyyjsllcqp3h0djvyq96z'

  const [imageName, setImageName] = useState(person)

    
    const UploadFile = (e)=>{
        const file = e.target.files[0];
        if(file){
            const imgUrl = URL.createObjectURL(file)
            setImageName(imgUrl)
        }else{
            setImageName(person)
        }
    }

    // const handleCopy = ()=>{
    //     navigator.
    // }
  return (
    <form className="w-[100vw] h-[100vh] bg-[white]">
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
      {
        loading == false && (
        <div className="flex flex-col lg:flex-row min-h-screen">
        <aside className="w-full lg:w-1/5 bg-white p-4 shadow-md">
          <nav className="space-y-2">
            <h2 className="text-lg font-semibold">Dashboard</h2>
            <ul className="space-y-1 text-sm text-gray-600">
              <li className=" font-medium cursor-pointer hover:opacity-[0.5]">Dashboard</li>
              <li className="text-blue-600 cursor-pointer hover:opacity-[0.5]">Profile</li>
              <li className="cursor-pointer hover:opacity-[0.5]">Withdraw</li>
            </ul>
          </nav>
        </aside>

        
      </div>
        )
      }
    </form>
  );
};

export default Profile;
