import React from 'react'
import { Container } from 'react-bootstrap'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>

      <div className='footer_container'>

        <Container>
         
            <Link to={'/'} className='footer_logo'>
              Pc Store
            </Link>
            <div className='footer_content'>
              <div className='footer_content_detail'>
                <p> 1st floor kumily road idukki, kadassikadavu , 685551</p>
                <p>pcstore@gmail.com</p>
                <p>9845434542 / 9834234654</p>
              </div>

              <div>
                <ul className='cart_ullist'>
                  <li className='list_head'>About</li>
                 <Link to={'/'}> <li>About Us</li></Link>
                 <Link to={'/'}> <li>Bank Details</li></Link>
                 <Link to={'/'}> <li>Contact Us</li></Link>
                 <Link to={'/'}> <li>EMI’s</li></Link>
                </ul>
              </div>

                 
              <div>
                <ul className='cart_ullist'>
                  <li className='list_head'>My Account</li>
                  <Link to={'/'}> <li>My Account</li></Link>
                  <Link to={'/'}> <li>Order History</li></Link>
                  <Link to={'/'}> <li>Wishlist</li></Link>
                  <Link to={'/'}> <li>Track Your Order</li></Link>
                </ul>
              </div>

                 
              <div>
                <ul className='cart_ullist'>
                  <li className='list_head'>Policy</li>
                  <Link to={'/'}> <li>Terms & Conditions</li></Link>
                  <Link to={'/'}> <li>Privacy Policy</li></Link>
                  <Link to={'/'}> <li>Faq’s</li></Link>
                </ul>
              </div>

            </div>
           
           <div className='footer_copyRight'>
            <p>Copyright © Pc Store India Pvt Ltd. All Rights Reserved </p>

            <img src="https://www.ezpzsolutions.in/wp-content/uploads/2020/08/payment-footer.png" alt="logo" />
           </div>


        </Container>

      </div>

    </>
  )
}

export default Footer