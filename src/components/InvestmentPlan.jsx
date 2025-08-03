import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const InvestmentPlan = ({typeOfPlan, percentage, timeOfIncrease, minimumDeposite, maximumDeposit, style,  key})=>{
    
    const navigate = useNavigate()

    const navigateToSignup = ()=>{
        navigate('signup')
    } 
    return(
        <div className={` shadow-lg mb-[20px] xl:w-[310px] lg:w-[400px] ${style} bg-[#151414]`}  key={key}>
            <div className="h-[12%] w-full flex justify-center items-center">
                <p className="text-[20px] text-[white] uppercase font-bold">
                    {typeOfPlan}
                </p>
            </div>
            <div className="h-[30%] w-full bg-[black] flex justify-center items-center flex-col gap-[10px] text-[#f3f8ec]">
                <p className="text-6xl font-bold text-[#fbc500]">
                    {percentage}
                </p>
                <p className="text-2xl capitalize">
                    {timeOfIncrease}
                </p>
            </div>
            <div className="h-[45%] w-full  price-container text-white bg-[#151414]">
                <p>
                    minimum: {minimumDeposite}
                </p>
                <p>
                    maximum: {maximumDeposit}
                </p>
                <p>
                    fast payout
                </p>
                <p>
                    24/7 live support
                </p>
                <p>
                    10% referral commission
                </p>
            </div>
            <div className="w-full h-[13%] flex justify-center items-center">
                <Button tag='invest now' style='bg-[#fbc500] w-[150px] h-[40px] text-[black] hover:bg-[#fba300] active:opacity-[0.6] cursor-pointer' onclick={navigateToSignup}/>
            </div>
        </div>
    )
}

export default InvestmentPlan;