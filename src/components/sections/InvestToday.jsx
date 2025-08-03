import { useNavigate } from 'react-router-dom';
import section2 from '../../assets/images/section2.jpg'
import Button from '../../ui/Button';


const InvestToday = ()=>{

    const navigate = useNavigate()

    const navigateToAboutus = ()=>{
        navigate('/about')
    } 

    return(
        <div className='w-[100vw] h-[90vh] bg-[black] flex items-center justify-center flex-col gap-[20px] py-[20px] md:h-[60vh]'>
            
            <div className='w-[90%]  '>
            <p className='text-3xl font-bold mb-[20px] text-[#F29C37]'>
                Invest With Us Today!
            </p>
            <p className='text-justify mb-[20px] text-white'>
                Living Wealth Investment management team is a combined group of experienced traders and financial market analysts, who manage investment portfolio and profitable placement on the Forex market with goal to provide the highest expected return at any level of transactions. Our team had joined the best skills, knowledge and talents in the effort to bring a professional riskless trade. The main goal of our company is financial stability, timely payments and a high level of service to our customers. We take a disciplined measures, using a team approach to portfolio management and research, leveraging the expertise of seasoned investment professionals. As the result of careful planning and joint work our team determined the possible interest rates, which will satisfy our investors. We are focusing our activity on the use of right combinations and professional safe investment technologies and also conservative risk management
            </p>

            <Button tag='Read More..' style='bg-[#F29C37] text-[black]' onclick={navigateToAboutus}/>

            </div>
        </div>
    )
}

export default InvestToday;