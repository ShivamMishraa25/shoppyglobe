import React, { useEffect, useState } from 'react'
import useFetchProducts from './useFetchProducts';
import ProductItem from './ProductItem';

function ProductList() {
    const {products, error, isLoading} = useFetchProducts();

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>Oops.. error occured</h1>

    console.log(products)


    return (
        <>
            {products.map(product => {
                return (
                    <ProductItem product={product} key={product.id} />
                )
            })}
        </>
    )
}

export default ProductList