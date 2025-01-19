import React from "react";
import "./ProductInfo.css";
import {Product} from "../../interface/Product";

export const ProductInfo: React.FC<{ product: Product }> = ({ product }) => (
    <aside className="product-info">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2>{product.title}</h2>
            <h3>{product.subtitle}</h3>
            <hr className="divider" />
            <div className="product-tags">
                    {product.tags.map((tag, index) => (
                        <span key={index} className="tag">
          {tag}
        </span>
                    ))}
            </div>
    </aside>
);
