
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
 <Navbar bg="light" data-bs-theme="light" className='header'>
        <Container>
          <Navbar.Brand ><Link to={'/'} className='logo'>Pc Store</Link></Navbar.Brand>
          <Nav className="me-auto nav_ul">
            <Link to={'/'}>Home</Link>
            <Link to={'/products'}>Products</Link>
            <Link to={'/cart'}>Cart</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header