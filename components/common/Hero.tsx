"use client";
import React from "react";
import Button from "../ui/button";
type HeroProps = {
  toptext?: string,
  maintext?: string,
  bottomtext?: string,
  buttontext1?: string,
  buttontext2?: string,
  buttonpath1?: string,
  buttonpath2?: string,
  discord?: boolean
};
const Hero: React.FC<HeroProps> = ({
  toptext,
  maintext,
  bottomtext,
  buttontext1,
  buttontext2,
  buttonpath1,
  buttonpath2,
  discord
}) => {
  return (
    <div className="w-full font-sans bg-custom_1 py-4">
      <div className="w-90 sm:py-20 md:py-36 pb-40 mx-auto w-custom gap-12 flex flex-col item-center justify-center items-center">
        <h2 className="text-6xl w-full sm:w-full sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold text-white gap-8">
          <span className="text-base md:text-base mx-0 sm:mx-auto uppercase text-start sm:text-center w-full md:w-4/5 font-light text-text_grey_1 block">{toptext}</span>
          <span style={{ lineHeight: "1.3" }} className="py-4 block">
            {maintext}
          </span>
          <span className="text-base md:text-xl w-full md:w-4/5 leading-loose mx-auto font-light text-text_grey_1 block">{bottomtext}</span>
        </h2>
        <div className="sm:w-custom-2 w-full mx-auto flex item-center justify-center gap-8">
          <Button
            buttontext1='Learn More'
            type={true}
          />

          {discord ? <Button
            buttontext1={buttontext2 ? buttontext2 : 'Launch App'}
            discord={discord}
          /> :
            <Button
              buttontext1='Launch App'
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
