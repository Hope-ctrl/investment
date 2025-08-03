import { useRef } from "react"
import { SiBitcoin } from "react-icons/si"
import avatar from '../assets/images/avatar.jpg'
import { CheckCircle, Calendar, MapPin, Star } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import check from '../assets/images/check.png'

export const Section3Card = ({icon, heading, description, ref, key})=>{

    return(
        <div className="w-[300px] sm:w-[400px] md:w-[350px] lg:w-[300px] h-[300px] text-[#0D3B2A] flex flex-col justify-center px-[15px] bg-white hover:w-[310px] sm:hover:w-[410px] md:hover:w-[360px] lg:hover:w-[310px]  hover:bg-[#0D3B2A] hover:text-white transition-all duration-[0.5s] ease-in-out mx-auto" ref={ref} key={key}>
            {icon}
            <p className="capitalize my-[10px] text-2xl font-bold">
                {heading} 
            </p>
            <p className="">
                {description}
            </p>
        </div>
    )
}

export const ReviewCard = ({name, review, location, onclick, image})=>{
     return (
    <div className="w-[350px] sm:w-[500px] md:w-[700px] lg:w-[800px] bg-[#414040] rounded-2xl shadow-md p-6 space-y-4 mb-[20px] relative transition-all duration-[0.5s] ease-in-out">

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt="Avatar"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="font-bold text-lg text-amber-200">{name}</h2>
          <p className="text-white text-sm">Happy client</p>
        </div>
      </div>

<button className="w-[30px] h-[30px] left-[330px] top-[150px] md:top-[100px] rounded-[50%] absolute lg:left-[780px] bg-[#898686] flex justify-center sm:left-[480px] items-center p-[5px] hover:w-[35px] hover:h-[35px] transition-all duration-[0.5s] ease-in-out md:left-[680px] "><div className="w-[100%] h-[100%] rounded-[50%] border flex justify-center items-center"><p className="text-[12px]" onClick={onclick}> &gt;</p></div></button>

      <div className="flex items-center justify-between">
        <div className="flex items-center text-green-600 gap-1 text-sm font-medium">
          <CheckCircle className="w-4 h-4" />
          Verified
        </div>
      </div>

   
      <div className="text-sm text-white space-y-2">
        <p>
          {review}
        </p>
      </div>

      <div className="flex items-center gap-1 text-yellow-500 text-sm">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-500" />
        ))}
        <span className="text-white ml-2">(5 stars)</span>
      </div>

      {/* Footer: Date + Location */}
      <div className="flex items-center justify-between text-gray-500 text-sm">
        <div className="flex items-center gap-1">
          
        </div>
        <div className="flex items-center gap-1 text-white">
          <MapPin className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );

}

export const AboutUsBox = ({text, style, heading})=>{
  return(
    <div className={`w-[100%] h-[380px] md:h-[300px] lg:h-[250px] lg:py-[30px] lg:flex p-[15px] z-20 ${style}` }>
        <div className="w-[100%] lg:w-[30%] h-[15%] lg:h-[100%] flex justify-center items-center lg:items-start lg:justify-start">
          <p className="text-[30px] uppercase font-bold text-center lg:text-left lg:text-[25px]">
            {heading}
          </p>
        </div>
        <div className="w-[100%] h-[75%]  ">
          <p className="text-justify lg:text-[18px]">
            {text}
          </p>
        </div>
    </div>
  )
}


export const WithdrawCard = ({withdraw})=>{
  return(
    <div className="w-[100%] h-[100%] bg-[black] flex justify-center items-center ">
        <div className="w-[100%] h-[100%] flex items-center justify-center">
          <div className="w-[400px] h-[450px] bg-[#2e2e2e] rounded-2xl shadow-2xl p-[20px]">
            <p className="text-[30px] capitalize w-[100%] flex justify-between">
              <strong className="text-[#F29C37]">withdrawal</strong> 
            </p>
            <p className="text-[#bbb9b9]">
              Add your details and wallet address
            </p>
            <div className="w-[100%] h-[60px] my-[10px] text-[#F29C37]">
                <label htmlFor="text" className="text-[40px]">$</label> <span> </span>
            <input type="number"  placeholder="00.0" className="h-[60px] w-[200px] text-[40px] focus:outline-none"/>
            </div>
            <div>
              <input type="text" className="w-[100%] h-[40px] border-2 rounded-lg p-[5px] mb-[20px] border-white text-white " placeholder="enter wallet address"/>
            </div>
            <div className="w-[100%] h-[120px] bg-[#626262] rounded-2xl p-[10px]">
              <p className="text-[12px] text-white">
                <strong className="text-[16px] text-[#F29C37]">Please review your wallet address carefully.</strong> <br />
                Make sure there are no mistakes before proceeding—transactions sent to the wrong address cannot be recovered. 
              </p>
            </div>
            <button className="bg-[#F29C37] text-white w-full rounded-[10px] p-2 mt-[20px] font-medium hover:bg-[#fcc586] cursor-pointer" onClick={withdraw}>withdraw</button>
          </div>
        </div>
    </div>
  )
}


export const DashboardCard = ({plan, percentage, duration, minimumDeposite, maximumDeposit, })=>{
  return(
    <div className="w-[250px] h-[80%] flex-shrink-0 bg-gradient-to-b from-[#bef2ff] to-[#ffffff] rounded-[30px] transition-all duration-[0.5] ease-in-out p-[20px]">
        <div className="w-[60%] h-[15%]">
            <p className="capitalize p-[10px] rounded-2xl bg-[#4343ff] text-white font-bold text-[14px]">
             {plan}
            </p>
        </div>
        <div className="w-[100%] h-[25%] mb-[20px] border-b-1">
          <p className="text-[50px] font-bold">
            {percentage}
          </p>
          <p className="capitalize">
            {duration} 
          </p>
        </div>
        <div className="h-[45%] w-full capitalize flex flex-col gap-[15px] ">
                <p className="flex w-[100%] gap-2 h-[20px]">
                    <img src={check} alt="" width="15px" /> minimum: {minimumDeposite}
                </p>
                <p className="flex w-[100%] gap-2 h-[20px]">
                   <img src={check} alt="" width="15px" /> maximum: {maximumDeposit}
                </p>
                <p className="flex w-[100%] gap-2 h-[20px]">
                   <img src={check} alt="" width="15px" /> fast payout
                </p>
                <p className="flex w-[100%] gap-2 h-[20px]">
                   <img src={check} alt="" width="15px" /> 24/7 live support
                </p>
                <p className="flex w-[100%] gap-2 h-[20px]">
                   <img src={check} alt="" width="15px" /> 10% referral commission
                </p>
            </div>
            <button className="w-[100%] h-[40px] border-1 rounded-lg hover:bg-[#161523] hover:text-white capitalize transition-colors duration-[0.5] ease-in-out cursor-pointer">
              get started
            </button>
    </div>
  )
}
