import React from "react";
import "./carousel.css";
import fashion1 from "../assets/images/fashion1.png"
import fashion2 from "../assets/images/fashion2.png"
import fashion3 from "../assets/images/fashion3.png"
import fashion4 from "../assets/images/fashion4.webp"

const images = [
    // Replace these with your actual product images
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
    fashion1,
    fashion2,
    fashion3,
    fashion4,
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
];

function ImageCollage() {
    return (
        <div className="collage-section">
            <h2 className="collage-title">Shop the Look</h2>
            <div className="image-collage">
                <div className="collage-col collage-col--left">
                    <img src={images[0]} alt="Product" className="collage-img collage-img--tall" />
                    <img src={images[1]} alt="Product" className="collage-img" />
                </div>
                <div className="collage-col collage-col--center">
                    <img src={images[2]} alt="Product" className="collage-img collage-img--large" />
                    <img src={images[3]} alt="Product" className="collage-img" />
                </div>
                <div className="collage-col collage-col--right">
                    <img src={images[4]} alt="Product" className="collage-img" />
                    <img src={images[5]} alt="Product" className="collage-img collage-img--wide" />
                    <img src={images[6]} alt="Product" className="collage-img" />
                </div>
            </div>
        </div>
    );
}

export default ImageCollage;
