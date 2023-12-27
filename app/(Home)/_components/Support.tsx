"use client"
import Image from "next/image";

const supportList = [
    {
        text: "Ethereum",
        subtext: "ETH",
        image:"./eth.svg"
    },
     {
         text: "Bitcoin",
         subtext: "BTC",
         image: "./btc.svg"

    },
     {
         text: "Bitcoin Cash",
         subtext: "BCH",
        image:"./bitcoin.svg"
    },
    {
        text: "Dogecoin",
        subtext: "DOGE",
        image: "./dodge.svg"
    },
    {
        text: "Litecoin",
        subtext: "LTC",
        image: "./lite.svg"
    },
    {
        text: "Binance Chain",
        subtext: "BEP2",
        image: "./bep2.svg"
    },
    {
        text: "THORChain",
        subtext: "RUNE",
        image: "./torchain.svg"
    },
]
const Support = () => {
    return <div className="w-full bg-custom_1 py-40">
        <div className="w-custom mx-auto flex flex-col justify-center items-center gap-16 max-w-custom">
            <h2 className="text-4xl  sm:text-6xl w-full sm:w-full md:w-3/4 text-center font-sans font-medium text-white">
                <span className="block py-4 w-full mx-auto sm:w-4/5 text-base sm:text-xl text-text_grey_1 font-normal">
                    Here are a few reasons why you should choose BitNorm
                </span>
                We support trading across a variety of blockchains

               
            </h2>
            <div className="md:w-4/5 sm:w-full w-full mx-auto flex flex-col">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                    <div className="w-full flex items-center">
                        <div className="w-full border-2 border-text_grey_3 flex flex-col items-center justify-between py-8 px-4 gap-4">
                            <Image
                                alt="Cotion"
                                className='w-16 h-16 mx-auto'
                                width={0}
                                sizes="100vw"
                                height={0}
                                loading="lazy"
                                src={supportList[0]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[0]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[0]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                    w-[122px] h-[175px]  mt-32 relative  flex items-center justify-center flex-col
                    before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
                    after:block after:w-1 after:h-full after:border-2 after:border-dotted after:border-text_grey_3
                    ">
                            <div className="absolute w-[12px] h-[12px] rounded-full bg-text_blue_1 left-[42%] -top-[2%]"></div>
                        </span>
                    </div>
                    <div className="w-full flex items-center">
                        <div className="w-full border-2 border-text_grey_3 flex flex-col items-center justify-between py-8 px-4 gap-4">
                            <Image
                                alt="Cotion"
                                className='w-16 h-16 mx-auto'
                                width={0}
                                sizes="100vw"
                                height={0}
                                loading="lazy"
                                src={supportList[1]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[1]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[1]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                    w-[122px] h-[175px]  mt-32 relative  flex items-center justify-center flex-col
                    before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
                    after:block after:w-1 after:h-full after:border-2 after:border-dotted after:border-text_grey_3
                    ">
                            <div className="absolute w-[12px] h-[12px] rounded-full bg-text_blue_1 left-[42%] -top-[2%]"></div>
                        </span>
                    </div>
                    <div className="w-full flex items-center">
                        <div className="w-full border-2 border-text_grey_3 flex flex-col items-center justify-between py-8 px-4 gap-4">
                            <Image
                                alt="Cotion"
                                className='w-16 h-16 mx-auto'
                                width={0}
                                sizes="100vw"
                                height={0}
                                loading="lazy"
                                src={supportList[2]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[2]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[2]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                    w-[122px] h-[175px]  mt-32 relative  flex items-center justify-center flex-col
                    before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
                    after:block after:w-1 after:h-full after:border-2 after:border-dotted after:border-text_grey_3
                    ">
                            <div className="absolute w-[12px] h-[12px] rounded-full bg-text_blue_1 left-[42%] -top-[2%]"></div>
                        </span>
                    </div>
                    <div className="w-full flex items-center">
                        <div className="w-full border-2 border-text_grey_3 flex flex-col items-center justify-between py-8 px-4 gap-4">
                            <Image
                                alt="Cotion"
                                className='w-16 h-16 mx-auto'
                                width={0}
                                sizes="100vw"
                                height={0}
                                loading="lazy"
                                src={supportList[3]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[3]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[3]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                    w-[122px] h-[175px]  mt-32 relative  flex items-center justify-center flex-col
                    ">
                        </span>
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                    <div className="w-full flex items-center">
                
                        <span className="
                    w-[152px] relative  flex items-center justify-center flex-col
                    ">
                        </span>
                        <div className="w-full border-2 border-text_grey_3 flex flex-col items-center justify-between py-8 px-4 gap-4">

                            <Image
                                alt="Cotion"
                                className='w-16 h-16 mx-auto'
                                width={0}
                                sizes="100vw"
                                height={0}
                                loading="lazy"
                                src={supportList[2]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[2]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[2]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                    w-[112px] h-[175px] relative flex items-center justify-center flex-col
                    before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
                    ">
                            <div className="absolute w-[12px] h-[12px] rounded-full bg-text_blue_1 left-[42%] -top-[2%]"></div>
                        </span>
                    </div>

                    <div className="w-full flex items-center">

                        <span className="
                    w-[112px] h-[175px] relative flex items-center justify-center flex-col
                    before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
                    ">
                            <div className="absolute w-[12px] h-[12px] rounded-full bg-text_blue_1 left-[42%] -top-[2%]"></div>
                        </span>
                        <div className="w-full border-2 border-text_grey_3 flex flex-col items-center justify-between py-8 px-4 gap-4">

                            <Image
                                alt="Cotion"
                                className='w-16 h-16 mx-auto'
                                width={0}
                                sizes="100vw"
                                height={0}
                                loading="lazy"
                                src={supportList[2]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[2]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[2]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                    w-[112px] h-[175px] relative flex items-center justify-center flex-col
                    before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
                    ">
                        </span>
                        
                    </div>
                </div>
           </div>
         
        </div>
    </div>
}

export default Support