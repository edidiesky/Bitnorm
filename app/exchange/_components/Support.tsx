"use client"
import Image from "next/image";

const supportList = [
    {
        text: "You will find people from all over the world who are ready to share  knowledge communicate and help each other.",
        image: "/community_1.svg"
    },

    {
        text: "Our community has extensive connections with investors and experts in the field of cryptocurrencies and blockchain technologies",
        image: "/trading_1.svg"

    },
]
const Support = () => {
    return <div className="w-full bg-custom_1 py-40">
        <div className="w-custom mx-auto flex flex-col items-start gap-8 max-w-custom">
            <h2 className="text-4xl text-start sm:w-full sm:mx-0 md:w-4/5 md:mx-auto sm:text-6xl font-sans font-medium text-white">
                In our community
            </h2>
            <div className="py-4 sm:w-full sm:mx-0 md:w-4/5 md:mx-auto grid grid-cols-1 sm:grid-cols-1 gap-y-16 md:grid-cols-2">
             
                <div className="w-full bg-text_grey_3  sm:rounded-l-none md:rounded-l-3xl lg:rounded-l-3xl flex flex-col gap-8 py-8 px-8">
                    <div className="w-full flex flex-col gap-4">
                        <h3 className="text-2xl md:text-3xl leading-relaxed font-medium text-white">Package trading</h3>
                        <h5 className="text-sm leading-loose text-text_grey_1 font-light">is a feature that enables investors to purchase multiple top 10 or top 20 cryptocurrencies simultaneously, while distributing their percentage allocations within a single package. This approach provides a convenient way to invest in a diverse portfolio of digital assets. By using package trading, investors can easily manage and adjust their exposure to different cryptocurrencies, based on their investment goals and risk tolerance.</h5>
                    </div>
                </div>
                <div className="w-full bg-custom_1 border-2 rounded-r-3xl sm:rounded-r-none md:rounded-r-3xl lg:rounded-r-3xl border-text_grey_3 flex flex-col gap-8 py-8 px-8">
                    <Image
                        alt="Cotion"
                        className='w-full'
                        width={0}
                        sizes="100vw"
                        height={0}

                        src={"/trading_1.svg"}
                    />
                </div>

            </div>

        </div>
    </div>
}

export default Support