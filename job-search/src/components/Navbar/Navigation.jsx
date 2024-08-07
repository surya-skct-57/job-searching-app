import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png'
import './Navigation.css';

// const NavigationBar = () => {
  
//   return (
//     <Navbar bg="light" expand="lg" className="custom-navbar">
//         <Navbar.Brand href="/">
//             <img src={logo} alt="GetMeHired" style={{ width: 100, height: 50 }} />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="mr-auto custom-nav">
//                 <Nav.Link href="#about" className="custom-nav-link">About</Nav.Link>
//                 <Nav.Link href="#contact" className="custom-nav-link">Contact</Nav.Link>
//                 {isLoggedIn ? (
//                     <Nav.Link onClick={handleLogout} className="custom-nav-link">Logout</Nav.Link>
//                 ) : (
//                     <NavDropdown title="Login" id="basic-nav-dropdown"  className="custom-nav-dropdown">
//                         <NavDropdown.Item href="/login" className="custom-nav-dropdown-item" onClick={handleLoginClick}>Candidate Login</NavDropdown.Item>
//                         <NavDropdown.Item href="#employer-login" className="custom-nav-dropdown-item">Employer Login</NavDropdown.Item>
//                     </NavDropdown>
//                 )}
//             </Nav>
//         </Navbar.Collapse>
//     </Navbar>

//   );
// };


const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      navigate('/');
    }
  }, []);

  const handleCandidateLogin = () => {
    if (isLoggedIn) {
      navigate('/');
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  const handleDropdownToggle = (index) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen((prevState) => !prevState);
  };

  return (
    <section className="navigation">
      <div className="nav-container">
        <div className="brand">
          <a href="/">
            <img className="navbar-logo" src={logo} alt="GetMeHired" />
          </a>
        </div>
        <nav>
          <div className="nav-mobile">
              <a
                id="nav-toggle"
                href="#!"
                onClick={handleMobileNavToggle}
                className={isMobileNavOpen ? 'active' : ''}
              >
                <span></span>
              </a>
          </div>
          <ul className={`nav-list ${isMobileNavOpen ? 'open' : ''}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
              {isLoggedIn ? (
                <li><a href="/logout" onClick={handleLogout} >Logout</a></li>
                ): (
                  <li>
                  <a href="#!" style={{cursor:'pointer '}} onClick={() => handleDropdownToggle(1)}>
                    Login
                  </a>
                  <ul className={`nav-dropdown ${isDropdownOpen[1] ? 'open' : ''}`}>
                    <li>
                      <a href="/candidate-login" onClick={handleCandidateLogin}>Candidate Login</a>
                    </li>
                    <li>
                      <a href="/employee-login">Employer Login</a>
                    </li>
                    
                  </ul>
                </li>
                )
              }
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Navigation;
