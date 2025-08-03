import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import person from "../assets/images/avatar.jpg"; // Still present, assume it's used elsewhere
import { DashboardCard, WithdrawCard } from "../components/Cards"; // Still present, assume it's used elsewhere
import { useUsername } from "../components/Context";
import axios from "axios";
import InvestmentPlan from "../components/InvestmentPlan"; // Still present, assume it's used elsewhere
import { FiArrowRight } from "react-icons/fi"; // Still present, assume it's used elsewhere
import { ArrowDownRight } from "lucide-react";
import { CgArrowTopRight } from "react-icons/cg";
import qrCode from "../assets/images/Wallet-qr-code.jpg";
import qrCodeEth from "../assets/images/qr-code-eth.png"
import emailjs from "@emailjs/browser";
import { ClipLoader } from 'react-spinners';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const { username, setUsername } = useUsername();
  const [balance, setBalance] = useState({
    totalBalance: 0,
    earn: 0,
    deposit: 0,
    withdraw: 0,
  });
  const [transactions, setTransactions] = useState(null);
  const [message, setMessage] = useState("");
  const Username = username;
  const [copied, setCopied] = useState(false);
  const [verifying, setVerifying] = useState(false);

  // Initializing tDisplay to 10 for default display, and ensuring it's a number
  const [tDisplay, setTDisplay] = useState(10);
  const [deposit, setDeposit] = useState({
    amount: "",
    type: "deposit",
    status: "pending",
    username: Username,
  });
  const [imgLoaded, setImgLoaded] = useState(false);
  const [depositView, setDepositView] = useState("form"); // 'form' or 'instructions'

  const [emailSent, setEmailSent] = useState(false);

  // function that update the database when a deposit is being made
  const updateTransaction = async () => {
    if (
      !deposit.amount ||
      isNaN(Number(deposit.amount)) ||
      Number(deposit.amount) <= 0
    ) {
      alert("Please enter a valid deposit amount.");
      return;
    }

    try {
      setVerifying(true);
      try {
        // getting the current date and time
        const now = new Date();
        const date = now.toLocaleDateString();
        const time = now.toLocaleTimeString();

        console.log(Username);

        // sending email to the admin
        await emailjs.send(
          "service_1lfg48i",
          "template_csx7vir",
          {
            username: Username,
            email: "adebara432@gmail.com",
            amount: deposit.amount,
            date: date,
            time: time,
            name: Username,
          },
          "P-Bbo5_RYv0oHd8eD"
        );
        setEmailSent(true);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        alert("payment could not be verified");
      }

      // checking if email is sent if true then the database will be updated and page refreshes

      console.log("sending request deposit request");
      const depositResponse = await axios.post(
        "http://localhost/LWI-backend/updateTransactions.php",
        deposit,
        { headers: { "Content-Type": "application/json" } }
      );

      alert(depositResponse.data.message);
      window.location.reload();
    } catch (error) {
      alert("deposit error: " + error.message);
      console.error("Deposit transaction error:", error);
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

    const fetchTransactions = async () => {
      try {
        console.log("sending username:" + Username);
        const response = await axios.get(
          "http://localhost/LWI-backend/getBalance.php",
          {
            params: { Username },
          }
        );

        const transactionResponse = await axios.get(
          "http://localhost/LWI-backend/getTransactions.php",
          {
            params: { Username },
          }
        );

        if (response.data.error) {
          console.error("Error fetching balance:", response.data.error); // Changed alert to console.error
          // alert(response.data.error); // Only alert if absolutely necessary, can be disruptive
        } else {
          setBalance(response.data);
        }

        if (transactionResponse.data.error) {
          console.error(
            "Error fetching transactions:",
            transactionResponse.data.error
          ); 
        } else {
          setTransactions(transactionResponse.data);

        }
      } catch (err) {
        console.error("Something went wrong during data fetch:" + err.message); // Changed console.log to console.error
      }
    };

    if (Username) {
      fetchTransactions();
    } else {
      console.log("username not available yet ");
    }
  }, [Username]);

  const formatTime = (rawTime) => {
  if (!rawTime) return "";

  const dateObj = new Date(rawTime);

  if (isNaN(dateObj.getTime())) {
    return rawTime; // Fallback: return raw string if invalid date
  }

  const datePart = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
  const timePart = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return `${datePart} ${timePart}`;
};


  // dashboard clean up code
  // This useEffect will clear username and local storage on component unmount
  // Consider if this is the desired behavior for a dashboard where user context might be needed across sessions.
  useEffect(() => {
    return () => {
      // setUsername("");
      // localStorage.removeItem("username");
    };
  }, []);

  const [display, setDisplay] = useState(1);

  const handleDashboard = () => {
    setDisplay(1);
  };

  const handleProfile = () => {
    // This is currently handling "Deposit", so renamed for clarity
    setDisplay(2);
  };
  const handleWithdraw = () => {
    setDisplay(3);
  };

  const handleInvestmentPlans = () => {
    setDisplay(4); // Assuming you have a component for this
  };

  const plans = [
    {
      name: "basic plan",
      percentage: 10,
      duration: "after 24 hours",
      features: [
        "minimum: $100",
        "maximum: $999",
        "fast payout",
        "24/7 live support",
        "10% referral commission",
      ],
    },
    {
      name: "premium",
      percentage: 15,
      duration: "after 48 hours",
      features: [
        "minimum: $1,000",
        "maximum: $4,999",
        "fast payout",
        "24/7 live support",
        "10% referral commission",
      ],
    },
    {
      name: "Advanced Plan",
      percentage: 20,
      duration: "after 3 days",
      recommended: true,
      features: [
        "minimum: $5,000",
        "maximum: $29,999",
        "fast payout",
        "24/7 live support",
        "10% referral commission",
      ],
    },
    {
      name: "vip plan",
      percentage: 30,
      duration: "after 5 days",
      features: [
        "minimum: $30,000",
        "maximum: Unlimited",
        "fast payout",
        "24/7 live support",
        "10% referral commission",
      ],
    },
  ];

  const bitconAddress = "bc1qgv6288m0yfx5n7zplsyyjsllcqp3h0djvyq96z";
  const etheriumWallet = "0xB4092B98FfDF891d9f0c1C3c33bE97F17CC75E0D";

  const handleBitCopy = () => {
    try {
      navigator.clipboard.writeText(bitconAddress);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    } catch (error) {
      console.error("Unable to copy to clipboard:", error); // Changed console.log to console.error
      alert("Failed to copy address.");
    }
  };

  const handleEthCopy = () => {
    try {
      navigator.clipboard.writeText(etheriumWallet);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 5000);
    } catch (error) {
      console.error("Unable to copy to clipboard:", error); // Changed console.log to console.error
      alert("Failed to copy address.");
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-black fixed">
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

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/5 bg-[#1f1e1e] p-4 shadow-md">
          <nav className="space-y-2">
            <button
              className="text-lg font-semibold cursor-pointer text-white"
              onClick={handleDashboard}
            >
              Dashboard
            </button>
            <ul className="space-y-1 text-sm text-white">
              <button
                className="cursor-pointer hover:text-[#bababa]"
                onClick={handleProfile} // This is the deposit button
              >
                Deposit
              </button>
              <br />
              <button
                className="cursor-pointer hover:text-[#bababa]"
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
              <br />
            </ul>
          </nav>
        </aside>

        {/* handling display of the dashboard */}
        {display == 1 && (
          <main className="w-full h-screen lg:w-4/5 bg-black p-6 overflow-y-auto">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-[#F29C37]">Dashboard</h1>
              <p className="text-sm text-gray-500">Welcome {Username}</p>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="bg-[#141414] rounded-lg shadow-[#F29C37] shadow-lg p-4 flex-1 text-white">
                <p className="text-sm text-white">Total Balance</p>
                <p className="text-2xl font-semibold">
                  ${balance.totalBalance}
                </p>
              </div>
              <div className="bg-[#141414] rounded-lg shadow-[#F29C37] shadow-lg p-4 flex-1 text-white">
                <p className="text-sm text-[white]">Total Earn</p>
                <p className="text-2xl font-semibold text-white">
                  ${balance.earn}
                </p>
              </div>
              <div className="bg-[#141414] rounded-lg shadow-[#F29C37] shadow-lg p-4 flex-1 text-white">
                <p className="text-sm text-white">Active Deposit</p>
                <p className="text-2xl font-semibold">${balance.deposit}</p>
              </div>
            </div>

            {/* Transactions */}
            <div className="bg-black rounded-lg shadow p-6 lg:h-[450px] mb-[100px] md:mb-0 ">
              <div className="flex justify-between items-center mb-4 ">
                <h2 className="font-semibold text-white">Transactions</h2>
                <select
                  name="transactionDisplay" // Added name attribute
                  className=" bg-[#4d4b4b] text-white rounded px-2 py-1 text-sm"
                  onChange={(e) => setTDisplay(Number(e.target.value))} // Moved onChange here
                  value={tDisplay} // Controlled component
                >
                  <option value={10}>10 transactions</option>
                  <option value={5}>5 transactions</option>
                </select>
              </div>
              <div
                className={`h-48 bg-[#353535] rounded-lg flex flex-col px-[20px] pt-[30px] gap-[10px] overflow-y-scroll ${
                  !transactions ? "items-center justify-center" : ""
                } text-gray-400 lg:h-[350px]`}
              >
                {!transactions || transactions.length === 0 ? (
                  <p className="text-gray-500">No Transactions</p>
                ) : (
                  transactions
                    .slice(0, tDisplay) // Use tDisplay directly
                    .map((transaction, index) => (
                      <div
                        key={index}
                        className="w-[100%] h-[60px] rounded-2xl bg-[#2b2b2b] flex-shrink-0 flex items-center px-[10px]"
                      >
                        <div className="w-[50px] h-[100%] flex items-center">
                          {transaction["type"] == "earn" ||
                          transaction["type"] == "deposit" ? (
                            <div className=" bg-[#7ff9d674] w-[40px] h-[40px] text-[#00C48C] rounded-lg flex justify-center items-center">
                              <ArrowDownRight size={30} />{" "}
                            </div>
                          ) : (
                            <div className=" bg-[#ff74b773] w-[40px] h-[40px] text-[#c4005f] rounded-lg flex justify-center items-center">
                              <CgArrowTopRight size={30} />{" "}
                            </div>
                          )}
                        </div>
                        
                        <div className="w-[94%] h-[100%] flex justify-between items-center text-white">
                          <div className="flex flex-col">
                            <p className="font-bold capitalize text-white">
                              {transaction["type"]}
                            </p>
                  
                            <p className="text-gray-400">
                              {
                              formatTime(transaction["time"])
                              }
                            </p>


                          </div>
                          <div className=" flex flex-col items-end">
                            <strong className="text-white">
                              {transaction["type"] == "earn" ||
                              transaction["type"] == "deposit"
                                ? "+" + transaction["amount"]
                                : "-" + transaction["amount"]}
                            </strong>
                            <p
                              className={`${
                                transaction["status"] == "pending"
                                  ? "text-[#c4005f]"
                                  : "text-[#00C48C]"
                              }`}
                            >
                              {transaction["status"]}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                )}
              </div>
            </div>
          </main>
        )}

        {display === 2 && ( // This is your Deposit Section
          <div className="w-[100%] h-[100vh] flex justify-center items-center bg-black ">
            <div className="bg-[#393838] rounded-2xl w-full max-w-sm p-6 relative shadow-xl overflow-y-scroll">
              {/* Toggle Buttons */}
              <div className="flex justify-around mb-4 border-b border-gray-600 pb-2">
                <button
                  className={`px-4 py-2 text-sm font-medium cursor-pointer ${
                    depositView === "form"
                      ? "text-[#F29C37] border-b-2 border-[#F29C37]"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  onClick={() => setDepositView("form")}
                >
                  bitcoin
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium cursor-pointer ${
                    depositView === "instructions"
                      ? "text-[#F29C37] border-b-2 border-[#F29C37]"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                  onClick={() => setDepositView("instructions")}
                >
                  etherium
                </button>
              </div>

              {/* Conditional Rendering based on depositView state */}
              {depositView === "form" && (
                <>
                  <h2 className="text-center font-semibold mb-2 text-white">
                    Scan QR Code
                  </h2>
                  <p className="text-center text-sm text-[#F29C37] mb-4">
                    Scan wallet address
                  </p>

                  {/* QR code */}
                  <div className="flex justify-center mb-4">
                    <div className="w-44 h-44 border-2 border-dashed border-gray-600 rounded flex items-center justify-center text-gray-400 text-sm">
                      <img
                        src={qrCode}
                        alt="QR"
                        width="100%"
                        onLoad={() => setImgLoaded(true)}
                        className={!imgLoaded ? "hidden" : "block"}
                      />
                      {!imgLoaded && (
                        <p className="text-center text-gray-400">
                          Loading QR...
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-[100%] font-mono text-white">
                    <p>
                      <span className="text-[red]"> Note: </span> amount
                      inputted must correspond with the amount of deposit being
                      made
                    </p>
                  </div>
                  <div className="w-[100%] h-[60px] my-[10px] flex items-center">
                    <label
                      htmlFor="amountInput"
                      className="text-[40px] text-[#F29C37]"
                    >
                      $
                    </label>{" "}
                    <input
                      id="amountInput"
                      type="number"
                      placeholder="00.0"
                      className="h-[60px] w-[90%] text-[40px] focus:outline-none bg-transparent text-[#F29C37] pl-2"
                      onChange={(e) =>
                        setDeposit((previousState) => ({
                          ...previousState,
                          amount: e.target.value,
                        }))
                      }
                      value={deposit.amount} // Controlled component
                    />
                  </div>

                  <div className="w-full rounded h-[70px] p-2 mb-4 text-center flex bg-[#313131] text-white">
                    <p className="break-words text-left text-[14px] w-[70%] h-[100%]">
                      {bitconAddress}
                    </p>
                    <div className="w-[30%] h-[100%] flex justify-center items-center">
                      <button
                        className="border border-[#F29C37] text-[#F29C37] w-[60px] h-[30px] rounded-lg cursor-pointer flex justify-center items-center text-sm bg-transparent hover:bg-[#F29C37] hover:text-white transition-colors duration-200"
                        onClick={handleBitCopy}
                      >
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <button
                    className="bg-[#F29C37] text-white w-full rounded p-2 mb-2 font-medium hover:bg-[#f0bc80] cursor-pointer"
                    onClick={updateTransaction}
                  >
                    {verifying? <ClipLoader color="white" size={10} /> : 'Verify Deposit'}
                  </button>
                </>
              )}

              {depositView === "instructions" && (
                <>
                  <h2 className="text-center font-semibold mb-2 text-white">
                    Scan QR Code
                  </h2>
                  <p className="text-center text-sm text-[#F29C37] mb-4">
                    Scan wallet address
                  </p>

                  {/* QR code */}
                  <div className="flex justify-center mb-4">
                    <div className="w-44 h-44 border-2 border-dashed bg-white border-gray-600 rounded flex items-center justify-center text-gray-400 text-sm">
                      <img
                        src={qrCodeEth}
                        alt="QR"
                        width="100%"
                        onLoad={() => setImgLoaded(true)}
                        className={!imgLoaded ? "hidden" : "block"}
                      />
                      {!imgLoaded && (
                        <p className="text-center text-gray-400">
                          Loading QR...
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="w-[100%] font-mono text-white">
                    <p>
                      <span className="text-[red]"> Note: </span> amount
                      inputted must correspond with the amount of deposit being
                      made
                    </p>
                  </div>
                  <div className="w-[100%] h-[60px] my-[10px] flex items-center">
                    <label
                      htmlFor="amountInput"
                      className="text-[40px] text-[#F29C37]"
                    >
                      $
                    </label>{" "}
                    <input
                      id="amountInput"
                      type="number"
                      placeholder="00.0"
                      className="h-[60px] w-[90%] text-[40px] focus:outline-none bg-transparent text-[#F29C37] pl-2"
                      onChange={(e) =>
                        setDeposit((previousState) => ({
                          ...previousState,
                          amount: e.target.value,
                        }))
                      }
                      value={deposit.amount} // Controlled component
                    />
                  </div>

                  <div className="w-full rounded h-[70px] p-2 mb-4 text-center flex bg-[#313131] text-white">
                    <p className="break-words text-left text-[14px] w-[70%] h-[100%]">
                      {etheriumWallet}
                    </p>
                    <div className="w-[30%] h-[100%] flex justify-center items-center">
                      <button
                        className="border border-[#F29C37] text-[#F29C37] w-[60px] h-[30px] rounded-lg cursor-pointer flex justify-center items-center text-sm bg-transparent hover:bg-[#F29C37] hover:text-white transition-colors duration-200"
                        onClick={handleEthCopy}
                      >
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </div>
                  </div>

                  <button
                    className="bg-[#F29C37] text-white w-full rounded p-2 mb-2 font-medium hover:bg-[#f0bc80] cursor-pointer"
                    onClick={updateTransaction}
                  >
                    {verifying? <ClipLoader color="white" size={10} /> : 'Verify Deposit'}
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {display === 3 && (
          <div className="w-[100%] h-[100vh] flex justify-center items-center bg-black ">
            <WithdrawCard />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
