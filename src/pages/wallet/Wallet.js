import Table from "../../components/Table/Table";

const Wallet = () => {
  const tableBody = () => {
    return (
      <tr>
        <td> CA54489 </td>
        <td className="name"> Tommy Hank </td>
        <td>$120.00 </td>
        <td className="item">2</td>
        <td> Dine-in </td>
        <td>12 June 2020 12:30 pm</td>
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
        <th> ORDER NUM</th>
        <th>NAME </th>
        <th> AMOUNT </th>
        <th>ITEMS</th>
        <th> TYPE </th>
        <th> UPDATED ON</th>
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
      box="Send To Bank"
      title="Wallet Balance"
      title2={"$987.50"}
    />
  );
};

export default Wallet;
