"use client"
import Image from "next/image";

const Footer = () => {
    return <div style={{ background: "#242526" }} className="w-full py-16 px-8 sm:px-12 md:px-16 flex flex-col gap-12">
        <div className="w-custom md:w-4/5 mx-auto lg:w-custom_2 flex flex-col gap-4 max-w-custom">
            <div className="w-full flex flex-col sm:flex-col md:flex-row gap-16">
                <div className="flex-1 flex md:item-center sm:item-start  justify-between gap-8 flex-col sm:flex-col md:flex-row">
                    <div className="flex items-center gap-1">
                        <Image
                            alt="Cotion"
                            style={{ width: "60px", height: "60px" }}
                            className=''
                            width={0}
                            sizes="100vw"
                            height={0}
                            loading="lazy"
                            src='/Bitnob_1.png'
                        />
                        <h5 className="text-lg text-white font-medium">BitNorm
                        </h5>
                    </div>
                    <div className="flex flex-1">
                        <h5 className="text-text_grey_1 flex items-center gap-4 text-sm">
                            <Image
                                alt="Cotion"
                                style={{ width: "15px", height: "15px" }}
                                className='w-100'
                                width={0}
                                sizes="100vw"
                                height={0}
                                loading="lazy"
                                src='/Cross.png'
                            />
                            The new standard decentralized trading platform</h5>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Image
                        alt="Cotion"
                        style={{ width: "15px", height: "15px" }}
                        className='w-100'
                        width={0}
                        sizes="100vw"
                        height={0}
                        loading="lazy"
                        src='/Twitter.png'
                    /> <Image
                        alt="Cotion"
                        style={{ width: "15px", height: "15px" }}

                        className='w-100'
                        width={0}
                        sizes="100vw"
                        height={0}
                        loading="lazy"
                        src='/Discord.png'
                    />
                </div>
            </div>
            <div className="w-full">
                <h5 className="text-sm font-light text-text_grey_1">
                    © 2022 DefiSpot. All rights reserved.
                </h5>
            </div>
        </div>

    </div>
}

export default Footer