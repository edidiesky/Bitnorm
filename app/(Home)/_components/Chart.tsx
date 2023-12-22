"use client"
import Image from "next/image";

const Chart = () => {
    return <div className="w-full z-20  bg-white py-20">
        <div className="sm:w-full md:w-custom mx-auto flex items-center justify-center gap-16 max-w-custom">
           
            <picture className="sm:w-full sm:-mt-0 z-20 md:w-full lg:w-4/5 md:-mt-48 mx-auto flex rounded-2xl items-center justify-center">
                <Image
                    alt="Cotion"
                    className='w-full rounded-2xl'
                    width={0}
                    sizes="100vw"
                    height={0}
                    loading="lazy"
                    src='/Chart.jpg'
                />
            </picture>
        </div>
    </div>
}

export default Chart