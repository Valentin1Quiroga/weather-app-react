import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainNavbar = () => {
  return ( 
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container className="bg-primary">
        <Navbar.Brand  className="bg-primary fs-2">WEATHER APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar"/>
        <Navbar.Collapse className="bg-primary" id="main-navbar">
          <Nav  className="ms-auto bg-primary">
           <Link className="nav-link bg-primary fs-5 nav-effect" to='/parte1'>Parte 1</Link>
           <Link className="nav-link bg-primary fs-5 nav-effect" to='/parte2'>Parte 2</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
 
export default MainNavbar;