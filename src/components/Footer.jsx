import React from "react";
import "./carousel.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__brand">
                    <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="11" fill="#6366f1" />
                        <path d="M7 17h10l2-8H5l2 8z" fill="#fff"/>
                        <circle cx="9" cy="10" r="1" fill="#6366f1"/>
                        <circle cx="15" cy="10" r="1" fill="#6366f1"/>
                    </svg>
                    <span>ShoppyGlobe</span>
                </div>
                <div className="footer__sections">
                    <div className="footer__section">
                        <div className="footer__section-title">Contact</div>
                        <div className="footer__section-content">
                            Email: shivam.m4464@gmail.com<br />
                            Phone: +91-7355474464<br />
                            Address: Prayagraj
                        </div>
                    </div>
                    <div className="footer__section">
                        <div className="footer__section-title">Quick Info</div>
                        <div className="footer__section-content">
                            About Us<br />
                            FAQs<br />
                            Shipping & Returns<br />
                            Privacy Policy
                        </div>
                    </div>
                    <div className="footer__section">
                        <div className="footer__section-title">Careers</div>
                        <div className="footer__section-content">
                            We’re hiring!<br />
                            Join our team and shape the future of shopping.<br />
                            Email: shivam.m4464@gmail.com
                        </div>
                    </div>
                    <div className="footer__section">
                        <div className="footer__section-title">Newsletter</div>
                        <div className="footer__section-content">
                            Get exclusive offers & updates.<br />
                            <span className="footer__newsletter-fakeinput">your@email.com</span>
                            <span className="footer__newsletter-fakebtn">Subscribe</span>
                        </div>
                    </div>
                </div>
                <div className="footer__tagline">
                    Elevate your shopping experience.<br />
                    <span className="footer__tagline-highlight">Trendy. Trusted. Delivered.</span>
                </div>
            </div>
            <div className="footer__divider"></div>
            <div className="footer__copyright">
                &copy; {new Date().getFullYear()} ShoppyGlobe. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
