import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function NotFound({ message }) {
    return (
        <div className="notfound-section">
            <div className="notfound-illustration">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    <circle cx="60" cy="60" r="58" fill="#e0e7ff" stroke="#6366f1" strokeWidth="4"/>
                    <ellipse cx="60" cy="80" rx="28" ry="10" fill="#c7d2fe"/>
                    <circle cx="45" cy="55" r="6" fill="#6366f1"/>
                    <circle cx="75" cy="55" r="6" fill="#6366f1"/>
                    <rect x="50" y="70" width="20" height="6" rx="3" fill="#6366f1"/>
                </svg>
            </div>
            <h1 className="notfound-title">404 - Page Not Found</h1>
            <p className="notfound-message">
                Sorry, the page you are looking for does not exist.<br />
                {message && (
                    <span className="notfound-error-message">{message}<br /></span>
                )}
                You can go back to the <Link to="/" className="notfound-link">homepage</Link>.
            </p>
        </div>
    )
}

export default NotFound