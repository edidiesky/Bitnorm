"use client"
import Image from "next/image";

const supportList = [
    {
        text: "You will find people from all over the world who are ready to share  knowledge communicate and help each other.",
        image: "/community_1.svg"
    },

    {
        text: "Our community has extensive connections with investors and experts in the field of cryptocurrencies and blockchain technologies",
        image: "/community_2.svg"

    },
]
const Support = () => {
    return <div className="w-full bg-custom_1 py-40">
        <div className="w-custom md:w-4/5 mx-auto lg:w-custom_2 flex flex-col items-start gap-16 max-w-custom">
            <h2 className="text-4xl text-start w-full sm:text-6xl font-sans font-medium text-white">
                In our community
            </h2>
            <div className="py-4 w-full md:mx-auto grid grid-cols-1 sm:grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2">
                {
                    supportList?.map((x?: any, index?: any) => {
                        return <div key={index} className="w-full bg-text_grey_3 flex flex-col rounded-xl py-4 pt-8 px-4 gap-12">
                            <div className="w-full flex flex-col gap-4">
                                <h3 className="text-2xl md:text-3xl leading-relaxed font-medium text-white">{x?.text}</h3>
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