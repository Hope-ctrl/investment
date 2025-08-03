import CountUp from "react-countup";
import { FaWallet } from "react-icons/fa";

const Count = ({ end, tag, icon, key }) => {
  return (
    <div
      className="w-full h-[200px] flex flex-col items-center justify-center lg:w-[25%] lg:h-[100%]"
      key={key}
    >
      {icon}
      <p className="text-2xl text-white">{tag}</p>
      <CountUp
        id="my-counter"
        start={1}
        end={end}
        duration={2.5}
        separator=","
        scrollSpyOnce={false}
        enableScrollSpy={true}
        className="text-2xl text-white"
      />
    </div>
  );
};

export default Count;
