import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {  Link, NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar">
          <Container fluid>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">홈</Nav.Link>
                  <NavDropdown
                    title="장소"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="">이기대</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="">
                      부경대
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/map">지도</Nav.Link>
                  <Nav.Link href="/community">커뮤니티</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

// export default NavBar;

const NavBar2 = () =>{ 
    return(
    <nav className="navbar">
        <div className="container">
          <Link className="navbar-brand" to="/"> 홈 </Link>              
          <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink               
                 activeClassName="active"
                 className="nav-link" 
                 aria-current="page" 
                 to="/blogs">
                  Blogs
                </NavLink>
              </li>        
            </ul>          
        </div>
    </nav>
    )
};

export default NavBar;