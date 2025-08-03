import Button from "../../ui/Button";
import image from '../../assets/images/bitcoins-falling-illustration.png'
import bit1 from '../../assets/images/1.png'
import bit2 from '../../assets/images/3.png'
import bit3 from '../../assets/images/4.png'
import { Link, useNavigate } from "react-router-dom";

const Hero = ()=>{

   const navigate = useNavigate()

    const navigateToSignup = ()=>{
        navigate('/signup')
    } 
    const navigateToLogin = ()=>{
        navigate('/login')
    }

    return(
        <div className="w-full h-[110vh] bg-[white] flex items-center justify-between flex-col gap-[10px] md:h-[100vh] lg:h-[80vh] lg:flex-row xl:h-[90vh] relative">
            <div className="w-[100%] h-[60%] flex flex-col justify-center gap-[20px] p-[40px] md:h-[40%] lg:w-[50%] lg:h-[100%]xl:w-[50%]">
                <p className="text-2xl text-[#0D3B2A] font-light capitalize">
                    bitcoin, etherium, ripple and other cryptocurrencies
                </p>
                <p className="text-4xl capitalize font-bold text-[black]">
                    one smart investment for all cryptocurrencies
                </p>
            </div> 
            {/* falling bitcoin overlay */}
            <div className=" w-[100%]   lg:w-[50%] h-[100%] absolute top-0 left-0 p-[40px]">
                <img src={bit1} alt="" className="lg:w-[100px] lg:top-[120px] xl:top-[160px] md:top-[100px] md:w-[80px] w-[100px] absolute top-[70px] sm:top-[100px] transition-all duration-75 ease-in"/>
                <img src={bit2} alt="" className="lg:w-[70px] w-[30px] absolute top-[20px] left-[300px] lg:left-[500px] transition-all duration-75 ease-in"/>
                <img src={bit2} alt="" className="w-[50px] absolute top-[400px] left-[400px] transition-all duration-75 ease-in"/>
                <img src={bit3} alt="" className="w-[70px] absolute bottom-0 left-[100px] transition-all duration-75 ease-in"/>
                

                </div>
            <div className="h-[40%] w-[80%] md:w-[60%] md:h-[60%] lg:w-[50%] lg:h-[80%] xl:w-[50%] xl:h-[100%] border-2 border-white">
                <img src={image} alt="" className="w-full h-full object-contain p-[20px]"/>
            </div>
        </div>
    )
}

export default Hero;