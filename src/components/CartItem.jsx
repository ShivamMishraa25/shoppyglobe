import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, removeItem, deleteItem } from '../utils/cartSlice'
import './style.css'

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="cart-item cart-item--fadein">
            <img src={item.thumbnail} alt={item.title} className="cart-item__image" />
            <div className="cart-item__info">
                <h2 className="cart-item__title">{item.title}</h2>
                <div className="cart-item__details">
                    <span className="cart-item__price">${item.price}</span>
                    <div className="cart-item__qty-controls">
                        <button
                            className="cart-item__qty-btn"
                            onClick={() => dispatch(removeItem(item.id))}
                            aria-label="Decrease quantity"
                        >-</button>
                        <span className="cart-item__qty">{item.quantity}</span>
                        <button
                            className="cart-item__qty-btn"
                            onClick={() => dispatch(addItem(item))}
                            aria-label="Increase quantity"
                        >+</button>
                    </div>
                    <button
                        className="cart-item__remove-btn"
                        onClick={() => dispatch(deleteItem(item.id))}
                        aria-label="Remove item"
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem