import {Sale} from "./Sale";
import {Product} from "./Product";

export interface SalesTableProps{
    sales: Sale[];
    sortColumn: string | null;
    sortOrder: "asc" | "desc";
    onSort: (column: keyof Product["sales"][number]) => void;
}