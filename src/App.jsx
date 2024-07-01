import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Components/Header"
import HomePage from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import SinglePage from "./Pages/SinglePage"
import CartPage from "./Pages/CartPage"
import { createContext, useState } from "react"
import Single from "./Components/Single"

export const CartContext = createContext()

function App() {

const [cart,setCart] = useState([])
  return (
    <CartContext.Provider value={{cart , setCart}}>

<BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage /> } />
      <Route  path='products/:productId' element={<ProductPage cart={cart}  />}/>
      <Route path='/:itemId' element={ <SinglePage />}/>
      <Route  path='/cart' element={   <CartPage  /> }/>
      
     </Routes>
     
     </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App
