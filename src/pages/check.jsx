<form className="dashboard text-[rgb(255,255,255)] relative">
              <div className="w-[100%] h-[100%] backdrop-blur-md bg-[#a89e9e65]  p-[10px] md:p-[20px] capitalize relative flex justify-center items-center flex-col ">
        
                {/* wallet address */}
                        <div className="w-[90%] h-[70%] border-1 rounded-2xl flex justify-center items-center flex-col backdrop-blur-2.5xl gap-[10px]">
                                <p className="capitalize text-[20px] font-bold">
                                    your wallet address
                                </p>
                            <div className="w-[90%] h-[60%] bg-[#c5bfbf67] rounded-2xl">

                            </div>
                            <div className="w-[90%] h-[20%] bg-[#ffffffd6] rounded-2xl flex gap-[10px] p-[10px]">
                                <p className="text-[black] w-[70%]  wrap-break-word">
                                    bc1qgv6288m0yfx5n7zplsyyjsllcqp3h0djvyq96z
                                </p>
                                <button className="w-[70px] h-[100%] bg-[#FB7B7B] rounded-r-2xl">copy</button>
                            </div>

                        </div>
                {/* profile details */}
                <div className='w-[100%] h-[30%] mt-[60px]'>
                    <div className='w-[100%] h-[100%] p-[20px] flex flex-col gap-[20px]'>

                        {/* first input */}
                        <div className='w-[100%] h-[70px]'>
                        <input type="text" name='Amount' placeholder='Amount' className='w-[100%] h-[50px] text-[20px] border-0 border-b border-b-[white] focus:outline-none focus:border-b-[white] focus:ring-0 rounded-none'/>
                        </div>

                        {/* fourth input */}
                        <button className='w-[100%] h-[50px] rounded-2xl bg-[#3bdbca] hover:opacity-[0.7] active:opacity-[0.7]'>Funded </button>
                    </div>
                </div>
                </div>
            </form>