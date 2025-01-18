import Table from "../../components/Table/Table";

const People = () => {
  const tableBody = () => {
    return (
      <tr>
        <td>Cindy Stark </td>
        <td className="time">+1 987 675 5432 </td>
        <td className="item">example@email.com</td>
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
        <th className="">NAME</th>
        <th>PHONE NUMBER</th>
        <th>EMAIL </th>
        <th> CREATED </th>
        <th> ACTION</th>
      </thead>
    );
  };

  return (
    <Table
      tableBody={tableBody}
      tableHead={tableHead}
      tableCoun={6}
      pagCount={[5, 10, 15]}
      box="Add New"
      title="Customer"
    />
  );
};

export default People;
