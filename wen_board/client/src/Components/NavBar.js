import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar2 = () =>{ 
    return(
    <>
   <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse nav justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                홈</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/map">지도</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/community">커뮤니티</a>
            </li>
            <NavDropdown
              title="장소"
              id="offcanvasNavbarDropdown-expand-sm"
            > 
              <NavDropdown.Item href="">이기대</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">
                부경대
              </NavDropdown.Item>
            </NavDropdown>
          </ul>
        </div>
      </div>
    </nav>
    </>
    )
};

export default NavBar2;