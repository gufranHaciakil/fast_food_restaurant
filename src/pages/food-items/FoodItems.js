import React from "react";
import Table from "../../components/Table/Table";

const FoodItems = () => {
  const tableBody = () => {
    return (
      <tr>
        <td className="name"> Cheese Burger </td>
        <td className="uppercase"> Fast Food </td>
        <td className="flex gap-2">
          <span className="">3</span>
          <img src="./icons/list-text.png" alt="" />
        </td>
        <td> $12.00</td>
        <td>112 </td>

        <td className="flex gap-2 flex-wrap">
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
        <th> ITEM NAME</th>
        <th> CATEGORY </th>
        <th> ADD-ONS </th>
        <th> PRICE</th>
        <th> SALES </th>
        <th> ACTION</th>
      </thead>
    );
  };

  return (
    <Table
      tableBody={tableBody}
      tableHead={tableHead}
      tableCoun={10}
      pagCount={[1]}
      box="Add New"
      title="Food Items"
    />
  );
};

export default FoodItems;
