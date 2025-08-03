import { Section3Card } from "../Cards";
import { SiBitcoin } from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { MdGroup, MdSecurity } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import { FaHandHoldingDollar, FaMoneyBillWave } from "react-icons/fa6";

const WhyChooseUs = () => {
  const card = useRef();
  const [ishover, setIshover] = useState(false);
  const cardItems = [
    {
      icon: <SiBitcoin size={40} />,
      heading: "registered company",
      description:
        "we are legal company registered to provide its investment services  to the memners all around the world",
    },
    {
      icon: <MdSecurity size={40} />,
      heading: "strong protection",
      description:
        "Our server fully protected from DDoS attack. We use most experienced, professional and trusted DDoS protection and mitigation provider",
    },
    {
      icon: <FaGlobe size={40} />,
      heading: "affilate program",
      description:
        "Our project has very attractive affiliate program that provides opportunities to increase your earning.",
    },
    {
      icon: <MdGroup size={40} />,
      heading: "experienced team",
      description:
        "Blue Print is organized by 8 plus years experienced management team.",
    },
    {
      icon: <FaMoneyBillWave size={40} />,
      heading: "profitable plan",
      description:
        "Reliable daily earning with our lucrative investment plan. Join and start earning.",
    },
    {
      icon: <FaHandHoldingDollar size={40} />,
      heading: "professional support",
      description:
        "Please don't hesitate to contact us should you have any questions and we will quickly get back to you!",
    },
  ];
  return (
    <div className="w-[100vw] bg-[#fffbed] ">
      <div className="w-[100vw] h-[250px] flex justify-center items-center flex-col gap-[20px] px-[20px]">
        <p className="text-3xl capitalize font-bold text-[black]">
          why chose Living Wealth Investment
        </p>
        <p className="text-center text-black">
          We really utilize our epic experience and learning and direct them to
          utilize the working capital of the organization. Our aggregate
          encapsulated solidarity and unanimity from one viewpoint, and also
          entire innovative freedom on the other.
        </p>
      </div>
      <div className="p-[30px] grid grid-cols-1 w-[100vw] mx-auto space-y-[30px] lg:grid-cols-3 md:grid-cols-2">
        {cardItems.map((cardItem, index) => (
          <Section3Card
            key={index}
            icon={cardItem.icon}
            heading={cardItem.heading}
            description={cardItem.description}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
