import { Fragment, useState } from "react";
import "./left.css";
const LeftMain = () => {
  const [addOrder, setAddOrder] = useState(false);
  const [mainContent, setMainContent] = useState(true);
  const [placeOrder, setPlaceOrder] = useState(false);

  const [count1, setCount1] = useState(3);
  const [count2, setCount2] = useState(5);
  const [count3, setCount3] = useState(9);
  const [count4, setCount4] = useState(4);

  const handleOrders = () => {
    setAddOrder(true);
    setMainContent(false);
  };

  const handleOrderCancel = () => {
    setAddOrder(false);
    setMainContent(true);
  };

  const handlePlaceOrder = () => {
    setAddOrder(false);
    setPlaceOrder(true);
  };

  const handlePlaceCancel = () => {
    setPlaceOrder(false);
    setAddOrder(true);
  };

  return (
    <div
      className={`left-main item-1 fixed left-[2rem] ${
        addOrder + placeOrder && "overflow-y-scroll overflow-x-hidden h-[36rem]"
      } top-[7rem] flex flex-col gap-8 bg-[#ffffffc9] rounded-lg md:min-w-[446px] w-[446px] ${
        addOrder + placeOrder ? "px-0" : "px-7"
      } pb-2`}
    >
      {mainContent && (
        <Fragment>
          <div className="justify-items-center">
            <img src="./imgs/orders.png" width={"95%"} alt="" />
          </div>
          <p className="font-bold text-2xl mt-8">
            Your Order in Progress Check Order
          </p>
          <p className="text- text-gray-400 ">
            Click on any item or Add Order Button to create order
          </p>
          <div className="item-2 flex flex-wrap gap-6">
            <button onClick={handleOrders}>Add Order</button>
            <button>Order status</button>
          </div>
        </Fragment>
      )}

      {addOrder && (
        <Fragment>
          <table id="main-table">
            <thead>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QNT.</th>
              <th>TOTAL ($)</th>
            </thead>

            <tbody>
              <tr>
                <td>Cheese Burst Sandwich</td>
                <td>12.00</td>
                <td className="quant">
                  <span onClick={() => count1 > 1 && setCount1(count1 - 1)}>
                    -
                  </span>
                  {count1}
                  <span onClick={() => count1 < 10 && setCount1(count1 + 1)}>
                    +
                  </span>
                </td>
                <td>12.00</td>
              </tr>
              <tr>
                <td>Veg Cheese Burger </td>
                <td>12.00</td>
                <td className="quant">
                  <span onClick={() => count2 > 1 && setCount2(count2 - 1)}>
                    -
                  </span>
                  {count2}
                  <span onClick={() => count2 < 10 && setCount2(count2 + 1)}>
                    +
                  </span>
                </td>

                <td>12.00</td>
              </tr>
              <tr>
                <td>White Source Pasta</td>
                <td>12.00</td>
                <td className="quant">
                  <span onClick={() => count3 > 1 && setCount3(count3 - 1)}>
                    -
                  </span>
                  {count3}
                  <span onClick={() => count3 < 10 && setCount3(count3 + 1)}>
                    +
                  </span>
                </td>
                <td>12.00</td>
              </tr>
              <tr>
                <td>Farm Ville Pizza</td>
                <td>12.00</td>
                <td className="quant">
                  <span onClick={() => count4 > 1 && setCount4(count4 - 1)}>
                    -
                  </span>
                  {count4}
                  <span onClick={() => count4 < 10 && setCount4(count4 + 1)}>
                    +
                  </span>
                </td>
                <td>12.00</td>
              </tr>
            </tbody>
          </table>
          <div className="flex flex-col order-info">
            <div className="item-1 flex justify-between w-full -mt-4 pb-2 pl-4 pr-9">
              <p> Other Chareg</p>
              <p>0.00</p>
            </div>
            <div className="item-2 flex justify-between w-full pl-4 pr-9 py-2 border-t ">
              <p>Sub Total</p>
              <p>3.06</p>
            </div>
            <div className="item-3">
              <button onClick={handleOrderCancel}>Cancel</button>
              <button onClick={handlePlaceOrder}>Place Order</button>
            </div>
          </div>
        </Fragment>
      )}

      {placeOrder && (
        <div className="place-order ">
          <h2 className="font-bold text-xl">Amount to Pay $46.00</h2>
          <div className="item-1">
            <p>Select Payment Method</p>
            <div className="flex gap-6">
              <div className="flex gap-2 items-center">
                <input type="radio" name="yy" checked id="card" />
                <label htmlFor="card">Card</label>
              </div>
              <div className="flex gap-2 items-center">
                <input type="radio" name="yy" id="cash" />
                <label htmlFor="cash">Cash</label>
              </div>
            </div>
          </div>

          <div className="item-2">
            <p>Order Type</p>
            <div className="flex gap-6 flex-wrap">
              <div className="flex gap-2 items-center">
                <input type="radio" name="xx" id="Takeaway" />
                <label htmlFor="Takeaway">Takeaway</label>
              </div>
              <div className="flex gap-2 items-center">
                <input checked type="radio" name="xx" id="Dine" />
                <label htmlFor="Dine">Dine-in</label>
              </div>
              <div className="ml-6 text-red-900">
                Select table <span className="ml-1">+</span>{" "}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 item-3">
            <p>Customer Info (Optional)</p>
            <input
              type="text"
              placeholder="Enter Full Name"
              className="py-3 px-2 rounded-[1rem] border-[2px] border-gray-100 focus:ring-0 focus:outline-0 "
            />
            <input
              type="text"
              placeholder="Enter Phone Number"
              className="py-3 px-2 rounded-[1rem] border-[2px] border-gray-100 focus:ring-0 focus:outline-0 "
            />
          </div>

          <div className="item-4 mt-3">
            <button onClick={handlePlaceCancel}>Cancel</button>
            <button onClick={() => (window.location = "/")}>Submin</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftMain;
