import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchProducts from './useFetchProducts'
import { useDispatch } from 'react-redux'
import { addItem } from '../utils/cartSlice'
import './style.css'

function ProductDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { products, error, isLoading } = useFetchProducts();

    const product = products.find(p => String(p.id) === String(id));

    if (isLoading) {
        return (
            <div className="product-detail__loading">
                <div className="product-detail__skeleton-img"></div>
                <div className="product-detail__skeleton-title"></div>
                <div className="product-detail__skeleton-desc"></div>
                <div className="product-detail__skeleton-btn"></div>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="product-detail__error">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fee2e2"/>
                    <path d="M12 8v4m0 4h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h2>Product not found</h2>
                <p>Sorry, we couldn't find this product.</p>
            </div>
        );
    }

    return (
        <section className="product-detail__section">
            <div className="product-detail__card">
                <div className="product-detail__img-wrap">
                    <img src={product.thumbnail} alt={product.title} className="product-detail__img" />
                </div>
                <div className="product-detail__info">
                    <h1 className="product-detail__title">{product.title}</h1>
                    <p className="product-detail__desc">{product.description}</p>
                    <div className="product-detail__meta">
                        <span className="product-detail__price">${product.price}</span>
                        <span className="product-detail__brand">{product.brand}</span>
                        <span className="product-detail__category">{product.category}</span>
                    </div>
                    <button
                        className="product-detail__btn"
                        onClick={() => dispatch(addItem(product))}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail