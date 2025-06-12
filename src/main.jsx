import { StrictMode, Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './components/ProductList.jsx'
import Checkout from './components/Checkout.jsx'
import Homepage from './pages/Homepage.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'

// Lazy load components
const NotFound = lazy(() => import('./components/NotFound.jsx'));
const ProductDetail = lazy(() => import('./components/ProductDetail.jsx'));
const Cart = lazy(() => import('./components/Cart.jsx'));

function LoadingFallback() {
    return (
        <div className="fancy-loader">
            <div className="fancy-loader__spinner"></div>
            <div className="fancy-loader__text">Loading...</div>
        </div>
    );
}

const route =  createBrowserRouter([
    {
        element: <App />,
        path: "/",
        errorElement: (
            <Suspense fallback={<LoadingFallback />}>
                <NotFound />
            </Suspense>
        ),
        children: [
            {
                element: <Homepage />,
                path: "/"
            },
            {
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <ProductDetail />
                    </Suspense>
                ),
                path: "/productdetail/:id"
            },
            {
                element: (
                    <Suspense fallback={<LoadingFallback />}>
                        <Cart />
                    </Suspense>
                ),
                path: "/cart"
            },
            {
                element: <Checkout />,
                path: "/checkout"
            },
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={appStore}>
            <RouterProvider router={route}>
                <App />
            </RouterProvider>
        </Provider>
    </StrictMode>,
)