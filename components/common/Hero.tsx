"use client";
import React from "react";
import Button from "../ui/button";
import Image from "next/image";

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
    <div className="w-full z-10 overflow-hidden relative font-sans bg-custom_1 py-4">
      <Image
        alt="Cotion"
        style={{
          width: "500px",
          height: "600px",
          position: 'absolute', left: '-10%', top: "5%"
        }}
        className='absolute hidden md:hidden lg:block'
        width={0}
        sizes="100vw"
        height={0}
        loading="lazy"
        src='/Union_1.svg'
      />

      <Image
        alt="Cotion"
        style={{
          width: "500px",
          height: "600px",
          position: 'absolute', right: '-15%', bottom: "-30%"
        }}
        className='absolute hidden md:hidden lg:block'
        width={0}
        sizes="100vw"
        height={0}
        loading="lazy"
        src='/Union_2.svg'
      />
      <div className="w-90 py-36 pb-40 mx-auto w-custom gap-12 flex flex-col item-center justify-center items-center">
        <h2 className="text-5xl w-full md:w-full lg:w-custom_2 lg:text-6xl sm:text-start md:text-center font-bold text-white gap-8">
          <div className="w-full overflow-hidden">
            <span
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="200"
              className="text-base md:text-base mx-0 sm:mx-auto uppercase text-start sm:text-start md:text-center w-full md:w-4/5 font-light text-text_grey_1 block">{toptext}</span>

          </div>

          <div className="w-full overflow-hidden">
            <span
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
              style={{ lineHeight: "1.3" }} className="py-4 block">
              {maintext}
            </span>
          </div>
          <div className="w-full overflow-hidden">
            <span
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="600"
              className="text-base md:text-xl w-full md:w-4/5 leading-loose mx-0 sm:text-start md:text-center sm:mx-0 md:mx-auto font-light text-text_grey_1 block">{bottomtext}</span>
          </div>
        </h2>
        <div className="flex-col sm:flex-row sm:justify-start md:justify-center mx-0 sm:mx-0 sm:w-custom-2 w-full md:mx-auto flex gap-4 sm:gap-4 md:gap-8">
          <Button
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay={"300"}
            buttontext1='Learn More'
            type={true}
          />

          {discord ? <Button
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay={"600"}
            buttontext1={buttontext2 ? buttontext2 : 'Launch App'}
            discord={discord}
          /> :
            <Button
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={"600"}
              buttontext1='Launch App'
            />
          }
        </div>
      </div>
    </div>
  );
};

export default Hero;
