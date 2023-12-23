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
            <div className="py-4 md:w-4/5 sm:w-full w-full grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {
                    supportList?.map((x?:any, index?:any)=> {
                        return <div key={index} className="w-full border-2 border-text_grey_3 flex flex-col items-center justify-between py-8 px-4 gap-4">
                            <Image
                                alt="Cotion"
                                className='w-20 h-20 mx-auto'
                                width={0}
                                sizes="100vw"
                                height={0}
                                loading="lazy"
                                src={x?.image}
                            />
                         
                          <div className="w-full flex flex-col gap-2">
                                <h5 className="font-medium text-center w-full text-xl text-white">{x?.text}</h5>
                                <h4 className="text-sm text-center w-full text-text_grey_1 font-light">{x?.subtext}</h4>
                          </div>
                        </div>
                    })
                }

            </div>
         
        </div>
    </div>
}

export default Support