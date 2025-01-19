import {Sale} from "./Sale";

export interface Product {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    tags: string[];
    sales: Sale[];
}
