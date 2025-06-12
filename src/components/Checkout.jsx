import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import './style.css'
import { Link, useNavigate } from 'react-router-dom';

function Checkout() {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const [form, setForm] = useState({ name: '', email: '', address: '' });
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    const subtotal = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    function handleInput(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.name || !form.email || !form.address) {
            alert('Please fill in all fields.');
            return;
        }
        setOrderPlaced(true);
        dispatch(clearCart());
    }

    if (orderPlaced) {
        return (
            <div className="checkout-section">
                <div className="checkout-confirmation">
                    <svg width="64" height="64" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" fill="#d1fae5"/>
                        <path d="M8 12.5l3 3 5-5" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <h2>Thank you for your order!</h2>
                    <p>Your order has been placed and will be processed soon.</p>
                    <Link className="checkout-continue-link" to="/">Continue Shopping</Link>
                </div>
            </div>
        );
    }

    return (
        <section className="checkout-section">
            <button
                className="product-detail__back-btn"
                onClick={() => navigate(-1)}
                aria-label="Back"
            >
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" stroke="#6366f1" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Back</span>
            </button>
            <h1 className="checkout-title">Checkout</h1>
            <div className="checkout-content">
                <div className="checkout-cart">
                    <h2 className="checkout-subtitle">Order Summary</h2>
                    {cart.length === 0 ? (
                        <div className="checkout-empty">
                            <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" fill="#e0e7ff"/>
                                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332c.82 0 1.54-.5 1.84-1.25l2.54-6A1 1 0 0 0 20.134 7H6.21l-.94-2H2v2h2l3.6 7.59-1.35 2.44A2.003 2.003 0 0 0 7.334 16z" fill="#6366f1"/>
                            </svg>
                            <div>Your cart is empty.</div>
                        </div>
                    ) : (
                        <ul className="checkout-cart-list">
                            {cart.map(item => (
                                <li className="checkout-cart-item" key={item.id}>
                                    <img src={item.thumbnail} alt={item.title} className="checkout-cart-img" />
                                    <div className="checkout-cart-info">
                                        <div className="checkout-cart-title">{item.title}</div>
                                        <div className="checkout-cart-qty">Qty: {item.quantity}</div>
                                    </div>
                                    <div className="checkout-cart-price">${(item.price * item.quantity).toFixed(2)}</div>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="checkout-summary">
                        <div className="checkout-summary-row">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="checkout-summary-row">
                            <span>Tax (8%)</span>
                            <span>${tax.toFixed(2)}</span>
                        </div>
                        <div className="checkout-summary-row checkout-summary-total">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <form className="checkout-form" onSubmit={handleSubmit}>
                    <h2 className="checkout-subtitle">Shipping Details</h2>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleInput}
                            className="checkout-input"
                            autoComplete="name"
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleInput}
                            className="checkout-input"
                            autoComplete="email"
                        />
                    </label>
                    <label>
                        Address
                        <textarea
                            name="address"
                            value={form.address}
                            onChange={handleInput}
                            className="checkout-input"
                            rows={3}
                            autoComplete="street-address"
                        />
                    </label>
                    <button
                        type="submit"
                        className="checkout-btn"
                        disabled={cart.length === 0}
                    >
                        Place Order
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Checkout
