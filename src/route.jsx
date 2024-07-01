import { createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import ErrorPage from "./Pages/ErrorPage";
import SinglePage from "./Pages/SinglePage.jsx"





const router = createBrowserRouter([
    {
        path:'/',
        element: <HomePage />
    },
    {
         path:'products/:productId',
        element:<ProductPage />
    },{
      path:'/:itemId',
      element:<SinglePage />
    },
    {
        path:'cart',
        element:<CartPage />
    },
    {
        path:'*',
        element:<ErrorPage />
    }
])


export {router}