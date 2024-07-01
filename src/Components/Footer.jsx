import React from 'react'
import { Container } from 'react-bootstrap'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <>
   
   <div className='footer_container'>
    
    <Container>
     <div>
     <Link to={'/'} className='footer_logo'>
      Pc Store
      </Link>
<div className='footer_content'>
 <div className='detail'>
   <h3>hello</h3>
 </div>
 <div>
  <ul>
    <li>hello</li>
  </ul>
 </div>
 
</div>

     </div>


    </Container>

   </div>
   
   </>
  )
}

export default Footer