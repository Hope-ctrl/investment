import { FaBriefcase, FaExchangeAlt, FaWallet } from "react-icons/fa";
import Count from "../CountUp";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const counts = [
    {icon: (<FaWallet size={50} className="text-[#F29C37]"/>), tag: 'investors', end: '102703'},
    {icon: (<FaExchangeAlt size={50} className="text-[#F29C37]"/>), tag: 'transaction($)', end: '478075438'},
    {icon: (<FaMoneyCheckDollar size={50} className="text-[#F29C37]"/>), tag: 'payouts', end: '37809442'},
    {icon: (<FaBriefcase size={50} className="text-[#F29C37]"/>), tag: 'online working days', end: '4891'}
]
const Counts = ()=>{
    return(
        <div className="section4 w-full h-[110vh] lg:h-[30vh] lg:flex lg:justify-center lg:items-center bg-[#292929]">
            <div className="w-full h-[110vh] lg:h-[25vh] lg:flex lg:w-[90vw] lg:rounded-[100px] lg:mx-auto lg:my-0 lg:bg-[#292929]">
                {counts.map((count)=>(
                <Count icon={count.icon} tag={count.tag} end={count.end}/>

            ))}
            </div>
           
        </div>
    )
}

export default Counts;