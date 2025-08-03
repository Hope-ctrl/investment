import { useEffect, useState } from "react";
import image from "../assets/images/bitcoin-crypto-currency-diagram.jpg";
import { ScaleLoader } from "react-spinners";

const FAQ = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
    if(document.readyState === "complete"){
            setLoading(false);
        }else{
            const handleLoad = () => setLoading(false);
            window.addEventListener("load", handleLoad);

            return () => window.removeEventListener("load", handleLoad);
        }
  }, 2000)
  });
  return (
    <div className="w-full text-white  pb-[20px]">
      {loading && (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
          <ScaleLoader
            height="20"
            width="10"
            className="rounded-[50%]"
            color="white"
            visible={loading}
          />
        </div>
      )}
      <div className={`${loading ? "hidden" : "block"}`}>
        <p className="w-full h-[200px] capitalize text-3xl lg:text-4xl flex  items-center heading px-[40px] text-[#F29C37]">
          Frequently Asked Questions
        </p>
        <div className=" w-[100%] flex flex-col gap-[10px]  lg:gap-[20px] lg:p-[30px]  p-[20px] ">
          <div className="w-[100%] words">
            <p className="text-justify">
              <b>How can I invest with Blue Print?</b>
              <br />
              To make a investment you must first become a member of Blue Print
              hyip. Once you are signed up, you can make your first deposit. All
              deposits must be made through the Members Area. You can login
              using the member username and password you receive when signup.
              <br />
              <br />
              <b>
                I wish to invest with Blue Print but I don't have an any
                ecurrency account. What should I do?
              </b>
              <br />
              You can open a free PM account here: www.perfectmoney.com
              <br />
              <br />
              <b>How do I open my Blue Print HYIP Account?</b>
              <br />
              It's quite easy and convenient. Follow this link, fill in the
              registration form and then press "Register".
              <br />
              <br />
              <b>Which e-currencies do you accept?</b>
              <br />
              We accept e-currencies.
              <br />
              <br />
              <b>How can I withdraw funds?</b>
              <br />
              Login to your account using your username and password and check
              the Withdraw section.
              <br />
              <br />
              <b>
                How long does it take for my deposit to be added to my account?
              </b>
              <br />
              Your account will be updated as fast, as you deposit.
              <br />
              <br />
              <b>How can I change my e-mail address or password?</b>
              <br />
              Log into your Blue Print account and click on the "Account
              Information". You can change your e-mail address and password
              there.
              <br />
              <br />
              <b>
                What if I can't log into my account because I forgot my
                password?
              </b>
              <br />
              Click forgot password link, type your username or e-mail and
              you'll receive your account information.
              <br />
              <br />
              <b>Does a daily profit paid directly to my currency account?</b>
              <br />
              No, profits are gathered on your Blue Print account and you can
              withdraw them anytime.
              <br />
              <br />
              <b>How do you calculate the interest on my account?</b>
              <br />
              Depending on each plan. Interest on your Blue Print HYIP account
              is acquired Daily, Weekly, Bi-Weekly, Monthly and Yearly and
              credited to your available balance at the end of each day.
              <br />
              <br />
              <b>Can I do a direct deposit from my account balance?</b>
              <br />
              Yes! To make a deposit from your Blue Print HYIP account balance.
              Simply login into your members account and click on Make Deposit
              ans select the Deposit from Account Balance Radio button.
              <br />
              <br />
              <b>
                Can I make an additional deposit to Blue Print HYIP account once
                it has been opened?
              </b>
              <br />
              Yes, you can but all transactions are handled separately.
              <br />
              <br />
              <b>
                After I make a withdrawal request, when will the funds be
                available on my ecurrency account?
              </b>
              <br />
              Funds are usually available within 12 business hours.
              <br />
              <br />
              <b>How can I change my password?</b>
              <br />
              You can change your password directly from your members area by
              editing it in your personal profile.
              <br />
              <br />
              <b>Can I lose money?</b>
              <br />
              There is a risk involved with investing in all high yield
              investment programs. However, there are a few simple ways that can
              help you to reduce the risk of losing more than you can afford to.
              First, align your investments with your financial goals, in other
              words, keep the money you may need for the short-term out of more
              aggressive investments, reserving those investment funds for the
              money you intend to raise over the long-term. It's very important
              for you to know that we are real traders and that we invest
              members' funds on major investments.
              <br />
              <br />
              <b>How can I check my account balances?</b>
              <br />
              You can access the account information 24 hours, seven days a week
              over the Internet.
              <br />
              <br />
              <b>May I open several accounts in your program?</b>
              <br />
              No. If we find that one member has more than one account, the
              entire funds will be frozen.
              <br />
              <br />
              <b>How can I make a spend?</b>
              <br />
              To make a spend you must first become a member of Blue Print HYIP.
              Once you are signed up, you can make your first spend. All spends
              must be made through the Member Area. You can login using the
              member username and password you received when signup.
              <br />
              <br />
              <b>Who manages the funds?</b>
              <br />
              These funds are managed by a team of Blue Print HYIP investment
              experts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
