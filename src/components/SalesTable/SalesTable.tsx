import React from "react";
import "./SalesTable.css";
import {Sale} from "../../interface/Sale";
import {SalesTableProps} from "../../interface/SalesTableProps";

export const SalesTable: React.FC<SalesTableProps> = ({ sales, sortColumn, sortOrder, onSort }) => {
    return (
        <table className="sales-table">
            <thead>
            <tr>
                <th onClick={() => onSort && onSort("weekEnding")}>
                    Week Ending {sortColumn === "weekEnding" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th onClick={() => onSort && onSort("retailSales")}>
                    Retail Sales {sortColumn === "retailSales" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th onClick={() => onSort && onSort("wholesaleSales")}>
                    Wholesale Sales {sortColumn === "wholesaleSales" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th onClick={() => onSort && onSort("unitsSold")}>
                    Units Sold {sortColumn === "unitsSold" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th onClick={() => onSort && onSort("retailerMargin")}>
                    Retailer Margin {sortColumn === "retailerMargin" && (sortOrder === "asc" ? "▲" : "▼")}
                </th>
            </tr>
            </thead>
            <tbody>
            {sales.map((sale, index) => (
                <tr key={index}>
                    <td>{sale.weekEnding}</td>
                    <td>${sale.retailSales.toLocaleString()}</td>
                    <td>${sale.wholesaleSales.toLocaleString()}</td>
                    <td>{sale.unitsSold}</td>
                    <td>${sale.retailerMargin.toLocaleString()}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};