import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    function handleAddToCart(product) {
        dispatch(addItem(product));
    }


    return (
        <div className="">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="productImage"
            />
            <h2 className="productTitle">{product.title}</h2>
            <p className="productPrice">${product.price}</p>
            <button onClick={() => handleAddToCart(product)} className="addToCartBtn">Add to Cart</button>
        </div>
    );
};

export default ProductItem;
