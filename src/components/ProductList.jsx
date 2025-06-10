import React, { useEffect, useState } from 'react'
import useFetchProducts from './useFetchProducts';
import ProductItem from './ProductItem';

function ProductList() {
    const { products, error, isLoading } = useFetchProducts();
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories from products
    // const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
    const categories = ['All', 'fragrances', 'furniture', 'groceries', 'beauty'];

    // Filter products by selected category
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(p => p.category === selectedCategory);

    if(isLoading) {
        return (
            <div className="product-list__loading">
                {[...Array(8)].map((_, i) => (
                    <div className="product-card skeleton" key={i}>
                        <div className="skeleton-img"></div>
                        <div className="skeleton-title"></div>
                        <div className="skeleton-price"></div>
                        <div className="skeleton-btn"></div>
                    </div>
                ))}
            </div>
        );
    }
    if(error) {
        return (
            <div className="product-list__error">
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" fill="#fee2e2"/>
                    <path d="M12 8v4m0 4h.01" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h2>Oops, something went wrong!</h2>
                <p>We couldn't load the products. Please try again later.</p>
            </div>
        );
    }

    return (
        <section className="product-list__section">
            <h1 className="product-list__title">Discover Our Products</h1>
            <div className="product-list__filters">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`product-list__filter-btn${selectedCategory === category ? ' active' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="product-list product-list--responsive">
                {filteredProducts.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </section>
    )
}

export default ProductList