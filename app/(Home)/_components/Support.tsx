"use client"
import Image from "next/image";

const supportList = [
    {
        text: "Ethereum",
        subtext: "ETH",
        image: "./eth.svg"
    },
    {
        text: "Bitcoin",
        subtext: "BTC",
        image: "./btc.svg"

    },
    {
        text: "Bitcoin Cash",
        subtext: "BCH",
        image: "./bitcoin.svg"
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
               <div className="w-full overflow-hidden">
                    <span
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                        className="block py-4 w-full mx-auto sm:w-4/5 text-base sm:text-xl text-text_grey_1 font-normal">
                        Here are a few reasons why you should choose BitNorm
                    </span>
               </div>
                <div className="w-full overflow-hidden">
                    <span
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                    >
                        We support trading across a variety of blockchains
                    </span>
                </div>
            </h2>
            <div className="md:w-4/5 sm:w-full gap-y-8 xl:gap-y-0 w-full mx-auto flex flex-col">
                <div className="w-full gap-y-8 xl:gap-y-0 gap-x-8 xl:gap-x-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
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
                        <span className="hidden lg:hidden xl:flex
                    w-[122px] h-[175px]  mt-32 relative  items-center justify-center flex-col
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
                        hidden lg:hidden xl:flex
                    w-[122px] h-[175px]  mt-32 relative items-center justify-center flex-col
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
                        hidden lg:hidden xl:flex
                    w-[122px] h-[175px]  mt-32 relative items-center justify-center flex-col
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
                        hidden lg:hidden xl:flex
                    w-[122px] h-[175px]  mt-32 relative items-center justify-center flex-col
                    ">
                        </span>
                    </div>
                </div>
                <div className="w-full gap-y-8 xl:gap-y-0 gap-x-8 xl:gap-x-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="w-full flex items-center">

                        <span className="
                        hidden lg:hidden xl:flex
                          w-[62px] relative  items-center justify-center flex-col
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
                                src={supportList[4]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[4]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[4]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                        w-[112px] h-[175px] relative hidden lg:hidden xl:flex items-center justify-center flex-col
                        before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
                        ">
                            <div className="absolute w-[12px] h-[12px] rounded-full bg-text_blue_1 right-[20%]"></div>
                        </span>
                    </div>

                    <div className="w-full flex items-center">

                        <span className="
                        hidden lg:hidden xl:flex
                    w-[42px] h-[175px] relative items-center justify-center flex-col
                    before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
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
                                src={supportList[5]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[5]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[5]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                        hidden lg:hidden xl:flex
                    w-[112px] h-[175px] relative items-center justify-center flex-col
                    before:block before:w-full before:border-2 before:border-dotted before:border-text_grey_3
                    ">
                            <div className="absolute w-[12px] h-[12px] rounded-full bg-text_blue_1 right-[40%]"></div>
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
                                src={supportList[6]?.image}
                            />

                            <div className="w-full flex flex-col gap-2">
                                <h5 className="font-base text-center w-full text-xl text-white">{supportList[6]?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{supportList[6]?.subtext}</h4>
                            </div>
                        </div>
                        <span className="
                     w-[162px] h-[175px] relative hidden lg:hidden xl:flex items-center justify-center flex-col
                    ">
                        </span>

                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default Support