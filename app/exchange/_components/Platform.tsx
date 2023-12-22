"use client"
import Image from "next/image";


const offferlist = [
    {
        text: "Listing of popular cryptocurrencies",
        image: "/offer_1.svg"
    },
    {
        text: "Copy trading",
        image: "/offer_2.svg"
    }, {
        text: "Package trading",
        image: "/offer_3.svg"

    }, {
        text: "Trading bot",
        image: "/offer_4.svg"

    },
]

const Platform = () => {
    return <div className="w-full bg-custom_1 py-4 flex justify-center items-center">
        <div className="w-custom mx-auto flex flex-col items-start gap-16 max-w-custom">
            <h2 className="text-4xl text-start sm:w-full sm:mx-0 md:w-4/5 md:mx-auto sm:text-6xl font-sans font-medium text-white">
                We offer a range of features such as:
            </h2>
            <div className="py-4 sm:w-full sm:mx-0 md:w-4/5 md:mx-auto grid grid-cols-1 sm:grid-cols-1 gap-x-4 gap-y-16 md:grid-cols-2">
                {
                    offferlist?.map((x?: any, index?: any) => {
                        return <div key={index} className="w-full bg-custom_1 border-2 border-text_grey_3 flex flex-col rounded-3xl py-4 pt-8 px-4 gap-12">
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

export default Platform