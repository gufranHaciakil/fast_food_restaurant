import { Fragment, useState } from "react";
import Table from "../../components/Table/Table";
import { Modal } from "flowbite-react";

const Transaction = () => {
  const [openModal, setOpenModal] = useState(false);

  const tableBody = () => {
    return (
      <tr>
        <td>BA85454</td>
        <td className="name">John Doe</td>
        <td>$120.00</td>
        <td className="item">2</td>
        <td>Fast Food</td>
        <td>Cash</td>
        <td>12 June 2020 12:30 pm</td>
        <td className="flex gap-2 flex-wrap">
          <img
            src="./icons/eye.png"
            alt=""
            onClick={() => setOpenModal(true)}
            className="bg-green-100 p-1 rounded-lg hover:scale-110 hover:bg-green-300 cursor-pointer"
          />
          <img
            src="./icons/edit.png"
            alt=""
            className="bg-blue-100 p-1 rounded-lg hover:scale-110 hover:bg-blue-300 cursor-pointer"
          />
          <img
            src="./icons/trash.png"
            alt=""
            className="bg-red-100 p-1 rounded-lg hover:scale-110 hover:bg-red-300 cursor-pointer"
          />
        </td>
      </tr>
    );
  };

  const tableHead = () => {
    return (
      <thead>
        <th className="">ORDER NUM</th>
        <th>NAME</th>
        <th>AMOUNT </th>
        <th>ITEMS</th>
        <th>TYPE</th>
        <th>PAYMENT</th>
        <th> UPDATED ON</th>
        <th> ACTION</th>
      </thead>
    );
  };

  return (
    <Fragment>
      <Table
        tableBody={tableBody}
        tableHead={tableHead}
        tableCoun={6}
        pagCount={[1, 2]}
        title="Transaction"
      />
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="animation"
      >
        <div className="p-8 overflow-hidden">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-medium">Gufran Haci.</h1>
              <p className="my-3 text-gray-400 text-xs">
                B00123 | 15 Jun, 11:35 am
              </p>
            </div>
            <div
              className="font-bold bg-gray-200 h-8 w-8 text-center pt-1 rounded-md"
              onClick={() => setOpenModal(false)}
            >
              X
            </div>
          </div>
          <hr />

          <div>
            <table id="modal-table">
              <thead>
                <th>Q.</th>
                <th>ITEMS</th>
                <th>PRICE</th>
              </thead>
              <tbody>
                <tr>
                  <td>1.</td>
                  <td>Onion Sandwich</td>
                  <td>$12.00</td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Onion Sandwich</td>
                  <td>$12.00</td>
                </tr>
                <tr>
                  <td>1.</td>
                  <td>Onion Sandwich</td>
                  <td>$12.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />

          <div className="mt-10">
            <div className="flex justify-between px-6 flex-wrap ">
              <p>Sub Total</p>
              <p>$51.00</p>
            </div>
            <div className="flex justify-between px-6 flex-wrap my-3">
              <p>Service fee</p>
              <p>$3.00</p>
            </div>
            <div className="flex justify-between py-3 px-6 flex-wrap bg-gray-100">
              <p>
                Total Paid in <span className="font-bold">CASH</span>
              </p>
              <p>$54.00</p>
            </div>
            <div className="flex gap-4 px-4 flex-wrap my-6">
              <img src="./imgs/man.png" alt="" />
              <div className="border-l pl-4">
                <p className="font-bold text-lg mb-2">John Anderson</p>
                <p className="text-xs text-gray-400">
                  Delivery partner assigned
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Transaction;
