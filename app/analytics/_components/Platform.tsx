"use client"
import Image from "next/image";

const Platform = () => {
    return <div className="w-full bg-custom_1 py-20">
        <div className="w-custom mx-auto flex flex-col justify-center items-center gap-16 max-w-custom">

            <div className="py-4 sm:w-4/5 w-full grid grid-cols-1 gap-x-4 gap-y-8 sm:gap-y-0 sm:grid-cols-2 md:grid-cols-2">
                <picture className="sm:w-full md:w-full lg:w-4/5 -mt-56 mx-auto flex rounded-2xl items-center justify-center">
                    <Image
                        alt="Cotion"
                        className='w-full rounded-2xl'
                        width={0}
                        sizes="100vw"
                        height={0}

                        src='/overview.jpg'
                    />
                </picture>
                <div className="flex flex-col gap-4">
                    <picture className="sm:w-full md:w-full lg:w-4/5 -mt-56 mx-auto flex rounded-2xl items-center justify-center">
                        <Image
                            alt="Cotion"
                            className='w-full rounded-2xl'
                            width={0}
                            sizes="100vw"
                            height={0}

                            src='/overview_top.svg'
                        />
                    </picture><picture className="sm:w-full md:w-full lg:w-4/5 -mt-56 mx-auto flex rounded-2xl items-center justify-center">
                        <Image
                            alt="Cotion"
                            className='w-full rounded-2xl'
                            width={0}
                            sizes="100vw"
                            height={0}

                            src='/overview_bottom.svg'
                        />
                    </picture>
                </div>
            </div>

        </div>
    </div>
}

export default Platform