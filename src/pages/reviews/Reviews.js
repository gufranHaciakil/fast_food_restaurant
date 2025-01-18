import React from "react";
import Table from "../../components/Table/Table";

const Reviews = () => {
  const tableBody = () => {
    return (
      <tr>
        <td className="flex gap-2 items-center">
          4.0 <img src="./icons/star.png" width={"20px"} alt="" />
        </td>
        <td className="name">Tommy Hank </td>
        <td>
          food taste is awesome we want
          <span className="item cursor-pointer hover:opacity-60">
            {" "}
            Read all
          </span>
        </td>
        <td> 12 June 2020 12:30 pm</td>
        <td className="item cursor-pointer hover:opacity-60">View order</td>
      </tr>
    );
  };

  const tableHead = () => {
    return (
      <thead>
        <th className=""> RATINGS</th>
        <th>NAME</th>
        <th>REVIEW </th>
        <th>REVIEWED ON </th>
        <th> ORDER</th>
      </thead>
    );
  };

  return (
    <Table
      tableBody={tableBody}
      tableHead={tableHead}
      tableCoun={6}
      pagCount={[1, 2]}
      title="Reviews"
      title2="4.2 ★"
    />
  );
};

export default Reviews;
