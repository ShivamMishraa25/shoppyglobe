import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './style.css'
import { Link } from 'react-router-dom';

function Header() {
    const cart = useSelector(store => store.cart);
    const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="header">
            <div className="header__logo">
                <img src="https://img.icons8.com/color/48/000000/shopping-cart-loaded.png" alt="ShoppyGlobe" />
                <span className="header__brand">ShoppyGlobe</span>
            </div>
            <nav className={`header__nav${menuOpen ? ' open' : ''}`}>
                <Link to={"/"} className="header__link" onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to={"/shop"} className="header__link" onClick={() => setMenuOpen(false)}>Shop</Link>
                <Link to={"/about"} className="header__link" onClick={() => setMenuOpen(false)}>About</Link>
                <Link to={"/contact"} className="header__link" onClick={() => setMenuOpen(false)}>Contact</Link>
            </nav>
            <div className='burgerAndCart'>
                <button
                    className={`header__burger${menuOpen ? ' open' : ''}`}
                    aria-label="Toggle navigation"
                    onClick={() => setMenuOpen(open => !open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
                <div className="header__cart">
                    <Link to={"/cart"}>
                        <span className="header__cart-icon">
                            <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                                <path d="M7 18c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zM7.334 16h9.332c.82 0 1.54-.5 1.84-1.25l2.54-6A1 1 0 0 0 20.134 7H6.21l-.94-2H2v2h2l3.6 7.59-1.35 2.44A2.003 2.003 0 0 0 7.334 16z" fill="#222"/>
                            </svg>
                            {totalQuantity > 0 && (
                                <span className="header__cart-badge">{totalQuantity}</span>
                            )}
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header