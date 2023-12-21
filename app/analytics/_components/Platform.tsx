"use client"
import Image from "next/image";

const Platform = () => {
    return <div className="w-full bg-custom_1 py-4">
        <div className="w-custom sm:mx-0 sm:w-full mx-auto flex flex-col justify-center items-center gap-16 max-w-custom">

            <div className="py-4 md:w-4/5 sm:w-full ">
                <div className="w-custom mx-auto grid gap-y-12 sm:gap-y-12 grid-cols-1 gap-x-4 lg:gap-y-0 sm:grid-cols-1 md:grid-cols-2">
                    <div className="w-full py-12 px-8 flex flex-col gap-12 bg-text_grey_3 rounded-2xl">
                        <h3 className="text-4xl font-sans sm:text-5xl md:text-6xl text-white font-medium">
                            Get a full overview

                           
                        </h3>
                        <span className="block leading-loose font-sans py-2 font-light text-sm text-text_grey_1">
                            We provide a comprehensive overview of any cryptocurrency to help you make informed decisions in investing and trading. Our team of cryptocurrency analysis experts conducts in-depth research on each cryptocurrency to provide you with complete information on its potential and risks. We provide all the necessary information, including historical data, current price, analytical reports, news, and much more.
                        </span>
                    </div>
                    <div className="flex w-full px-4 py-12 flex-col gap-12 items-center justify-between border-2 rounded-xl border-text_grey_3">
                        <Image
                            alt="Cotion"
                            className='w-full'
                            width={0}
                            sizes="100vw"
                            height={0}

                            src='/overview_top.svg'
                        />
                        <Image
                            alt="Cotion"
                            className='w-full'
                            width={0}
                            sizes="100vw"
                            height={0}

                            src='/overview_bottom.svg'
                        />
                    </div>
               </div>
            </div>

        </div>
    </div>
}

export default Platform