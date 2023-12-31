"use client"
import Image from "next/image";

const Market = () => {
    return <div className="w-full bg-white py-32">
        <div className="w-custom mx-auto flex flex-col gap-16 max-w-custom">
            <div className="md:w-4/5 sm:w-full w-full mx-auto flex flex-col gap-8">
                <div className="w-full overflow-hidden">
                    <h2
                        data-aos="fade-in"
                        data-aos-duration="1000"
                        data-aos-delay="600"
                        className="text-4xl md:text-6xl w-full lg:w-3/4 text-start font-sans font-bold text-text_dark_1">
                        Get an overview of the market all in one place

                        <span className="block py-5 text-base sm:text-xl text-text_grey_1 font-light">Your favorite place to see everything that you need.</span>
                    </h2>
                </div>
                <picture 
                    data-aos="fade"
                    data-aos-duration="1000"
                    data-aos-delay="600"
                style={{ backgroundColor: "#333" }} className="w-full rounded-2xl pl-16 sm:pl-20 pt-16 sm:pt-20 m-auto">
                    <Image
                        alt="Cotion"
                        className='w-full'
                        width={0}
                        sizes="100vw"
                        height={0}
                        loading="lazy"
                        src='/Coins.svg'
                    />
                </picture>
            </div>
        </div>
    </div>
}

export default Market