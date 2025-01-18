import Table from "../../components/Table/Table";

const Booking = () => {
  const tableBody = () => {
    return (
      <tr>
        <td>12 June 2020 </td>
        <td className="time">11:30 am </td>
        <td className="item">James Rodriguez </td>
        <td>My Anniversary</td>

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
        <th className="">DATE</th>
        <th>TIME</th>
        <th>CUSTOMER </th>
        <th>NOTE</th>
        <th> UPDATED ON</th>
        <th> ACTION</th>
      </thead>
    );
  };

  return (
    <Table
      tableBody={tableBody}
      tableHead={tableHead}
      tableCoun={6}
      pagCount={[1, 2]}
      box="Book New"
      title="Bookings"
    />
  );
};

export default Booking;
