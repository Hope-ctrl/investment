import InvestmentPlan from "../InvestmentPlan";

const InvestmentOptions = ()=>{
    const investments = [
        {plan: 'basic plan', percentage: '10%', time: 'after 24 hours', minimum: '$100', maximum: '$999'},
        {plan: 'premium', percentage: '15%', time: 'after 48 hours', minimum: '$1,000', maximum: '$4,999'},
        {plan: 'advance plan', percentage: '20%', time: 'after 3 days', minimum: '$5,000', maximum: '$29,999'},
        {plan: 'vip plan', percentage: '30%', time: 'after 5 days', minimum: '$30,000', maximum: 'unlimited'}
    ]
    return(
        <div className="w-full px-[20px] py-[40px] space-y-[20px]">
            <div className="w-[full] h-[150px]">
                <p className="text-4xl capitalize text-center font-bold mb-[20px] text-white ">
                    our plans & <span className="text-[#F29C37]">offers</span>
                </p>
                <p className="text-center text-white">
                    to make a solid investment, you have to know where you are investing. <br/> find a plan which is best for you 
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid md:grid-cols-2 place-items-center xl:grid-cols-4">
            {investments.map((investment, index)=>(
                    <InvestmentPlan key={index} typeOfPlan={investment.plan} percentage={investment.percentage} timeOfIncrease={investment.time} minimumDeposite={investment.minimum} maximumDeposit={investment.maximum} style="h-[500px] w-[350px]"/>

            ))}
            </div>

        </div>
    )
}

export default InvestmentOptions;