"use client";

const headerList = ["BNCommunity", "BNBusiness", "BNAnalytics", "BNExchange"];

const Header = () => {
  return (
    <div className="w-full bg-dark1 py-8">
      <div
        className="flex items-center justify-between max-w-custom mx-auto w-custom "
      >
        <h2 className="font-bold ">Hello</h2>
        <ul
          className="w-full flex items-center gap-8 justify-center"
        >
          {headerList.map((x, index) => {
            return (
              <li key={index} className="text-xl font-sans">
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
