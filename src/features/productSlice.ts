import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import jsonData from "../data/stackline_frontend_assessment_data_2021.json";
import { Product } from "../interface/Product";

interface ProductState {
    products: Product[];
    selectedProduct: Product | null;
    salesData: Product["sales"];
    sortColumn: keyof Product["sales"][number] | null;
    sortOrder: "asc" | "desc";
}

const initialState: ProductState = {
    products: jsonData,
    selectedProduct: jsonData[0],
    salesData: jsonData[0]?.sales || [],
    sortColumn: null,
    sortOrder: "asc",
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        selectProduct(state, action: PayloadAction<string>) {
            const product = state.products.find((p) => p.id === action.payload);
            if (product) {
                state.selectedProduct = product;
                state.salesData = product.sales;
            }
        },
        sortByColumn(state, action: PayloadAction<keyof Product["sales"][number]>) {
            const isAscending = state.sortOrder === "asc";
            state.salesData.sort((a, b) => {
                if (a[action.payload] < b[action.payload]) return isAscending ? -1 : 1;
                if (a[action.payload] > b[action.payload]) return isAscending ? 1 : -1;
                return 0;
            });
            state.sortOrder = isAscending ? "desc" : "asc";
            state.sortColumn = action.payload;
        },
    },
});

export const { selectProduct, sortByColumn } = productSlice.actions;
export default productSlice.reducer;
