import React from 'react'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { Outlet } from 'react-router-dom'

function App() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default App