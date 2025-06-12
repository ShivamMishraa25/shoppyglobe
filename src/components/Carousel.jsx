import React, { useState, useEffect, useRef } from 'react';
import './carousel.css';
import banner1 from "../assets/images/banner1.webp"
import banner2 from "../assets/images/banner2.webp"
import banner3 from "../assets/images/banner3.webp"

const slides = [
    {
        image: banner3,
        caption: 'Welcome to ShoppyGlobe – Discover the best deals!'
    },
    {
        image: banner1,
        caption: 'Shop the latest trends in fashion, tech, and more'
    },
    {
        image: banner2,
        caption: 'Fast delivery, secure checkout, and top brands'
    }
];

function Carousel() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState('right');
    const intervalRef = useRef();

    function goTo(idx) {
        if (idx === current || animating) return;
        setDirection(idx > current ? 'right' : 'left');
        setAnimating(true);
        setTimeout(() => {
            setCurrent(idx);
            setAnimating(false);
        }, 400);
    }

    function prevSlide() {
        if (animating) return;
        setDirection('left');
        setAnimating(true);
        setTimeout(() => {
            setCurrent(current === 0 ? slides.length - 1 : current - 1);
            setAnimating(false);
        }, 400);
    }

    function nextSlide() {
        if (animating) return;
        setDirection('right');
        setAnimating(true);
        setTimeout(() => {
            setCurrent(current === slides.length - 1 ? 0 : current + 1);
            setAnimating(false);
        }, 400);
    }

    useEffect(() => {
        if (paused) return;
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setDirection('right');
            setAnimating(true);
            setTimeout(() => {
                setCurrent(prev => (prev + 1) % slides.length);
                setAnimating(false);
            }, 400);
        }, 2500);
        return () => clearInterval(intervalRef.current);
    }, [paused, current]);

    return (
        <div className="carousel">
            <div className="carousel__slide">
                <img
                    src={slides[current].image}
                    alt={`slide-${current}`}
                    className={
                        `carousel__img` +
                        (animating
                            ? direction === 'right'
                                ? ' carousel__img--slide-out-left'
                                : ' carousel__img--slide-out-right'
                            : '')
                    }
                    style={{ zIndex: 1 }}
                />
                {!animating ? null : (
                    <img
                        src={
                            direction === 'right'
                                ? slides[(current + 1) % slides.length].image
                                : slides[(current - 1 + slides.length) % slides.length].image
                        }
                        alt="slide-anim"
                        className={
                            'carousel__img ' +
                            (direction === 'right'
                                ? 'carousel__img--slide-in-right'
                                : 'carousel__img--slide-in-left')
                        }
                        style={{ zIndex: 2, position: 'absolute', left: 0, top: 0, width: '100%' }}
                    />
                )}
                <div className="carousel__caption">{slides[current].caption}</div>
                <button className="carousel__arrow carousel__arrow--left" onClick={prevSlide} aria-label="Previous">
                    &#8592;
                </button>
                <button className="carousel__arrow carousel__arrow--right" onClick={nextSlide} aria-label="Next">
                    &#8594;
                </button>
            </div>
            <div className="carousel__dots">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        className={`carousel__dot${idx === current ? ' active' : ''}`}
                        onClick={() => goTo(idx)}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;
