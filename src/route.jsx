import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";


const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage />
    },
    {
        path:'/products',
        element:<ProductPage />
    },
    {
        path:'/cart',
        element:<CartPage />
    }
])


export {router}