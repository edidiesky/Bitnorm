"use client";
import Image from "next/image";

const headerList = ["BNCommunity", "BNBusiness", "BNAnalytics", "BNExchange"];

const Header = () => {
  return (
    <div className="w-full bg-custom_1 py-8">
      <div
        className="flex items-center justify-between max-w-custom mx-auto w-custom "
      >
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
        <ul
          className="hidden sm:hidden md:flex items-center gap-12 justify-center"
        >
          {headerList.map((x, index) => {
            return (
              <li key={index} className="text-base cursor-pointer hover:text-text_grey_1 text-white font-sans">
                {x}
              </li>
            );
          })}
        </ul>

        <button className='px-8 py-3 rounded-full bg-text_grey_2 hover:bg-text_grey_1 text-text_dark_1 text-sm font-sans font-bold'>
          Launch App 
        </button>

        
      </div>
    </div>
  );
};

export default Header;
