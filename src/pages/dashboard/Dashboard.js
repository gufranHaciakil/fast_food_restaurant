import LeftItem from "./left_item/LeftItem";
import RightItem from "./right_item/RightItem";

const Dashboard = () => {
  return (
    <div className="dashboard px-7">
      <div className="dashboard-cont flex flex-col md:flex-row gap-7">
        <LeftItem />
        <RightItem />
      </div>
    </div>
  );
};

export default Dashboard;
