import CryptoBox from "./component/CryptoBox";
import { data } from "./fake-data";

function App() {
  console.log("check", data);
  return (
    <div className="min-w-[100vw] min-h-[100vh] py-8 flex flex-col justify-center   px-6   ">
      <h5 className=" flex items-center font-Tomorrow  text-[#ECF0FF] text-[16px] font-semibold  ">
        <img className="w-5 h-5  mr-3 " alt="" src="./images/activity.png" />
        Trending Assets
      </h5>
      <div className="w-full flex sm:justify-start justify-center items-center mt-[2rem] gap-10 overflow-x-auto hideScroll   ">
        {data?.length
          ? data?.map((item, i) => (
              <CryptoBox
                title={item?.title}
                tvl={item?.tvl}
                price={item?.price}
                pair={item?.pair}
                profit={item?.profit}
                color={item?.color}
                loss={item?.loss}
                img={item?.img}
                key={i}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default App;
