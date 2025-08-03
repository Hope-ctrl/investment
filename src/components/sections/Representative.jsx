import Button from "../../ui/Button";
import image from '../../assets/images/global.png'
import { useNavigate } from "react-router-dom";

const Representative = ()=>{


    const navigate = useNavigate()
    
        const navigateToSignup = ()=>{
            navigate('signup')
        } 
    return(
        <div className="w-[100vw] h-[100vh] bg-[#f3f8ec] flex justify-center items-center flex-col lg:flex-row lg:h-[80vh] xl:h-[70vh]">
            <div className="w-[90%] h-[50%] flex  flex-col gap-[20px] p-[50px] justify-center lg:w-[50%] lg:h-[100%]">
            <p className="text-[20px] font-bold text-[#0D3B2A]">
                REGIONAL REPRESENTATIVE 
            </p>
            <p className="">
                junior representative: 50 Active members - Earn $1,000 monthly
            </p>
            <p className="">
                Senior Representative: 100 Active members - Earn $2,000 monthly 
            </p>
            <Button tag='join now' style='bg-[#0D3B2A] capitalize text-[white] cursor-pointer hover:opacity-[0.5] ' onclick={navigateToSignup}/>
            </div>
            <div className="w-full h-[50%] overflow-hidden  lg:w-[50%] lg:h-[100%]">
                <img src={image} alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}

export default Representative;