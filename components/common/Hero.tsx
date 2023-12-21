"use client";
import React from "react";
type HeroProps = {
  toptext?: string,
  maintext?: string,
  bottomtext?: string,
  buttontext1?: string,
  buttontext2?: string,
  buttonpath1?: string,
  buttonpath2?: string,
};
const Hero: React.FC<HeroProps> = ({
  toptext,
  maintext,
  bottomtext,
  buttontext1,
  buttontext2,
  buttonpath1,
  buttonpath2,
}) => {
  return (
    <div className="w-full font-sans bg-custom">
      <div className="w-90 mx-auto w-custom flex item-center justify-center items-center">
        <h2 className="text-3xl font-bold flex text-white column gap-8">
          <span className="text-xl text-grey1 block">{toptext}</span>
          {maintext}
          <span className="text-xl text-grey1 block">{bottomtext}</span>
        </h2>
      </div>
    </div>
  );
};

export default Hero;
