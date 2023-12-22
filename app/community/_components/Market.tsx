"use client"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
const Market = () => {
    return <div className="w-full bg-custom_1 pb-16 md:py-20 md:pb-24">
        <div className="bg-text_grey_3 py-16 px-8 md:px-12 rounded-2xl w-custom md:w-4/5 mx-auto lg:w-custom_2 flex sm:flex-col flex-col md:items-center md:flex-row justify-between items-start gap-8 max-w-custom">
            <h3 className="text-4xl font-medium text-white md:text-6xl">Become a part of our community!</h3>
           <div className="flex justify-end">
                <button style={{ background: "#7289DA" }} className='px-8 flex items-center gap-3 py-4 rounded-full text-text_dark_1 sm:text-base text-xl font-sans font-bold'>
                    Join <FaArrowRight color={"#fff"} fontSize={'18px'} />
                </button>
           </div>
          </div>
    </div>
}

export default Market