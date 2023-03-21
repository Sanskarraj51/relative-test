import React from "react";

const InnerBox = ({ title, children, size }) => {
  return (
    <>
      <div
        className={`${
          size === "min" ? "w-max" : "w-[90%]"
        } px-4 py-2 mt-2 inline-flex items-center rounded-full bg-[#14172B] space-x-2 `}
      >
        {children}
      </div>
      <h6 className="mt-1  text-[#5A5F7D] text-[12px] ">{title}</h6>
    </>
  );
};

const CryptoBox = (props) => {
  // ** props destructuring
  const { title, tvl, price, pair, profit, loss, color } = props;
  return (
    <div className="relative font-Tomorrow site-header flex flex-col justify-end items-center w-[290.74px] min-w-[290.74px]  h-[350.08px] mt-[4rem] rounded-3xl p-2 pb-7	 ">
      <div
        style={{
          background: `linear-gradient(#626a88 55%, ${color} 100%`,
        }}
        className="logo p-2 "
      >
        <img src={`./images/${title}.png`} />
      </div>
      <h6 className="mt-6 mb-2 text-[12px] text-[#737BAE] ">
        {title || "Bitcoin (BTC)"}
      </h6>

      <InnerBox title="Price">
        <h6 className="w-full text-center text-[16px] ">
          {price || "$ 454545"}
        </h6>
        <span
          className={`text-[12px] ${
            profit ? "text-[#00FFA3]" : "text-[#FF4D4D]"
          } `}
        >
          {profit ? profit : loss}
        </span>
      </InnerBox>
      <InnerBox title="TVL">
        <h6 className="w-full text-center text-[16px] ">{tvl || "$ 454545"}</h6>
      </InnerBox>
      <InnerBox size="min" title="Popular Pairs">
        {pair?.map((item, i) => (
          <img key={i} className="h-6 " src={`./images/${item}.png`} />
        ))}
      </InnerBox>
    </div>
  );
};

export default CryptoBox;
