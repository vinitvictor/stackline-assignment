
import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./SalesChart.css";
import {Sale} from "../../interface/Sale";

export const SalesChart: React.FC<{ sales: Sale[]; title: string }> = ({ sales, title }) => {
    const chartData = {
        labels: sales.map((sale) => sale.weekEnding),
        datasets: [
            {
                label: "Retail Sales",
                data: sales.map((sale) => sale.retailSales),
                borderColor: "#4A90E2",
                backgroundColor: "rgba(74, 144, 226, 0.1)",
                fill: true,
            },
            {
                label: "Wholesale Sales",
                data: sales.map((sale) => sale.wholesaleSales),
                borderColor: "#7B8E97",
                backgroundColor: "rgba(123, 142, 151, 0.1)",
                fill: true,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top" as const,
            },
        },
    };

    return (
        <div className="chart-container">
            <h2 className="chart-title">{title}</h2>
            <Line data={chartData} options={options} className="sales-chart" />
        </div>
    );
};