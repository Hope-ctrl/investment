import { useState, useEffect } from "react";
import image from "../assets/images/bitcoin-crypto-currency-diagram.jpg";
import { ScaleLoader } from "react-spinners";
import { AboutUsBox } from "../components/Cards";

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  // Cleaner and more React-friendly loader logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

 const items = [
    {
      style: "bg-[white] text-black",
      heading: "mission",
      text: '"Our mission is to protect and grow our clients’ financial futures by delivering expert guidance, personalized investment strategies, and a long-term partnership built on trust and integrity. We are committed to empowering individuals, families, and businesses through innovative, data-driven solutions that adapt to a changing market. With unwavering dedication, we strive to simplify the complexities of wealth management, helping our clients achieve financial security, growth, and peace of mind at every stage of life."',
    },
    {
      style: "aboutUs text-white mb-[20px]",
      heading: "vision",
      text: '"Our vision is to become a leading force in global investment management, recognized for our integrity, innovation, and client-first philosophy. We aspire to redefine how individuals and organizations build wealth by making smart, ethical investing accessible and effective for all. Through cutting-edge technology, forward-thinking strategies, and a relentless commitment to excellence, we aim to shape a future where every client feels empowered, confident, and financially secure — not just today, but for generations to come."',
    },
    {
      style: "bg-amber-50 text-black",
      heading: "value",
      text: '"We believe in empowering our clients through trusted relationships and innovative solutions. Every strategy we design is grounded in transparency, integrity, and a deep understanding of our clients’ goals. By combining human insight with advanced technology, we strive to make investment decisions smarter, clearer, and more aligned with the future our clients envision."',
    },
  ];
  return (
    <div className="w-full min-h-screen text-white pb-20">
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <ScaleLoader
            height="20"
            width="10"
            className="rounded-[50%]"
            color="white"
            visible={loading}
          />
        </div>
      ) : (
        <div>
          <p className="w-full font-bold text-[#F29C37] capitalize text-3xl lg:text-4xl flex items-center heading px-[40px] py-8">
            about us
          </p>

          <div className="flex flex-col gap-10 px-[0px] lg:px-[0px]">
            <div className="bg-black p-4 lg:p-8 rounded-md">
              <p className="text-justify text-sm lg:text-base leading-relaxed">
                 Living Wealth Investment was established in 2018 by the group of
                exceedingly talented agents and dealers, went for development
                venture programs in the zones of new advances. The making of a
                stage has given the chances to joining the information and
                endeavors of speculators, new businesses and investigators to
                understand the mind boggling capital concentrated tasks. The
                organization has built up the product to mechanize the exchange
                completely. There is no compelling reason to lead individual
                gatherings any longer. The computerization framework
                incorporates the instruments for the investigation and figure of
                citations, that essentially limits conceivable dangers. Blue
                Print. developing decentralization of money related streams
                requests a moment response to advancements. Exchanging on STOCK
                and FOREX showcase is the littlest piece of the framework.
                {/* Truncated for clarity */}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {items.map((item, index) => (
                <AboutUsBox
                  key={index}
                  heading={item.heading}
                  style={item.style}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
