"use client"
import Image from "next/image";

const Market = () => {
    return <div className="w-full bg-white py-32">
        <div className="w-custom mx-auto flex flex-col gap-16 max-w-custom">
            <h2 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl w-full sm:w-3/4 text-start font-sans font-bold text-text_dark_1">
                Get an overview of the market all in one place

                <span className="block py-2 text-base sm:text-xl text-text font-light">Your favorite place to see everything that you need.</span>
            </h2>
            <picture style={{ backgroundColor: "#333" }} className="w-full rounded-2xl pl-16 sm:pl-20 pt-16 sm:pt-20 m-auto">
                <Image
                    alt="Cotion"
                    className='w-full'
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src='/Coins.jpg'
                />
            </picture>
        </div>
    </div>
}

export default Market