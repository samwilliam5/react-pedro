import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {

const nav=useNavigate();

  const navs=()=>{
    nav('/')
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
        <Nav.Link onClick={navs} >Home </Nav.Link>  
          <Nav.Link> <Link  className='atag' to='/profile'>Profile</Link></Nav.Link>
        <Nav.Link ><Link className='atag' to='/about'>About</Link></Nav.Link>
        <Nav.Link ><Link className='atag' to='/contact'>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
