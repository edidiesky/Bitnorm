"use client"
import Image from "next/image";

const platformList = [
    {
        text: "BNCommunity",
        subtext: "BN connect is a platform that allows our users from all over the world to connect and use our social toolbox."
    },
    {
        text: "BNBusiness",
        subtext: "Matchmaking, advertisements, job listings and buying and selling of services and goods."
    },
    {
        text: "BNAnalytics",
        subtext: "A one-stop data aggregator for the cryptocurrency ecosystem"
    },
    {
        text: "BNExchange",
        subtext: "Fully fletched exchange with many trading options and a powerful trading toolbox."
    }

]
const Platform = () => {
    return <div className="w-ful z-10 overflow-hidden relative bg-custom_1 py-40 pt-52">

        <Image
            alt="Cotion"
            style={{
                width: "500px",
                height: "600px",
                position: 'absolute', left: '-15%', top: "10%"
            }}
            className='absolute sm:hidden md:block'
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src='/Union_1.svg'
        />

        <Image
            alt="Cotion"
            style={{
                width: "500px",
                height: "600px",
                position: 'absolute', right: '-10%', bottom: "-30%"
            }}
            className='absolute sm:hidden md:block'
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src='/Union_2.svg'
        />
        <div className="w-custom mx-auto flex flex-col justify-center items-center gap-16 max-w-custom">
            <h2 className="text-5xl sm:text-6xl w-full sm:w-full md:w-custom_2 text-center font-sans font-medium text-white">
                Bitnorm Platforms

                <span className="block py-4 w-full sm:w-full mx-auto md:w-4/5 text-base sm:text-xl text-text_grey_1 font-normal">
                    By leveraging BitNorm, you will have click away access to guides, tools, goods, and services all of which feed into your understanding of the cryptocurrencies ecosystem and friends, mentors, and consultants to hold your hand when you need it. What more could you ask for?
                </span>
            </h2>
            <div className="py-4 sm:w-4/5 w-full grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {
                    platformList?.map((x?: any, index?: any) => {
                        return <div key={index} className="w-full border-2 border-text_grey_3 flex flex-col justify-between rounded-xl py-8 px-4 gap-4">
                            <div className="w-full flex flex-col gap-4">
                                <h5 className="font-medium text-xl text-white">{x?.text}</h5>
                                <h4 className="text-sm text-text_grey_1 font-light">{x?.subtext}</h4>
                            </div>
                            <span className="w-full py-4 px-8 border-2 border-text_grey_3 rounded-xl text-center text-sm text-white">Learn More</span>
                        </div>
                    })
                }

            </div>

        </div>
    </div>
}

export default Platform