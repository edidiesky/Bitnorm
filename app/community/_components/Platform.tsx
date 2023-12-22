"use client"
import Image from "next/image";

const Platform = () => {
    return <div className="w-full bg-custom_1 py-4 flex justify-center items-center">
        <div className="w-custom md:w-4/5 mx-auto lg:w-custom_2 flex flex-col justify-center items-center gap-16 max-w-custom">

            <div className="py-4 w-full flex justify-center items-center">
                <div className="mx-auto grid gap-y-12 sm:gap-y-12 grid-cols-1 gap-x-4 lg:gap-y-0 sm:grid-cols-1 md:grid-cols-2">
                    <div className="w-full py-12 px-8 flex flex-col gap-12 bg-text_grey_3 rounded-2xl">
                        <h3 className="text-4xl font-sans sm:text-5xl md:text-6xl text-white font-medium">
                            We are here to help


                        </h3>
                        <span className="block leading-loose font-sans py-2 font-light text-sm text-text_grey_1">
                            you learn more about cryptocurrencies, share your knowledge and experience, and find investors for your projects. We offer a wide range of resources and tools for working with cryptocurrencies and blockchain technologies, including training materials, articles, video tutorials, platforms and much more.
                        </span>
                    </div>

                    <Image
                        alt="Cotion"
                        className='w-full'
                        width={0}
                        sizes="100vw"
                        height={0}

                        src='/help_1.svg'
                    />
                </div>
            </div>

        </div>
    </div>
}

export default Platform