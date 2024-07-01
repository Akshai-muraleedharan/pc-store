
import { useContext } from 'react';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../App';



function Header() {
  const { cart, setCart } = useContext(CartContext)
  
  return (
    <div>
 <Navbar bg="light" data-bs-theme="light" className='header'>
        <Container>
          <Navbar.Brand ><Link to={'/'} className='logo'>Pc Store</Link></Navbar.Brand>
          <Nav className="me-auto nav_ul">
            <Link to={'/'}>Home</Link>
            <Link to={'/cart'}>
            <span>{cart.length}</span>
            Cart</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header