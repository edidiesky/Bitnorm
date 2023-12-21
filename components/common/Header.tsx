"use client";

const headerList = ["BNCommunity", "BNBusiness", "BNAnalytics", "BNExchange"];

const Header = () => {
  return (
    <div className="w-full bg-custom_1 py-8">
      <div
        className="flex items-center justify-between max-w-custom mx-auto w-custom "
      >
        <img src="../../assets/svg/Logo.svg" alt="" />
        <ul
          className="w-full flex items-center gap-12 justify-center"
        >
          {headerList.map((x, index) => {
            return (
              <li key={index} className="text-base text-white font-sans">
                {x}
              </li>
            );
          })}
        </ul>

        
      </div>
    </div>
  );
};

export default Header;
