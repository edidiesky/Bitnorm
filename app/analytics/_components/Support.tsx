"use client"
import Image from "next/image";

const supportList = [
    {
        text: "Get an overview of the current situation in the cryptocurrency market",
        image: "/analysis_1.svg"
    },

    {
        text: "Detailed information on each cryptocurrency, including their history, price, technology, development team",
        image: "/analysis_2.svg"

    },
    {
        text: "Analytical reports to help you make informed decisions in cryptocurrency investing and trading",
        image: "/analysis_3.svg"

    },
    {
        text: "An overview of news and events that may affect the cryptocurrency price",
        image: "/analysis_4.svg"

    },

]
const Support = () => {
    return <div className="w-full bg-custom_1 py-40">
        <div className="w-custom mx-auto flex flex-col items-start gap-16 max-w-custom">
            <h2 className="text-4xl text-start sm:w-full sm:mx-0 md:w-4/5 md:mx-auto sm:text-6xl font-sans font-medium text-white">

                With BitNorm Analytics, you will be able to:
            </h2>
            <div className="py-4 sm:w-full sm:mx-0 md:w-4/5 md:mx-auto grid grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
                {
                    supportList?.map((x?: any, index?: any) => {
                        return <div className="w-full bg-text_grey_3 flex flex-col rounded-xl py-4 pt-8 px-4 gap-4">
                            <div className="w-full flex flex-col gap-4">
                                <h5 className="text-sm  leading-relaxed font-light text-white">{x?.text}</h5>
                            </div>
                            <Image
                                alt="Cotion"
                                className='w-full'
                                width={0}
                                sizes="100vw"
                                height={0}

                                src={x?.image}
                            />
                        </div>
                    })
                }

            </div>

        </div>
    </div>
}

export default Support