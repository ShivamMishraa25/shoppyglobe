import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    function handleAddToCart(product) {
        dispatch(addItem(product));
    }

    return (
            <div className="product-card product-card--fadein">
                <Link to={`/productdetail/${product.id}`}><img
                    src={product.thumbnail}
                    alt={product.title}
                    className="product-card__image"
                /></Link>
                <Link to={`/productdetail/${product.id}`}>
                <h2 className="product-card__title">{product.title}</h2>
                </Link>
                <p className="product-card__price">${product.price}</p>
                <button
                    onClick={() => handleAddToCart(product)}
                    className="product-card__btn"
                >
                    Add to Cart
                </button>
            </div>
    );
};

export default ProductItem;
