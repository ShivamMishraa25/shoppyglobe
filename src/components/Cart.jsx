import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import './style.css'
import { Link } from 'react-router-dom'

function Cart() {
    const cart = useSelector(store => store.cart);

    // Calculate total price
    const totalPrice = cart.reduce(
        (sum, item) => sum + (item.price * (item.quantity || 1)),
        0
    );

    return (
        <section className="cart-section">
            <h1 className="cart-title">Your Shopping Cart</h1>
            {cart.length === 0 ? (
                <div className="cart-empty">
                    <svg width="60" height="60" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#e0e7ff"/>
                        <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332c.82 0 1.54-.5 1.84-1.25l2.54-6A1 1 0 0 0 20.134 7H6.21l-.94-2H2v2h2l3.6 7.59-1.35 2.44A2.003 2.003 0 0 0 7.334 16z" fill="#6366f1"/>
                    </svg>
                    <p>Your cart is empty. Start shopping!</p>
                </div>
            ) : (
                <>
                    <div className="cart-list">
                        {cart.map((item, idx) => (
                            <CartItem key={item.id || idx} item={item} />
                        ))}
                    </div>
                    <div className="cart-checkout-bar">
                        <Link to="/checkout">
                            <button className="cart-checkout-btn">
                                Checkout &mdash; <span className="cart-checkout-total">${totalPrice.toFixed(2)}</span>
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </section>
    )
}

export default Cart