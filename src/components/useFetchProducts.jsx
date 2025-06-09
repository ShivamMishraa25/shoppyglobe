import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useFetchProducts() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function callApi() {
            try {
                let res = await axios.get('https://dummyjson.com/products');
                setProducts(res.data?.products || []);
            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        }
        callApi();
    }, []);

    return {products, error, isLoading};
}

export default useFetchProducts