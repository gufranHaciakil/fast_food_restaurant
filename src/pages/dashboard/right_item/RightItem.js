import { useEffect, useState } from "react";
import "./right.css";

const durations = [128, 400, 100, 120]; // القيم المستهدفة
const images = [
  "./imgs/diet.png",
  "./imgs/hot-pot.png",
  "./imgs/salad2.png",
  "./imgs/fast-food.png",
]; // الصور

const RightItem = () => {
  const [counts, setCounts] = useState(new Array(durations.length).fill(0)); // عدادات لجميع العناصر

  useEffect(() => {
    const intervals = durations.map((duration, index) => {
      return setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(newCounts[index] + 1, duration); // زيادة القيم مع التأكد من عدم تجاوز الهدف
          return newCounts;
        });
      }, 10);
    });

    return () => {
      intervals.forEach((interval) => clearInterval(interval)); // تنظيف جميع المؤقتات عند الخروج
    };
  }, []);

  return (
    <div className="md:w-2/4">
      <div className="flex flex-col">
        <div className="flex gap-4 justify-center flex-wrap">
          {durations.map((_, index) => (
            <Box key={index} count={counts[index]} image={images[index]} />
          ))}
        </div>
        <div>
          <div className="bg-white shadow-md mt-12 rounded-lg p-8 ">
            <h2 className="text-4xl font-medium mb-12">Top Selling items</h2>
            <div className="flex flex-col  gap-10">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="./imgs/Cheese-pizza.jpg"
                    className="rounded-lg"
                    width={"120px"}
                    alt=""
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-2xl text-red-900 ">Italiano pizza</p>
                    <p className="text-gray-400">124 times</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-red-900 text-2xl font-semibold">$12.56</p>
                  <button className="font-bold text-red-900 hover:bg-gray-200 p-2 rounded-lg">
                    •••
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="./imgs/Pasta-with-vegetables.jpg"
                    className="rounded-lg"
                    width={"120px"}
                    alt=""
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-2xl text-red-900 ">Cheese Sandwich</p>
                    <p className="text-gray-400">50 times</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-red-900 text-2xl font-semibold">$7.70</p>
                  <button className="font-bold text-red-900 hover:bg-gray-200 p-2 rounded-lg">
                    •••
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="./imgs/hamburger-2.jpg"
                    className="rounded-lg"
                    width={"120px"}
                    alt=""
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-2xl text-red-900 ">French fries</p>
                    <p className="text-gray-400">200 times</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-red-900 text-2xl font-semibold">$47.56</p>
                  <button className="font-bold text-red-900 hover:bg-gray-200 p-2 rounded-lg">
                    •••
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src="./imgs/Diet-salad.jpg"
                    className="rounded-lg"
                    width={"120px"}
                    alt=""
                  />
                  <div className="flex flex-col gap-3">
                    <p className="text-2xl text-red-900 ">Cheese Momos</p>
                    <p className="text-gray-400">88 times</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center">
                  <p className="text-red-900 text-2xl font-semibold">$1.14</p>
                  <button className="font-bold text-red-900 hover:bg-gray-200 p-2 rounded-lg">
                    •••
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// مكون فرعي لعرض كل عنصر
const Box = ({ count, image }) => {
  return (
    <div className="earnings-box bg-white shadow-md h-[176px] flex gap-6 rounded-lg items-center py-12 px-6">
      <img src={image} width="75px" alt="" />
      <div className="flex flex-col gap-4">
        <p className="text-5xl font-semibold count">{count}</p>
        <p>Total Menus</p>
      </div>
    </div>
  );
};

export default RightItem;
