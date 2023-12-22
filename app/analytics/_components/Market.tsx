"use client"
import Image from "next/image";

const Market = () => {
    return <div className="w-full z-10 overflow-hidden relative bg-custom_1 pb-16 md:py-20 md:pb-24">
        
        <Image
            alt="Cotion"
            style={{
                width: "500px",
                height: "600px",
                position: 'absolute', left: '12%', top: "5%"
            }}
            className='absolute sm:hidden md:block'
            width={0}
            sizes="100vw"
            height={0}
            loading="lazy"
            src='/Union_1.svg'
        />
        <div className="bg-text_grey_3 py-16 px-12 rounded-2xl w-custom md:w-4/5 mx-auto lg:w-custom_2  flex flex-col gap-8">
            <h3 className="text-4xl font-medium text-white md:text-6xl">Join BitNorm Analytics today</h3>
            <span className="text-sm text-text_grey_1 w-full leading-loose md:w-full font-light">We strive to provide the most complete information to our clients to help them make the right decisions in cryptocurrency investing and trading. Our team of experts is always ready to answer your questions and provide consultation.</span>
        </div>
    </div>
}

export default Market