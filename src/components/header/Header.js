import "./header.scss";
import { Container, Row, Col } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Header = () => {


  return (
    <div className="header-section">
      <Container>
        <Row>
          <Col lg={2} md={2}>
            <div className="logo">
              <NavLink to="/">
                <img src="https://mdk.pw/img/logo.png" alt="" />
              </NavLink>
            </div>
          </Col>
          <Col lg={10} md={10}>
            <div expand="lg" className="main-menu mobile-menu">
                <ul>
                    <li>
                      <NavLink 
                        to="/" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        Главная
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/about-us" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        FAQ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/blog" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        Blog
                      </NavLink>
                    </li>
                    <li>
                      <NavLink 
                        to="/gallery" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        Gallery
                      </NavLink>
                        <ul className="dropdown">
                            <li><NavLink to="/">Naoh</NavLink></li>
                            <li><NavLink to="/">Padis</NavLink></li>
                            <li><NavLink to="/">Jacob</NavLink></li>
                            <li><NavLink to="/">Gomez</NavLink></li>
                        </ul>
                    </li>
                    <li>
                      <NavLink 
                        to="/contact" 
                        style={({ isActive }) => ({ color: isActive ? "#e32879" : '#ffffff' })}>
                        Contact
                      </NavLink>
                    </li>
                </ul>
            </div>
          </Col>
        </Row>
        <div id="mobile-menu-wrap"></div>
      </Container>
    </div>
  );
};

export default Header;
