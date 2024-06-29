

import { useParams } from 'react-router-dom'
import productSingle from '../assets/dbjson/productSingle'
import { Col, Container, Row } from 'react-bootstrap'
import "./single.css"

function Single() {

  const { itemId } = useParams()

  const productItem = productSingle.filter((item) => {
    return item.id === itemId
  }).map((prod) => {
    return (
      <Container className='mt-80'>
        <Row>
          <Col>
            <img src={prod.strCategoryThumb} className='single_img' />
          </Col>
          <Col>
            <>
              <h1 className='product_title'>{prod.strCategory}</h1>

              <div className='single_price'>
                <span>
                  <del>₹{prod.mrp} </del>
                </span>

                <h5>price:₹{prod.price}  </h5>
              </div>

              <h5 className='model'> <span>Cpu Model:</span> {prod.cpumodel} </h5>
              <hr/>
              <h5 className='brand_name'>brand:<span>{prod.brand}</span> </h5>
              <img className='logos' src={prod.logo} alt={prod.strCategory} />
              <button className='single-cart'>Add to cart</button>
            </>

          </Col>
        </Row>


      </Container>
    )
  })










  return (
    <>
      {productItem}
    </>
  )
}

export default Single