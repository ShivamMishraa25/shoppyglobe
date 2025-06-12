import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Cart from './components/Cart.jsx'
import { Provider } from 'react-redux'
import appStore from './utils/appStore.js'
import ProductList from './components/ProductList.jsx'
import Checkout from './components/Checkout.jsx'
import Homepage from './pages/Homepage.jsx'

const route =  createBrowserRouter([
    {
        element: <App />,
        path: "/",
        errorElement: <NotFound />,
        children: [
            {
                element: <Homepage />,
                path: "/"
            },
            {
                element: <ProductDetail />,
                path: "/productdetail/:id"
            },
            {
                element: <Cart />,
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


// const route =  createBrowserRouter([
//     {
//         element: <App />,
//         path: "/",
//         errorElement: <NotFound />,
//         children: [
//             {
//                 element: <ProductDetail />,
//                 path: "/productdetail/:id"
//             },
//             {
//                 element: <Cart />,
//                 path: "/cart"
//             }
//         ]
//     },
// ]);