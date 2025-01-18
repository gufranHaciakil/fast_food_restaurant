import { Doughnut } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

const PieCh = () => {
  ChartJS.register(CategoryScale, ArcElement, Tooltip, Legend);
  const piedata = {
    labels: ["Red", "Blue", "Yellow", "Grey", "Orange", "Green", "Blue", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [5, 2, 22, 9, 12, 16, 3, 10],
        backgroundColor: [
          "red",
          "blue",
          "yellow",
          "gray",
          "orange",
          "green",
          "blue",
          "orange",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={piedata} />;
};

export default PieCh;
