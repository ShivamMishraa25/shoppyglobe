import React, { useEffect, useState } from 'react'
import useFetchProducts from './useFetchProducts';
import ProductItem from './ProductItem';
import Carousel from './Carousel';
import ImageCollage from './ImageCollage';
import Footer from './Footer';

function ProductList() {
    // Fetch products and loading/error state
    const { products, error, isLoading } = useFetchProducts();

    // UI state for filtering and searching
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchInput, setSearchInput] = useState('');
    const [search, setSearch] = useState('');
    const [lastAction, setLastAction] = useState('category'); // 'search' or 'category'

    // Hardcoded categories for demo; you can make this dynamic if needed
    const categories = ['All', 'fragrances', 'furniture', 'groceries', 'beauty'];

    // Filter products based on search or category
    let filteredProducts;
    if (lastAction === 'search' && search) {
        filteredProducts = products.filter(p =>
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase())
        );
    } else {
        filteredProducts = products.filter(p =>
            selectedCategory === 'All' || p.category === selectedCategory
        );
    }

    // Handle search form submit
    function handleSearch(e) {
        e.preventDefault();
        if (searchInput.trim() === '') {
            alert('Please enter a search term.');
            return;
        }
        setSearch(searchInput);
        setLastAction('search');
    }

    // Handle category button click
    function handleCategory(category) {
        setSelectedCategory(category);
        setLastAction('category');
    }

    // Show loading skeletons while fetching
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
    // Show error UI if fetch fails
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

    // Main product list UI
    return (
        <section className="product-list__section">
            {/* Title */}
            <h1 className="product-list__title">Discover Our Products</h1>
            {/* Search bar */}
            <form className="product-list__searchbar" onSubmit={handleSearch} autoComplete="off">
                <input
                    type="text"
                    className="product-list__search-input"
                    placeholder="Search products..."
                    value={searchInput}
                    onChange={e => setSearchInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="product-list__search-btn"
                    aria-label="Search"
                >
                    <svg className="product-list__search-icon" width="22" height="22" fill="none" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="7" stroke="#fff" strokeWidth="2"/>
                        <path d="M20 20l-3.5-3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </form>
            {/* Category filter buttons */}
            <div className="product-list__filters">
                <p>Filter by Category:</p>
                {categories.map(category => (
                    <button
                        key={category}
                        className={`product-list__filter-btn${selectedCategory === category && lastAction === 'category' ? ' active' : ''}`}
                        onClick={() => handleCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
            {/* Product grid */}
            <div className="product-list product-list--responsive">
                {filteredProducts.length === 0 ? (
                    // No results found
                    <div className="product-list__noresults">
                        <svg width="48" height="48" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="#e0e7ff"/>
                            <path d="M9 10h6M9 14h2" stroke="#6366f1" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        <div>No products found.</div>
                    </div>
                ) : (
                    // Render each product card
                    filteredProducts.map(product => (
                        <ProductItem product={product} key={product.id} />
                    ))
                )}
            </div>
        </section>
    )
}

export default ProductList