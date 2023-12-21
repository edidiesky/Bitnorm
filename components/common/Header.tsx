"use client";
import Image from "next/image";
import Link from "next/link";

const headerList = ["BNCommunity", "BNBusiness", "BNAnalytics", "BNExchange"];
const headerList1 = [
  {
    path:"",
    text:"BNCommunity"
  },
  {
    path:"business",
    text:"BNBusiness"
  },
  {
    path: "analytics",
    text: "BNAnalytics"
  },
  {
    path: "exchange",
    text: "BNExchange"
  }
];

const Header = () => {
  return (
    <div className="w-full bg-custom_1 py-8">
      <div
        className="flex items-center justify-between max-w-custom mx-auto w-custom "
      >
        <div className="flex items-center gap-1">
          <span className="flex items-center justify-center">
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
          </span>
          <h5 className="text-lg text-white font-medium">BitNorm
          </h5>
        </div>
        <div
          className="hidden sm:hidden md:flex items-center gap-12 justify-center"
        >
          {headerList1.map((x?:any, index?:any) => {
            return (
              <Link href={`/${x.path}`} key={index} className="text-sm cursor-pointer hover:text-text_grey_1 text-white font-sans">
                {x.text}
              </Link>
            );
          })}
        </div>

        <button className='px-8 py-3 rounded-full bg-text_grey_2 hover:bg-text_grey_1 text-text_dark_1 text-sm font-sans font-bold'>
          Launch App 
        </button>

        
      </div>
    </div>
  );
};

export default Header;
