import React from 'react';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import download from "../../assets/download.svg";

// Register required components for the bar chart
ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function Chart2() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // X-axis labels
        datasets: [
            {
                label: '9 month occupancy outlook', // You can hide this in the options
                data: [84, 83, 80, 60, 70], // Numeric values (without 'K')
                backgroundColor: '#5998a9', // Bar color
                borderRadius: 5, // Rounded corners for bars
                barThickness: 10, // Set a fixed width for the bars (in pixels)
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Hides the 'Sales' label
            },
        },
        scales: {
            x: {
                grid: {
                    display: false, // Removes vertical grid lines
                },
                // Adjusting categoryPercentage and barPercentage to control bar width
                categoryPercentage: 0.4, // This controls the width of the bars relative to the available space
                barPercentage: 0.6, // Controls the space between bars within each category
            },
            y: {
                grid: {
                    display: true, // Keeps horizontal grid lines
                },
                ticks: {
                    stepSize: 10, // Controls step size on the Y-axis
                    callback: (value) => `${value}K`, // Adds the "K" suffix
                },
                min: 50, // Set minimum value (numerical)
                max: 90, // Set maximum value (numerical)
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
                padding: '10px',
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
                <h4 style={{ margin: 0, fontWeight: "500" }}>9 month occupancy outlook</h4>
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
            <Bar data={data} options={options} />

            <p style={{ marginTop: "10px", fontSize: "12px" }}><span style={{ fontWeight: "bold" }}>Y</span>=Sq-ft leased less future expiring leases</p>
        </div>
    );
}

export default Chart2;
