import React, { useState, useEffect } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";

const AdminPanel = () => {
  const [loading, setLoading] = useState(true);
  const [transactionDetails, setTransactionDetails] = useState({
      amount: null,
      type: null,
      status: null,
      username: null
    });

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

    const handleChange = (e)=>{
        setTransactionDetails((prev) => ({...prev, [e.target.name]: e.target.value}))
    }

      const updateTransaction = async () => {
        try {
            console.log(transactionDetails)
            const response = await axios.post(
                "http://if0_3963700.infinityfreeapp.com/LWI-backend/updateTransactions.php",
                transactionDetails,
                { headers: { "Content-Type" : "application/json" } }
            );
            console.log('sending request deposit request')
    
          alert(response.data.message2);
          window.location.reload();
        } catch (error) {
          alert("deposit error");
        }
      };



  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center overflow-y-scroll">
      {loading ?  
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <ScaleLoader
            height="20"
            width="10"
            className="rounded-[50%]"
            color="black"
            visible={loading}
          />
        </div> : 
             <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Update transaction</h2>

   
        <div className="flex border-b mb-6">
          <button className="text-blue-600 font-medium border-b-2 border-blue-600 px-4 py-2">
            Details
          </button>
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">username</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder=""
          />
        </div>


        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            onChange={handleChange}
            name="type"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select a category</option>
            <option value="deposit" name="type">Deposit</option>
            <option value="earn" name="type">Earn</option>
          </select>
        </div>

          <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">amount</label>
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
            placeholder="00.0"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">status</label>
          <select
            onChange={handleChange}
            name="status"
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring focus:ring-blue-200"
          >
            <option value="">Select a status</option>
            <option value="pending">Pending</option>
            <option value="successful">Successful</option>
          </select>
        </div>

        <div className="flex justify-end gap-3">
          <button className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700 cursor-pointer" onClick={updateTransaction}>
            update
          </button>
        </div>
      </div>
        
}
    </div>
  );
};

export default AdminPanel;
