'use client'
import React from 'react'
import { FaDiscord } from "react-icons/fa6";
type ButtonProps = {
    buttontext1?: string;
    type?: Boolean;
    discord?: Boolean;
}
const Button: React.FC<ButtonProps> = ({ buttontext1, type, discord }) => {
    if (type) {
        return <button className='px-8 hover:bg-text_grey_1 py-4 border-2 rounded-full border-text_grey_2 text-white text-base font-sans font-bold'>
            {buttontext1}
        </button>
    }

    if (discord) {
        return <button style={{ background: "#7289DA" }} className='px-8 flex items-center justify-center gap-3 py-4 rounded-full text-text_dark_1 text-base font-sans font-bold'>
            <FaDiscord color={"#fff"} fontSize={'18px'} />  {buttontext1}
        </button>
    }
    return <button className='px-8 hover:bg-text_grey_1 py-4 rounded-full bg-text_grey_2 text-text_dark_1 text-base font-sans font-bold'>
        {buttontext1}
    </button>
}

export default Button