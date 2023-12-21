'use client'
import React from 'react'
type ButtonProps = {
    buttontext1?: string;
    type?: Boolean;
}
const Button: React.FC<ButtonProps> = ({ buttontext1, type }) => {
    if(type) {
        return <button className='px-8 py-4 border-2 rounded-full border-text_grey_2 text-white text-base font-sans font-bold'>
            {buttontext1}
        </button>
    }
    return <button className='px-8 py-4 rounded-full bg-text_grey_2 text-text_dark_1 text-base font-sans font-bold'>
        {buttontext1}
    </button>
}

export default Button