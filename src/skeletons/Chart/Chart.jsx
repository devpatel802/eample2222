import React from 'react';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import download from "../../assets/download.svg";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function Chart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                label: 'Sales',
                data: [30, 20, 50, 40, 60, 70],
                borderColor: '#5998a9',
                tension: 0.4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hides the legend
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: true,
                },
                ticks: {
                    stepSize: 10,
                    callback: (value) => `${value}`,
                },
                min: 0,
                max: 80,
            },
        },
    };

    return (
        <div
            style={{
                width: '100%',
                margin: '0 auto',
                backgroundColor: 'var(--subCon)',
                borderRadius: '10px',
                padding: '20px 10px',
                marginBottom: '15px',
            }}
        >
            {/* Header Section */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                }}
            >
                <h4 style={{ margin: 0, fontWeight: "500" }}>Active month arrears</h4>
                <img
                    src={download}
                    alt="Download"
                    style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                    }}
                />
            </div>

            {/* Chart Section */}
            <Line data={data} options={options} />

            <p style={{ marginTop: "10px", fontSize: "12px" }}><span style={{ fontWeight: "bold" }}>Y</span>=% invoices not collected in same month</p>
        </div>
    );
}

export default Chart;
