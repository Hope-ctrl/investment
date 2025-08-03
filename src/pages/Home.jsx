import { useEffect, useState } from "react";
import Counts from "../components/sections/Counts";
import Hero from "../components/sections/Hero";
import InvestmentOptions from "../components/sections/InestmentOptions";
import InvestToday from "../components/sections/InvestToday";
import Representative from "../components/sections/Representative";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import { ScaleLoader } from 'react-spinners';
import { Blocks } from "lucide-react";
import Reviews from "../components/Reviews";

const Home = ()=>{
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
    if(document.readyState === "complete"){
            setLoading(false);
        }else{
            const handleLoad = () => setLoading(false);
            window.addEventListener("load", handleLoad);

            return () => window.removeEventListener("load", handleLoad);
        }
  }, 2000)
        
    })
    return(
        <div>
            {
        loading && <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
          <ScaleLoader height="20"
  width="10"
  className='rounded-[50%]'
  color="white"
  visible={loading}/>
        </div>
      }
            <div className={`${loading? 'hidden': 'block'}`}>
            <Hero/>
            <Counts/>
            <InvestToday/>
            <WhyChooseUs/>
            <Representative/>
            <InvestmentOptions/>
            <Reviews/>
            </div>
        </div>
    )
}

export default Home;