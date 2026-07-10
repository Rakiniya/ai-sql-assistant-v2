import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function ResultChart({ data }) {

    if (!data || data.length === 0) return null;

    const keys = Object.keys(data[0]);

    if (keys.length < 2) return null;

    const labelColumn = keys[0];
    const valueColumn = keys[1];

    // Only draw chart if second column is numeric
    if (typeof data[0][valueColumn] !== "number") {
        return null;
    }

    const chartData = {
        labels: data.map(item => item[labelColumn]),
        datasets: [
            {
                label: valueColumn,
                data: data.map(item => item[valueColumn]),
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    return (
        <div className="card">
            <h2>📊 Chart</h2>

            <Bar data={chartData} options={options} />
        </div>
    );
}