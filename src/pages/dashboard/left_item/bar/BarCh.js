import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

const BarCh = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    datasets: [
      {
        label: "Earnings",
        data: [50, 35, 10, 45, 40, 50, 60, 35, 10],
        barThickness: 30, // تحديد عرض الأعمدة
        backgroundColor: "#54bd85",
      },
    ],
  };

  return <Bar data={data} />;
};

export default BarCh;
