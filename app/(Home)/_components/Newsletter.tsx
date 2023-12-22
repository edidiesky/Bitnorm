"use client"
import Image from "next/image";

const Newsletter = () => {
    return <div className="w-full py-8 flex flex-col gap-12">
        <div style={{ background: "#242526" }} className="w-custom rounded-2xl py-12 px-16 mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row gap-16 max-w-custom">
            <div className="flex-1 flex items-center gap-4">
                <Image
                    alt="Cotion"
                    style={{ width: "40px", height: "40px" }}
                    className=''
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src='/Gift.png'
                />
                <h3 className="text-4xl text-white font-medium">Join the BitNorm
                    <span className="block py-2 text-base font-light text-text_grey_1">Join the bitnorm waitlist and get a chance to be airdropped BN Tokens</span>
                </h3>
            </div>
            <div className="flex-1 flex flex-col sm:flex-col md:flex-col lg:flex-row items-start md:items-start  lg:items-center gap-4">
                <input type="text" placeholder="Enter your email" className="py-4 px-8 sm:w-full md:w-auto text-text_dark_1 flex-1 text-base rounded-xl bg-white" />
                <button className='px-8 py-4 rounded-full bg-white text-text_dark_1 text-base font-sans font-bold'>
                    Sign Up
                </button>
            </div>
        </div>
        <div className="w-custom max-w-custom md:w-custom_2 mx-auto py-16 justify-center flex items-start sm:items-start md:items-center flex-col gap-8">
            <h2 className="text-5xl sm:text-5xl sm:text-start md:text-center md:text-7xl font-medium text-text_dark_1">
                Launch Now
                <span className="block text-sm md:text-xl w-full md:w-3/4 mx-0 md:mx-0 lg:mx-auto py-2 leading-snug text-text_grey_1 font-light">
                    Start your crypto journey in the decentralized finance space in a frictionless and permissionless environment
                </span>
            </h2>

            <button className='px-4 py-2 flex items-center text-base rounded-full bg-text_dark_1 text-white font-sans font-medium'>
                <Image
                    alt="Cotion"
                    style={{ width: "50px",height:"50px"}}
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src='/Bitnob.svg'
                />  <span>Launch App</span>
            </button>
        </div>
    </div>
}

export default Newsletter