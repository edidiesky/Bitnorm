"use client"
import Image from "next/image";

const supportList = [
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
const Support = () => {
    return <div className="w-full bg-custom_1 py-40">
        <div className="w-custom mx-auto flex flex-col justify-center items-center gap-16 max-w-custom">
            <h2 className="text-4xl sm:w-full sm:text-6xl md:w-custom_2 text-center font-sans font-medium text-white">
                <span className="block py-4 w-full mx-auto sm:w-4/5 text-base sm:text-xl text-text_grey_1 font-normal">
                    Here are a few reasons why you should choose BitNorm
                </span>
                We support trading across a variety of blockchains

               
            </h2>
            <div className="py-4 sm:w-4/5 w-full grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-y-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {
                    supportList?.map((x?:any, index?:any)=> {
                        return <div className="w-full border-2 border-text_grey_3 flex flex-col justify-between rounded-xl py-8 px-4 gap-4">
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

export default Support