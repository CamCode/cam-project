import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Nav className="me-auto">
                <Nav.Link>Celulares</Nav.Link>
                <Nav.Link>Tablets</Nav.Link>
                <Nav.Link>Notebooks</Nav.Link>
                <CartWidget />
            </Nav>
        </Navbar>
    )
}

export default NavBar