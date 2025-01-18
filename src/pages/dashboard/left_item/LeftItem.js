import "./left.css";
import PieCh from "./pie/PieCh";
import BarCh from "./bar/BarCh";
const LeftItem = () => {
  return (
    <div className="md:w-2/4">
      <div className="dash-left-item-cont rounded-lg">
        <div className="dash-left-item">
          <div className="flex justify-between flex-wrap gap-4 items-center bg-white p-5 rounded-t-xl">
            <h1>Earnings</h1>
            <div className="flex items-center flex-wrap bg-zinc-100  p-1 pr-4 gap-6 rounded-xl text-sm text-red-800">
              <button className="bg-white p-2 text-black">Monthly </button>
              <button className="hover:text-red-700"> Weekly </button>
              <button className="hover:text-red-700"> Today</button>
            </div>
          </div>
          <div className="bg-white p-5 rounded-b-xl">
            <div>
              <BarCh />
            </div>{" "}
          </div>
          <div className="mt-8 bg-white p-5 rounded-xl">
            <div className="w-[60%] justify-self-center pie-ch">
              <PieCh />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 my-20 bg-white p-7 rounded-xl">
        <h2 className="text-4xl font-medium mb-12">orders from</h2>
        <div className="flex flex-col gap-8">
          <div className="flex justify-between gap-2 items-center">
            <img src="./imgs/frenchfries.png" width={"90px"} alt="" />
            <p>Dine-in</p>
            <p className="w-[50%] bg-gray-200 rounded-full h-4">
              <span className="bg-[#8dda54] text-[#8dda54] h-4 w-[90%] block rounded-full">
                .
              </span>
            </p>
            <p>602 (92%)</p>
          </div>
          <div className="flex justify-between gap-2 items-center">
            <img src="./imgs/masaladosa.png" width={"90px"} alt="" />
            <p>Dine-in</p>
            <p className="w-[50%] bg-gray-200 rounded-full h-4">
              <span className="bg-[#8dda54] text-[#8dda54] h-4 w-[8%] block rounded-full">
                .
              </span>
            </p>
            <p>52 (8%)</p>
          </div>
          <div className="flex justify-between gap-2 items-center">
            <img src="./imgs/ramenn.png" width={"90px"} alt="" />
            <p>Dine-in</p>
            <p className="w-[50%] bg-gray-200 rounded-full h-4">
              <span className="bg-[#8dda54] text-[#8dda54] h-4 w-[20%] block rounded-full">
                .
              </span>
            </p>
            <p>3.1k (20%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftItem;
