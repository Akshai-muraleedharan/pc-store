import { Container } from "react-bootstrap"
import productCategory from "../assets/dbjson/productCategory"
import "./ProductList.css"

function ProductList() {

   const product =productCategory.map((item,index)=>{
     return(
      <>
       <li>
        <img src={item.strCategoryThumb}  />
        <h5>{item.strCategory}</h5>
       </li>
      </>
     )
   })

  return (
    <>
      <Container className="mt-80">

        <div className="product-title">
          <h1>Our Products</h1>
          <p className="para_width">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, eum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, rem!</p>
        </div>

        <div className="card">
        <ul className="card-list">
            {product}
        </ul>
        </div>

      </Container>
    </>
  )
}

export default ProductList