
import { Col, Container, Row } from 'react-bootstrap'
import "./single.css"
import { useContext } from 'react'
import { CartContext } from '../App';
import {  useNavigate } from 'react-router-dom';
import { ImArrowLeft2 } from "react-icons/im";



function Single({ item }) {

  const { cart, setCart } = useContext(CartContext)

  console.log(cart);

  const addCart = () => {
    setCart([...cart, item])

  }

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== item.id))
  }

  const navigate = useNavigate()

  return (
    <>
      <Container className='mt-80'>
        <button onClick={() => navigate(-1)} style={{border:"none",backgroundColor:"#fff",fontSize:"20px"}}>
          <ImArrowLeft2 />
        </button>
        <Row>
          <Col>
            <img src={item.strCategoryThumb} className='single_img' />
          </Col>
          <Col>
            <>
              <h1 className='product_title'>{item.strCategory}</h1>

              <div className='single_price'>
                <span>
                  <del>₹{item.mrp} </del>
                </span>

                <h5>price:₹{item.price}  </h5>
              </div>

              <h5 className='model'> <span> Model:</span> {item.cpumodel} </h5>
              <hr />
              <h5 className='brand_name'>brand:<span>{item.brand}</span> </h5>
              <img className='logos' src={item.logo} alt={item.strCategory} />


              {cart.includes(item) ? (<button className='single-cart' onClick={removeCart}>remove to cart</button>) :
                (<button className='single-cart' onClick={addCart}>add to cart</button>
                )}
            </>

          </Col>
        </Row>


      </Container>

    </>
  )
}

export default Single