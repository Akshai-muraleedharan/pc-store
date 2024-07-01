
import { Container } from "react-bootstrap"
import AllProduct from "../Components/AllProduct"
import Header from "../Components/Header"
import { CartContext } from "../App"
import { useContext } from "react"






function ProductPage() {

  const { cart, setCart } = useContext(CartContext)


  return (
    <>
      <Header />
      <AllProduct  />





    </>
  )
}

export default ProductPage