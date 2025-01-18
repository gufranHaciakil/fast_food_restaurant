import "./items.css";

const ItemList = ({ tableCoun, tableBody, tableHead }) => {
  let data = [];

  for (let i = 0; i < tableCoun; i++) {
    data.push(tableBody());
  }

  return (
    <table id="booking-table">
      {tableHead()}
      <tbody>{data}</tbody>
    </table>
  );
};

export default ItemList;
