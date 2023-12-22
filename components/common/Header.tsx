"use client";
import Image from "next/image";
import Link from "next/link";

const headerList1 = [
  {
    path:"community",
    text:"BNCommunity"
  },
  {
    path:"",
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
          <Link href={`/`} className="flex items-center justify-center">
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
            <span className="text-lg -mt-2 text-white font-medium">BitNorm
            </span>
          </Link>
         
        </div>
        <div
          className="hidden md:hidden lg:flex items-center gap-12 justify-center"
        >
          {headerList1.map((x?:any, index?:any) => {
            return (
              <Link legacyBehavior href={`/${x.path}`} key={index} className="text-sm cursor-pointer hover:text-text_grey_1 text-white font-sans" passHref>
                <a target="_blank" className="text-sm cursor-pointer hover:text-text_grey_1 text-white font-sans" rel="noopener noreferrer"> {x.text}</a> 
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
