import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { selectProduct, sortByColumn } from "./features/productSlice";
import { Header } from "./components/Header/Header";
import { ProductInfo } from "./components/ProductInfo/ProductInfo";
import { SalesChart } from "./components/SalesChart/SalesChart";
import { SalesTable } from "./components/SalesTable/SalesTable";
import "./App.css";

const App: React.FC = () => {
    const dispatch = useDispatch();
    const {
        products,
        selectedProduct,
        salesData,
        sortColumn,
        sortOrder,
    } = useSelector((state: RootState) => state.product);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Paginate sales data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentSalesData = salesData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(salesData.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (!selectedProduct) return <div>Loading...</div>;

    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <div className="left-panel">
                    <ProductInfo product={selectedProduct} />
                    <div className="product-selector">
                        <label className="product-selector-label">Select Product:</label>
                        <table className="product-table">
                            <thead>
                            <tr>
                                <th>Product Name</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((product: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                                <tr
                                    key={product.id}
                                    className={
                                        product.id === selectedProduct.id
                                            ? "product-row selected"
                                            : "product-row"
                                    }
                                    onClick={() => dispatch(selectProduct(product.id as string))}
                                >
                                    <td>{product.title}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="right-panel">
                    <div className="card">
                        <SalesChart sales={salesData} title="Retail Sales Dashboard" />
                    </div>
                    <div className="card">
                        <SalesTable
                            sales={currentSalesData}
                            sortColumn={sortColumn}
                            sortOrder={sortOrder}
                            onSort={(column) => dispatch(sortByColumn(column))}
                        />
                        <div className="pagination">
                            {[...Array(totalPages)].map((_, index) => (
                                <button
                                    key={index}
                                    className={currentPage === index + 1 ? "page-button active" : "page-button"}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;
